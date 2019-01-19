import { expect, use } from "chai";
import "mocha";
import sinonChai from "sinon-chai";

import { CONSTANTS } from "../../app/constants";
import { CONTAINER } from "../../app/container";
import { ISessionManager } from "../../app/interfaces/ISessionManager";

// tslint:disable:no-unused-expression

use(sinonChai);

describe("ArraySessionManager Service", function() {
  let S: ISessionManager;

  before(function() {
    S = CONTAINER.get<ISessionManager>(CONSTANTS.services.SessionManager);
  });

  it("should return an object when Container.get was called with the key", function() {
    expect(S).to.not.be.null;
  });

  it("should have a function named createToken", function() {
    expect(typeof S.createToken).to.be.equal("function");
  });

  it("should have a function named destroyToken", function() {
    expect(typeof S.destroyToken).to.be.equal("function");
  });
  
  it("should have a function named verifyToken", function() {
    expect(typeof S.verifyToken).to.be.equal("function");
  });

  describe("Normal Activity", function() {
    describe("ArraySessionManager.createToken Function", function() {
      it("should return a string when given a User", function(done) {
        S.createToken({username: "asd", password: "asd"})
        .then((token) => {
          expect(token).to.be.string("string");
          done();
        })
        .catch(done);
      });

      it("should return null when given null", function(done) {
        S.createToken(null!)
        .then((token) => {
          expect(token).to.be.null("null");
          done();
        })
        .catch(done);
      });
      
      it("should return null when given undefined", function(done) {
        S.createToken(undefined!)
        .then((token) => {
          expect(token).to.be.null("null");
          done();
        })
        .catch(done);
      });
    });

    //#region Unused
    /**********************************************************
    describe("ArraySessionManager.destroyToken", function() {
      let token: string;

      beforeEach(function(done) {
        S.createToken({username: "asd", password: "asd", id: "asd"})
        .then((_token) => {
          token = _token;
          done();
        })
        .catch(done);
      });

      it("should do nothing when given a valid token", function(done) {
        
      });
      
      it("should do nothing when given an invalid token");
      
      it("should do nothing when given null");
      
      it("should do nothing when given undefined");
    });
    ************************************************************/
    //#endregion

    describe("ArraySessionManager.verifyToken", function() {
      let token: string;

      before(function(done) {
        S.createToken({username: "asd", password: "asd"})
        .then((_token) => {
          token = _token;
          done();
        })
        .catch(done);
      });
      
      it("should return true when given a valid token", function(done) {
        S.verifyToken(token)
        .then((value) => {
          expect(value).to.be.equal(true);
          done();
        })
        .catch(done);
      });
      
      it("should return false when given an invalid token", function(done) {
        S.verifyToken("asd")
        .then((value) => {
          expect(value).to.be.equal(false);
          done();
        })
        .catch(done);
      });
      
      it("should return false when given null", function(done) {
        S.verifyToken(null!)
        .then((value) => {
          expect(value).to.be.equal(false);
          done();
        })
        .catch(done);
      });
      
      it("should return false when given undefined", function(done) {
        S.verifyToken(undefined!)
        .then((value) => {
          expect(value).to.be.equal(false);
          done();
        })
        .catch(done);
      });
    });
  });
});
