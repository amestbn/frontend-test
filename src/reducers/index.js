import { ItemActionTypes as ActionType } from '../constants/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.REQUEST_STARTED:
      return {
        ...state,
        loading: true
      }
    case ActionType.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case ActionType.ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items:[...state.items, action.payload]
      }
    case ActionType.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.items
      }
    case ActionType.REMOVE_ITEM_SUCCESS:
      const items = state.items.filter(item => item.id !== action.payload)
      return {
        ...state,
        loading: false,
        error: null,
        items: items
      }
    case ActionType.UPDATE_ITEM_COUNT_SUCCESS:
      const updatedItems = state.items.map(item => {
        if (item.id !== action.payload.id) return item;
        item.count = action.payload.count
        return item;
      });
      return {
        ...state,
        loading: false,
        error: null,
        items: updatedItems
      }
    default:
      return state;
  }
};

export default rootReducer;
