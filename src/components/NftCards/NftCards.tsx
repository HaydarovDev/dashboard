import { Link } from 'react-router-dom';

const NftCards = () => {
  const data = [
    {
      id: Date.now(),
      image: '',
      title: '',
      priceName: '',
      date: new Date().getDay(),
      price: '',
    },
    {
      id: Date.now(),
      image: '',
      title: '',
      priceName: '',
      price: '',
    },
    {
      id: Date.now(),
      image: '',
      title: '',
      priceName: '',
      price: '',
    },
    {
      id: Date.now(),
      image: '',
      title: '',
      priceName: '',
      price: '',
    },
  ];

  console.log(data);

  return (
    <article className="cards">
      <header>
        <h1>Trending</h1>
        <Link to="/">View More</Link>
      </header>
      {/* {data && data.map((card) => {})} */}
    </article>
  );
};

export default NftCards;
