export const CONSTANTS = {
  dataAccess: {
    User: Symbol.for("UserDataAccess"),
    Token: Symbol.for("TokenDataAccess"),
  },
  services: {
    Authentication: Symbol.for("Authentication"),
    SessionManager: Symbol.for("SessionManager"),
  },
};

export default CONSTANTS;
