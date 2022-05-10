import {
  ADD_NEW_CANDIDATE,
  CANDIDATES_SET_LOADING,
} from "context/actions/types";

export const AddCandidate = (candidate) => async (dispatch, getState) => {
  dispatch(() => ({ type: CANDIDATES_SET_LOADING }));

  let candidates_list_length =
    getState().CandidatesReducer.candidates_list.length;
  const newCandidate = {
    id: candidates_list_length + 1,
    candidate_name: candidate,
    votes: 0,
  };

  dispatch({
    type: ADD_NEW_CANDIDATE,
    payload: newCandidate,
  });
};
