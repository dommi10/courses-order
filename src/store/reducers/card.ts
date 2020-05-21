import { GET_ADD_TO_CARD, CardState, CardActionType } from "../types";

const initialState: CardState = {
  data: [],
};

export default function reducer(
  state = initialState,
  action: CardActionType
): CardState {
  switch (action.type) {
    case GET_ADD_TO_CARD:
      if (state.data?.indexOf(action.playload) === 0) return state;
      state.data?.push(action.playload);
      const data = state.data?.slice(0);
      return { ...state, data };
    default:
      return state;
  }
}
