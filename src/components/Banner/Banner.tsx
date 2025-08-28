import bannerImg from '../../../assets/images/banner.png';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="text">
        <h1>Create and Sell NFTs</h1>
        <p>World's Largest NFT Place</p>
        <div className="buttons">
          <button>Explore More</button>
          <button>Sell Artwork</button>
        </div>
      </div>
      <img
        src={bannerImg}
        width={200}
        height={200}
        alt="not found"
        loading="lazy"
      />
    </div>
  );
};

export default Banner;
