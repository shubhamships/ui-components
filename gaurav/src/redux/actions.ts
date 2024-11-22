export const PUNCH_IN = "PUNCH_IN";
export const PUNCH_OUT = "PUNCH_OUT";
export const punchIn = (user: any) => {
  return {
    type: PUNCH_IN,
    payload: user,
  };
};
export const punchOut = (punchOutDate: any) => {
  return {
    type: PUNCH_OUT,
    payload: punchOutDate,
  };
};
