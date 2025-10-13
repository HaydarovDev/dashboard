import Etherium from '../assets/images/icons/Etherium';
import nft1 from '../assets/images/avatar1.jpg';
import nft2 from '../assets/images/avatar2.jpg';
import nft3 from '../assets/images/avatar3.jpg';
import nft4 from '../assets/images/avatar4.jpg';
import nft5 from '../assets/images/avatar5.jpg';
import nft6 from '../assets/images/avatar6.jpg';

export const viewer_list = [
  {
    id: 1,
    img: nft1,
    userName: 'Alex Ca.',
    Name: 'Alexy',
    list_icon: Etherium,
    list_price: '8,456',
    benefit: +23.11,
  },
  {
    id: 2,
    img: nft2,
    userName: 'Juliya S.',
    Name: 'JuliyaS',
    list_icon: Etherium,
    list_price: '5,327',
    benefit: -32.01,
  },
  {
    id: 3,
    img: nft2,
    userName: 'Juliya S.',
    Name: 'JuliyaS',
    list_icon: Etherium,
    list_price: '5,327',
    benefit: -32.01,
  },
];

export const bestSellers = [
  {
    id: Math.random() * 100,
    avatar: nft1,
    userName: 'Alex Ca.',
    userMail: '@Alexy',
  },
  {
    id: Math.random() * 100,
    avatar: nft2,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: Math.random() * 100,
    avatar: nft3,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: Math.random() * 100,
    avatar: nft4,
    userName: 'Trevor Pu.',
    userMail: '@TrevorP',
  },
  {
    id: Math.random() * 100,
    avatar: nft5,
    userName: 'Juliya Sa.',
    userMail: '@JuliyaS',
  },
  {
    id: Math.random() * 100,
    avatar: nft6,
    userName: 'Trevor Pu.',
    userMail: '@TrevorP',
  },
];
