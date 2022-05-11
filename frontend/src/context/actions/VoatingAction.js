import {
  HAS_VOATED,
  ADD_NEW_VOTE,
  VOATERS_SET_LOADING,
  CANDIDATES_SET_LOADING,
} from "context/actions/types";

export const addVoat = (voaterID, candidateID) => (dispatch, getState) => {
  dispatch({ type: VOATERS_SET_LOADING });
  dispatch({ type: CANDIDATES_SET_LOADING });

  dispatch({
    type: HAS_VOATED,
    payload: voaterID,
  });

  dispatch({
    type: ADD_NEW_VOTE,
    payload: candidateID,
  });
};
