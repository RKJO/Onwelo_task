import {
  GET_VOATER_LIST,
  ADD_NEW_VOATER,
  HAS_VOATED,
  VOATERS_SET_LOADING,
} from "context/actions/types";

const initialState = {
  voaters_list: [
    {
      id: 1,
      voater_name: "Pappa",
      has_voted: false,
    },
    {
      id: 2,
      voater_name: "Rumcajs",
      has_voted: true,
    },
  ],
  voaters_loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VOATER_LIST:
      return {
        ...state,
        ...action.payload,
        voaters_loading: false,
      };
    case ADD_NEW_VOATER:
      const new_voater_list = state.voaters_list;
      new_voater_list.push(action.payload);
      return {
        ...state,
        voaters_list: new_voater_list,
        voaters_loading: false,
      };
    case HAS_VOATED:
      return {
        ...state,
        voaters_loading: false,
      };
    case VOATERS_SET_LOADING:
      return {
        ...state,
        voaters_loading: true,
      };

    default:
      return state;
  }
};
