interface IpunchState {
  data: { date: string | null; time: string | null }[];
  punchInDate: string | null;
  punchInTime: string | null;
}
const initialState: IpunchState = {
  data: [],
  punchInDate: null,
  punchInTime: null,
};
const dataReducer = (state: IpunchState = initialState, action: any): IpunchState => {
  switch (action.type) {
    case "PUNCH_IN":
      const newPunchInDate = new Date().toLocaleDateString();
      const newPunchInTime = new Date().toLocaleTimeString();
      return {
        ...state,
        punchInDate: newPunchInDate,
        punchInTime: newPunchInTime,
        data: [...state.data, { date: newPunchInDate, time: newPunchInTime }],
      };
    default:
      return state;
  }
};

export default dataReducer;
