interface IpunchState {
  punchInDate: string | null;
  punchOutDate: string | null;
}
const initialState: IpunchState = {
  punchInDate: null,
  punchOutDate: null,
};
const dataReducer = (state: IpunchState = initialState, action: any): IpunchState => {
  switch (action.type) {
    case "PUNCH_IN":
      return {
        ...state,
        punchInDate: action.payload,
      };
    case "PUNCH_OUT":
      return {
        ...state,
        punchOutDate: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
