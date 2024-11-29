interface PunchData {
  time: string;
}
interface IpunchState {
  punchData: PunchData[]
  punchInDate: string | null;
  punchOutDate: string | null;
}
const initialState: IpunchState = {
  punchData: [],
  punchInDate: null,
  punchOutDate: null,
};
const dataReducer = (state: IpunchState = initialState, action: any): IpunchState => {
  switch (action.type) {
    case "PUNCH_IN":
      return {
        ...state,
        punchInDate: action.payload,
        punchData: [...state.punchData, { time: action.payload }]
      };
    case "PUNCH_OUT":
      return {
        ...state,
        punchOutDate: action.payload,
        punchData: [...state.punchData, { time: action.payload }]
      };
    default:
      return state;
  }
};

export default dataReducer;
