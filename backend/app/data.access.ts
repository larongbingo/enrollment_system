import deprecated from "deprecated-decorator";
import { injectable } from "inversify";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";
// tslint:disable-next-line:no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import AcademicTime from "./database/models/academic.time";
import RequiredSession from "./database/models/required.session";
import Room from "./database/models/room";
import Schedule from "./database/models/schedule";
import Session from "./database/models/session";
import Subject from "./database/models/subject";
import Token from "./database/models/token";
import User from "./database/models/user";
import UserDetails from "./database/models/user.details";
import { IDataAccess } from "./interfaces/IDataAccess";

// tslint:disable:max-classes-per-file

@injectable()
export class UserDataAccess implements IDataAccess<User> {
  public async create(values?: FilteredModelAttributes<User>, options?: ICreateOptions) {
    return User.create(values, options);
  }

  public async findOne(options?: IFindOptions<User>) {
    return User.findOne(options);
  }

  public async findAll(options?: IFindOptions<User>) {
    return User.findAll(options);
  }
}

/**
 * @deprecated
 */
@deprecated()
@injectable()
export class TokenDataAccess implements IDataAccess<Token> {
  public async create(values?: FilteredModelAttributes<Token>, options?: ICreateOptions) {
    return Token.create(values, options);
  }

  public async findOne(options?: IFindOptions<Token>) {
    return Token.findOne(options);
  }

  public async findAll(options?: IFindOptions<Token>) {
    return Token.findAll(options);
  }
}

export class UserDetailsDataAccess implements IDataAccess<UserDetails> {
  public async create(values?: FilteredModelAttributes<UserDetails>, options?: ICreateOptions): Promise<UserDetails> {
    return UserDetails.create(values, options);
  }  
  
  public async findOne(options?: IFindOptions<UserDetails> | undefined): Promise<UserDetails | null> {
    return UserDetails.findOne(options);
  }
  public async findAll(options?: IFindOptions<UserDetails> | undefined): Promise<UserDetails[]> {
    return UserDetails.findAll(options);
  }
}

export class AcademicTimeDataAccess implements IDataAccess<AcademicTime> {
  public async create(values?: FilteredModelAttributes<AcademicTime>, options?: ICreateOptions): Promise<AcademicTime> {
    return AcademicTime.create(values, options);
  }

  public async findOne(options?: IFindOptions<AcademicTime> | undefined): Promise<AcademicTime | null> {
    return AcademicTime.findOne(options);
  }

  public async findAll(options?: IFindOptions<AcademicTime> | undefined): Promise<AcademicTime[]> {
    return AcademicTime.findAll(options);
  }
}

export class RequiredSessionDataAccess implements IDataAccess<RequiredSession> {
  public async create
  (values?: FilteredModelAttributes<RequiredSession>, options?: ICreateOptions): Promise<RequiredSession> {
    return RequiredSession.create(values, options);
  }
  
  public async findOne(options?: IFindOptions<RequiredSession> | undefined): Promise<RequiredSession | null> {
    return RequiredSession.findOne(options);
  }

  public async findAll(options?: IFindOptions<RequiredSession> | undefined): Promise<RequiredSession[]> {
    return RequiredSession.findAll(options);
  }
}

export class RoomDataAccess implements IDataAccess<Room> {
  public async create(values?: FilteredModelAttributes<Room>, options?: ICreateOptions): Promise<Room> {
    return Room.create(values, options);
  }  
  
  public async findOne(options?: IFindOptions<Room> | undefined): Promise<Room | null> {
    return Room.findOne(options);
  }
  
  public async findAll(options?: IFindOptions<Room> | undefined): Promise<Room[]> {
    return Room.findAll(options);
  }
}

export class ScheduleDataAccess implements IDataAccess<Schedule> {
  public async create(values?: FilteredModelAttributes<Schedule>, options?: ICreateOptions): Promise<Schedule> {
    return Schedule.create(values, options);
  }  
  
  public async findOne(options?: IFindOptions<Schedule> | undefined): Promise<Schedule | null> {
    return Schedule.findOne(options);
  }
  
  public async findAll(options?: IFindOptions<Schedule> | undefined): Promise<Schedule[]> {
    return Schedule.findAll(options);
  }
}

export class SessionDataAccess implements IDataAccess<Session> {
  public async create(values?: FilteredModelAttributes<Session>, options?: ICreateOptions): Promise<Session> {
    return Session.create(values, options);
  }  
  
  public async findOne(options?: IFindOptions<Session> | undefined): Promise<Session | null> {
    return Session.findOne(options);
  }

  public async findAll(options?: IFindOptions<Session> | undefined): Promise<Session[]> {
    return Session.findAll(options);
  }
}

export class SubjectDataAccess implements IDataAccess<Subject> {
  public async create(values?: FilteredModelAttributes<Subject>, options?: ICreateOptions): Promise<Subject> {
    return Subject.create(values, options);
  }
  
  public async findOne(options?: IFindOptions<Subject> | undefined): Promise<Subject | null> {
    return Subject.findOne(options);
  }

  public async findAll(options?: IFindOptions<Subject> | undefined): Promise<Subject[]> {
    return Subject.findAll(options);
  }
}
