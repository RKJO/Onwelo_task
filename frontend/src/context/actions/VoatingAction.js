import {
  HAS_VOATED,
  ADD_NEW_VOTE,
  VOATERS_SET_LOADING,
  CANDIDATES_SET_LOADING,
} from "context/actions/types";

export const addVoat = (voaterID, candidateID) => (dispatch, getState) => {
  dispatch({ type: VOATERS_SET_LOADING });
  dispatch({ type: CANDIDATES_SET_LOADING });

  const voater = getState().VoatersReducer.voaters_list.filter(
    (voater) => voater.id === voaterID
  )[0];

  const candidate = getState().CandidatesReducer.candidates_list.filter(
    (candidate) => candidate.id === candidateID
  )[0];

  voater.has_voted = true;
  dispatch({
    type: HAS_VOATED,
    payload: voater,
  });

  candidate.votes++;
  dispatch({
    type: ADD_NEW_VOTE,
    payload: candidate,
  });
};
