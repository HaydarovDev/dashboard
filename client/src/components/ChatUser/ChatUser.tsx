import { useNavigate, useParams } from 'react-router-dom';
import './ChatUser.css';
import { users } from '../../service/service';
import VideoIcon from '../../assets/images/icons/VideoIcon';
import PhoneIcon from '../../assets/images/icons/PhoneIcon';
import DotsMoreIcon from '../../assets/images/icons/DotsMoreIcon';
import ArrowLeft from '../../assets/images/icons/ArrowLeft';
import MicrophoneIcon from '../../assets/images/icons/MicrophoneIcon';
import SendIcon from '../../assets/images/icons/SendIcon';
import React, { useEffect, useRef, useState } from 'react';

const ChatUser = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const chatRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key !== 'Enter') return;

    const value = chatRef.current?.value ?? '';
    if (value === '') return;

    setMessages((prev) => [...prev, value]);

    if (chatRef.current) {
      chatRef.current.value = '';
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const userDetails = users.find((user) => user.username === username);

  return (
    <article className="chat">
      <header>
        <div className="user">
          <button onClick={() => navigate('/message')}>
            <ArrowLeft />
          </button>
          {userDetails?.image === '' ? (
            <span>{userDetails?.username.slice(0, 1)}</span>
          ) : (
            <img src={userDetails?.image} alt="avatar" />
          )}
          <div>
            <h4>{userDetails?.username}</h4>
            <p>Online</p>
          </div>
        </div>
        <div className="icons">
          <button aria-label="videochat">
            <VideoIcon />
          </button>
          <button aria-label="call">
            <PhoneIcon />
          </button>
          <button aria-label="moresettings">
            <DotsMoreIcon />
          </button>
        </div>
      </header>
      <div className="messages">
        {messages &&
          messages.map((value, index) => {
            return (
              <div key={index}>
                <p>{value}</p>
              </div>
            );
          })}
        <div ref={messagesEndRef} />
      </div>

      <footer>
        <button>
          <MicrophoneIcon />
        </button>
        <label htmlFor="inputchat">
          <input
            type="text"
            ref={chatRef}
            placeholder="Message"
            id="inputchat"
            onKeyDown={handleSubmit}
            autoFocus
          />
          <button onClick={() => handleSubmit()}>
            <SendIcon />
          </button>
        </label>
      </footer>
    </article>
  );
};

export default ChatUser;
