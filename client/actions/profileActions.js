import axios from 'axios';
const ROOT_URL = '/some/url';

const profileActions = {
  setState: (newState) => {
    return {
      type: 'SET_PROFILE_STATE',
      state: newState,
    };
  },
  getProfile: () => {
    const request = axios.get(`${ROOT_URL}/get`);
    return {
      type: 'GET_PROFILE',
      payload: request,
    };
  },
  setProfile: (props) => {
    const request = axios.post(`${ROOT_URL}/post`, props);
    return {
      type: 'SET_PROFILE',
      payload: request,
    };
  },
};

export default profileActions;
