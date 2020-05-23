import {
  GET_ADD_TO_CARD,
  CardState,
  CardActionType,
  GET_DELETE_TO_CARD,
} from "../types";

const initialState: CardState = {
  data: [],
};

export default function reducer(
  state = initialState,
  action: CardActionType
): CardState {
  switch (action.type) {
    case GET_ADD_TO_CARD:
      if (state.data?.indexOf(action.playload) !== -1) return state;
      state.data?.push(action.playload);
      return { ...state, data: state.data?.slice(0) };
    case GET_DELETE_TO_CARD:
      if (state.data?.length === 0) return state;
      return {
        ...state,
        data: state.data?.filter((course) => course !== action.playload),
      };
    default:
      return state;
  }
}
