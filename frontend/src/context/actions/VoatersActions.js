import { ADD_NEW_VOATER, VOATERS_SET_LOADING } from "context/actions/types";

export const addVoater = (voater) => async (dispatch, getState) => {
  dispatch({ type: VOATERS_SET_LOADING });

  let voaters_list_length = getState().VoatersReducer.voaters_list.length;
  const newVoater = {
    id: voaters_list_length + 1,
    voater_name: voater,
    has_voted: false,
  };

  dispatch({
    type: ADD_NEW_VOATER,
    payload: newVoater,
  });
};
