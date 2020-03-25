import { expect } from "chai";
import "dotenv/config";
import { createToken, verifyToken } from "../../../utils/auth";

describe("auth util", () => {
  let token;
  it("should create a token", () => {
    const dummy = {
      id: 987654,
      email: "seven@deadly.com",
      username: "seven"
    };
    token = createToken(dummy);

    expect(token).to.have.property("token");
    expect(token).to.have.property("iat");
    expect(token).to.have.property("exp");
  });

  it("should validate a valid token", () => {
    const verify = verifyToken(token.token);

    expect(verify).to.not.be.null;
  });

  it("should validate an invalid token", () => {
    const verify = verifyToken("12134567uythgfdde32423trhgfbdw3243t5ytrhgbfgdewq454yhgfdse45yhgfew45ytr");

    expect(verify).to.be.null;
  });
});
