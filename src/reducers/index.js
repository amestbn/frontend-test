import { ItemActionTypes as ActionType } from '../constants/actionTypes';

const initialState = {
  items: []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case ActionType.REMOVE_ITEM:
      return {...state, items: state.items.filter(value => value.id !== action.payload) };
    case ActionType.INCREMENT:
      const incremented = state.items.map(item => {
        if (item.id !== action.payload) return item;
        item.counter += 1;
        return {
          ...item,
          ...action.item
        };
      });
      return { ...state, items: incremented };
    case ActionType.DECREMENT:
      const decremented = state.items.map(item => {
        if (item.id !== action.payload) return item;
        item.counter -= 1;
        return {
          ...item,
          ...action.item
        };
      });
      return { ...state, items: decremented };
    default:
      return state;
  }
};

export default rootReducer;
