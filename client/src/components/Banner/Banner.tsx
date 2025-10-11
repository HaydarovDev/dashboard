import bannerImg from '../../assets/images/banner.png';
import useTheme from '../../Context/UseTheme';
import './Banner.css';
const Banner = () => {
  const { dark } = useTheme();
  return (
    <div className="banner">
      <div className="text">
        <h1>Create and Sell NFTs</h1>
        <p className={dark ? 'dark' : ''}>World's Largest NFT Place</p>
        <div className="buttons">
          <button>Explore More</button>
          <button>Sell Artwork</button>
        </div>
      </div>
      <img
        src={bannerImg}
        width={180}
        height={180}
        alt="not found"
        loading="lazy"
      />
    </div>
  );
};

export default Banner;
