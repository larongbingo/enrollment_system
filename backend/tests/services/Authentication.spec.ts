import { expect, use } from "chai";
import "mocha";
import { fake } from "sinon";
import sinonChai from "sinon-chai";

import CONSTANTS from "../../app/constants";
import CONTAINER from "../../app/container";
import { sequelize } from "../../app/database/connection";
import Token from "../../app/database/models/token";
import User from "../../app/database/models/user";
import { IAuth } from "../../app/interfaces/IAuth";
import Authentication from "../../app/services/Authentication";

// tslint:disable:no-unused-expression

use(sinonChai);

describe("Authentication Service", function() {
  let S: IAuth;

  const USER = {username: "admin", password: "password"};

  before(function(done) {
    this.timeout(10000);
    S = CONTAINER.get<IAuth>(CONSTANTS.services.Authentication);
    sequelize.query(`DELETE FROM ${Token.getTableName()};`)
    .then(() => User.create({...USER}).then(() => done()));
  });

  it("should return an object when Container.get was called with the key", function() {
    expect(S).to.not.be.null;
  });

  it("should get an Authentication.logIn function", function() {
    expect(typeof S.logIn).to.be.equal("function");
  });

  it("should get an Authentication.logOut function", function() {
    expect(typeof S.logOut).to.be.equal("function");
  });

  describe("Normal Activity", function() {
    describe("Authentication.logIn Function", function() {
      it("should get a string when given a valid username and password", function(done) {
        S.logIn(USER.username, USER.password)
        .then((token) => {
          expect(token).to.not.be.null;
          done();
        })
        .catch(done);
      });

      it("should get null when given invalid username and password", function(done) {
        S.logIn("ASD", "ASD")
        .then((token) => {
          expect(token).to.be.null;
          done();
        })
        .catch(done);
      });

      it("should get null when given null on both parameters", function(done) {
        S.logIn(null!, null!)
        .then((token) => {
          expect(token).to.be.null;
          done();
        })
        .catch(done);
      });

      it("should get null when given undefined on parameters", function(done) {
        S.logIn(undefined!, undefined!)
        .then((token) => {
          expect(token).to.be.null;
          done();
        })
        .catch(done);
      });
    });

    describe("Authentication.logOut Function", function() {
      let token: string;

      before(function(done) {
        sequelize.query(`DELETE FROM ${Token.getTableName()};`)
        .then(() => done())
        .catch(done);
      });

      beforeEach(function(done) {
        S.logIn(USER.username, USER.password).then((_token) => {
          token = _token!;
          done();
        })
        .catch(done);
      });
    
      it("should do nothing when given null", function(done) {
        S.logOut(null!).then(() => done()).catch(done);
      });
      
      it("should do nothing when given undefined", function(done) {
        S.logOut(undefined!).then(() => done()).catch(done);
      });
    });
  });

  describe("Behavior Tests", function() {
    let checkPassword: () => boolean;
    let stubbedUserDataAccess: any;
    let stubbedSessionManager: any;
    let stubbedS: Authentication;

    beforeEach(function() {
      checkPassword = fake.returns(true);

      stubbedUserDataAccess = {
        create: fake(),
        findAll: fake(),
        findOne: fake.returns({checkPassword}),
      };
  
      stubbedSessionManager = {
        create: fake.returns(""),
        destroy: fake(),
        verify: fake(),
      };

      stubbedS = new Authentication(
        stubbedUserDataAccess,
        stubbedSessionManager,
      );
    });

    describe("Authentication.logIn Behavior", function() {
      it("should call StubbedSessionManager.create when following the valid credentials scene", function(done) {
        stubbedS.logIn(USER.username, USER.password)
        .then(() => {
          expect(stubbedSessionManager.create).to.be.calledOnce;
          done();
        })
        .catch(done);
      });

      it("should call StubbedUserModel.checkPassword when checking credential validity", function(done) {
        stubbedS.logIn(USER.username, USER.password)
        .then(() => {
          expect(checkPassword).to.be.calledOnce;
          done();
        })
        .catch(done);
      });
      
      it("should call StubbedUserModel.findOne when checking credential validity", function(done) {
        stubbedS.logIn(USER.username, USER.password)
        .then(() => {
          expect(stubbedUserDataAccess.findOne).to.be.calledOnce;
          done();
        })
        .catch(done);
      });
    });

    describe("Authentication.logOut Behavior", function() {
      it("should call StubbedSessionManager.destroy", function(done) {
        stubbedS.logOut("")
        .then(() => {
          expect(stubbedSessionManager.destroy).to.have.been.calledOnce;
          done();
        })
        .catch(done);
      });
    });
  });
});
