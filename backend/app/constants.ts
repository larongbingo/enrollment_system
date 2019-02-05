export const CONSTANTS = {
  dataAccess: {
    AcademicTime: Symbol.for("AcademicTimeDataAccess"),
    RequiredSession: Symbol.for("RequiredSessionDataAccess"),
    Room: Symbol.for("RoomDataAccess"),
    Schedule: Symbol.for("ScheduleDataAccess"),
    Session: Symbol.for("SessionDataAccess"),
    Subject: Symbol.for("SubjectDataAccess"),
    Token: Symbol.for("TokenDataAccess"),
    UserDetails: Symbol.for("UserDetailsDataAccess"),
    User: Symbol.for("UserDataAccess"),
  },
  services: {
    Authentication: Symbol.for("Authentication"),
    SessionManager: Symbol.for("SessionManager"),
    UserValidation: Symbol.for("UserValidation"),
    AccountRegistry: Symbol.for("AccountRegistry"),
  },
};

export default CONSTANTS;
