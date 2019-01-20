import { expect } from "chai";
import "mocha";
import { generate } from "randomstring";

import CONSTANTS from "../../app/constants";
import CONTAINER from "../../app/container";
import { sequelize } from "../../app/database/connection";
import User from "../../app/database/models/user";
import { IUserValidations } from "../../app/interfaces/IUserValidations";
import { IUser } from "../../app/interfaces/model.columns/IUser";

// tslint:disable:no-unused-expression

describe("UserValidations Service", function() {
  let S: IUserValidations;
  let userDetails: IUser = {
    username: "asdasdasd",
    password: "ASDasdasd"
  };

  before(function(done) {
    S = CONTAINER.get<IUserValidations>(CONSTANTS.services.UserValidation);
    sequelize.query("DELETE FROM users").then(() => User.create(userDetails).then(() => done()).catch(done));
  });

  it("should have a non-null value when service was retrieved at container", function() {
    expect(S).to.not.be.null;
  });

  it("should have a function named isUsernameUnique", function() {
    expect(typeof S.isUsernameUnique).to.be.equal("function");
  });

  describe("Normal Activity", function() {
    describe("isUsernameUnique Function", function() {
      it("should return true when given a unique username", function(done) {
        S.isUsernameUnique(generate({length: 10}))
        .then((value) => {
          expect(value).to.be.equal(true);
          done();
        })
        .catch(done);
      });
  
      it("should return false when given a username that is already taken", function(done) {
        S.isUsernameUnique(userDetails.username)
        .then((value) => {
          expect(value).to.be.equal(false);
          done();
        })
        .catch(done);
      });
      
      it("should return false when given null", function(done) {
        S.isUsernameUnique(null!)
        .then((value) => {
          expect(value).to.be.equal(false);
          done();
        })
        .catch(done);
      });
      
      it("should return false when given undefined", function(done) {
        S.isUsernameUnique(undefined!)
        .then((value) => {
          expect(value).to.be.equal(false);
          done();
        })
        .catch(done);
      });  
    });
  });
});
