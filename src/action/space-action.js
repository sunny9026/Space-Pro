import axios from 'axios';

import {
  ROOT,
  REQUEST_DATA_P,
  RECEIVE_DATA_P
} from "./types";


export const fetchData_P = (data) => async dispatch => {
  let url = `${data.land && `&land_success=${data.land}`}${data.launch && `&launch_success=${data.launch}`}${data.year && `&launch_year=${data.year}`}`;
  console.log('url is: ', url)
  try {
      dispatch({ type: REQUEST_DATA_P });
    const res = await axios.get(`${ROOT}/launches?limit=100${url}`);
    dispatch({ type: RECEIVE_DATA_P, payload: res.data });
    
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_DATA_P, payload: [] });
  }
};
