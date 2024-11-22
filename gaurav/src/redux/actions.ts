export const PUNCH_IN = "PUNCH_IN";
export const punchIn = (user: any) => {
  return {
    type: PUNCH_IN,
    payload: user,
  };
};
