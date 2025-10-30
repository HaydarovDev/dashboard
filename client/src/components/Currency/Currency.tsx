import { currencies } from '../../service/service';
import './Currency.css';

const Currency = () => {
  return (
    <div className="currency">
      <h3>Currency</h3>
      <div className="flags">
        {currencies.map((value) => {
          return (
            <div key={value.id} className="flag">
              <div className="image">
                <img src={value?.flag} alt="" />
                <h3>{value?.code}</h3>
              </div>
              <div className="code">
                <h3>
                  {value?.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                  <p>{value?.code}</p>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Currency;
