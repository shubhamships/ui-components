interface PunchData {
  time: string;
  type: string;
  id: number;
}
interface IpunchState {
  punchData: PunchData[]
  punchInDate: string | null;
  punchOutDate: string | null;
  type?: string;
  id: number;
}
const initialState: IpunchState = {
  punchData: [],
  punchInDate: null,
  punchOutDate: null,
  type: "",
  id: 0
};


const dataReducer = (state: IpunchState = initialState, action: any): IpunchState => {
  switch (action.type) {
    case "PUNCH_IN":
      return {
        ...state,
        id: state.id + 1,
        punchInDate: action.payload,
        punchData: [...state.punchData, {id: state.id + 1,  time: action.payload, type: "IN" }]
      };
    case "PUNCH_OUT":
      return {
        ...state,
        id: state.id + 1,
        punchOutDate: action.payload,
        punchData: [...state.punchData, {id: state.id + 1,  time: action.payload, type: "OUT" }]
      };
    default:
      return state;
  }
};

export default dataReducer;
