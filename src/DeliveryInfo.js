import { useDispatch, useSelector } from 'react-redux';
import { updateDeliveryInfo } from './app/actions';

const DeliveryInfo = () => {
  const dispatch = useDispatch();
  const deliveryInfo = useSelector((state) => state.deliveryInfo);
  const { name, address, phone, creditCard } = deliveryInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your order is on the way!');
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    dispatch(updateDeliveryInfo(field, value));
  };

  return (
    <div>
      <h3>Delivery Info</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, 'name')}
          placeholder="Name"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => handleChange(e, 'address')}
          placeholder="Address"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => handleChange(e, 'phone')}
          placeholder="Phone"
        />
        <input
          type="text"
          value={creditCard}
          onChange={(e) => handleChange(e, 'creditCard')}
          placeholder="Credit Card"
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default DeliveryInfo;
