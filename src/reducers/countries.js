import {
  REQUEST_DATA_P,
  RECEIVE_DATA_P
} from "../action/types";

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA_P: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_DATA_P: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};