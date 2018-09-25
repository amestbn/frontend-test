import { ItemActionTypes as ActionType } from '../constants/actionTypes';
import CounterService from '../services/counter.service';

export const ItemActions = {
  requestStarted: () => {
    return {
      type: ActionType.REQUEST_STARTED
    };
  },
  requstFailure: error => ({
    type: ActionType.REQUEST_FAILURE,
    payload: {
      error
    }
  }),
  addItem: item => async(dispatch) => {
    dispatch(ItemActions.requestStarted());
    try {
      const result = await CounterService.post(item);
      dispatch(ItemActions.addItemSuccess(result.data));
    } catch (error) {
      dispatch(ItemActions.requstFailure(error.message));
    }
  },
  addItemSuccess: item => {
    return {
      type: ActionType.ADD_ITEM_SUCCESS,
      payload: item
    };
  },
  getItems: () => async(dispatch) => {
    dispatch(ItemActions.requestStarted());
    try {
      const result = await CounterService.get();
      dispatch(ItemActions.getItemsSuccess(result.data));
    } catch (error) {
      dispatch(ItemActions.requstFailure(error.message));
    }
  },
  getItemsSuccess: items => {
    return {
      type: ActionType.GET_ITEMS_SUCCESS,
      payload: {
        items
      }
    };
  },
  removeItem: id => async(dispatch) => {
    dispatch(ItemActions.requestStarted());
    try {
      await CounterService.delete(id);
      dispatch(ItemActions.removeItemSuccess(id));
    } catch (error) {
      dispatch(ItemActions.requstFailure(error.message));
    }
  },
  removeItemSuccess: id => {
    return {
      type: ActionType.REMOVE_ITEM_SUCCESS,
      payload: id
    };
  },
  increment: id => async(dispatch) => {
    dispatch(ItemActions.requestStarted());
    try {
      const result = await CounterService.increment(id);
      dispatch(ItemActions.updateItemCountSuccess(result.data));
    } catch (error) {
      dispatch(ItemActions.requstFailure(error.message));
    }
  },
  decrement: id => async(dispatch) => {
    dispatch(ItemActions.requestStarted());
    try {
      const result = await CounterService.decrement(id);
      dispatch(ItemActions.updateItemCountSuccess(result.data));
    } catch (error) {
      dispatch(ItemActions.requstFailure(error.message));
    }
  },
  updateItemCountSuccess: item => {
    return {
      type: ActionType.UPDATE_ITEM_COUNT_SUCCESS,
      payload: item
    };
  }
};
