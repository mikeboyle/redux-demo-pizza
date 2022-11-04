import actionTypes from '../actions/actionTypes';

const FIELD_NAMES = ['name', 'address', 'phone', 'creditCard'];

const initialState = () => {
  return FIELD_NAMES.reduce((acc, field) => {
    acc[field] = '';
    return acc;
  }, {});
};

const deliveryInfo = (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DELIVERY_INFO:
      const { field, value } = action.payload;
      if (!FIELD_NAMES.includes(field)) {
        return state;
      }
      return { ...state, [field]: value };
    default:
      return state;
  }
};

export default deliveryInfo;
