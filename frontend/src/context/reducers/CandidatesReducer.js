import {
  GET_CANDIDATES_LIST,
  ADD_NEW_CANDIDATE,
  ADD_NEW_VOTE,
  CANDIDATES_SET_LOADING,
} from "context/actions/types";

const initialState = {
  candidates_list: [
    {
      id: 1,
      candidate_name: "Johny Bravo",
      votes: 2,
    },
    {
      id: 2,
      candidate_name: "Pluto",
      votes: 5,
    },
  ],
  candidates_loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES_LIST:
      return {
        ...state,
        ...action.payload,
        candidates_loading: false,
      };
    case ADD_NEW_CANDIDATE:
      const new_candidate_list = state.candidates_list;
      new_candidate_list.push(action.payload);
      return {
        ...state,
        candidates_list: new_candidate_list,
        candidates_loading: false,
      };
    case ADD_NEW_VOTE:
      return {
        ...state,
        candidates_loading: false,
      };
    case CANDIDATES_SET_LOADING:
      return {
        ...state,
        candidates_loading: true,
      };

    default:
      return state;
  }
};
