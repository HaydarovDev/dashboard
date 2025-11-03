import './Conversion.css';

const Conversion = () => {
  return (
    <div className="conversion">
      <h3>Conversion</h3>
      <div>
        <div className="convert">
          <select name="" id="">
            <option value="usd">USD</option>
            <option value="usd">EUR</option>
            <option value="usd">UZS</option>
          </select>
          <input type="number" placeholder="Enter amount" />
        </div>
        <div className="convert">
          <select name="" id="">
            <option value="usd">USD</option>
            <option value="usd">EUR</option>
            <option value="usd">UZS</option>
          </select>
          <input type="number" placeholder="Enter amount" />
        </div>
      </div>
    </div>
  );
};

export default Conversion;
