import { ItemActionTypes as ActionType } from '../constants/actionTypes';

export const ItemActions = {
  addItem: item => {
    return {
      type: ActionType.ADD_ITEM,
      payload: item
    }
  },
  removeItem: id => {
    return {
      type: ActionType.REMOVE_ITEM,
      payload: id
    }
  },
  increment: id => {
    return {
      type: ActionType.INCREMENT,
      payload: id
    }
  },
  decrement: id => {
    return {
      type: ActionType.DECREMENT,
      payload: id
    }
  }
};
