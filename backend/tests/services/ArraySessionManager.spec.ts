import { expect, use } from "chai";
import "mocha";
import { fake } from "sinon";
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
    expect(typeof S.createToken).to.be.equal("Function");
  });

  it("should have a function named destroyToken", function() {
    expect(typeof S.destroyToken).to.be.equal("Function");
  });
  
  it("should have a function named verifyToken", function() {
    expect(typeof S.verifyToken).to.be.equal("Function");
  });
});
