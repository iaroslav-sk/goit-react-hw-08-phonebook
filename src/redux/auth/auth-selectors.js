const getIsAntenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

export { getIsAntenticated, getUserName };
