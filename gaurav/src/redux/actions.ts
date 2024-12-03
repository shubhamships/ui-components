export const PUNCH_IN = "PUNCH_IN";
export const PUNCH_OUT = "PUNCH_OUT";
export const punchIn = (time: any) => {
  return {
    type: PUNCH_IN,
    payload: time
  };
};
export const punchOut = (time: any) => {
  return {
    type: PUNCH_OUT,
    payload: time
  };
};
