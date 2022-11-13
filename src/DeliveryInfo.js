import { connect } from 'react-redux';
import { updateDeliveryInfo } from './app/actions';

const DeliveryInfo = ({ deliveryInfo, handleChange }) => {
  const { name, address, phone, creditCard } = deliveryInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your order is on the way!');
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

const mapStateToProps = (state) => ({
  deliveryInfo: state.deliveryInfo,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e, field) => {
    const { value } = e.target;
    dispatch(updateDeliveryInfo(field, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryInfo);
