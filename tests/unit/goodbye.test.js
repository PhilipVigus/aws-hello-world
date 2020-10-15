const app = require("../../goodbye-world/app.js");

describe("goodbye-world function", function () {
  it("verifies successful response", async () => {
    let event, context;
    const result = await app.lambdaHandler(event, context);
    const response = JSON.parse(result.body);

    expect(result.statusCode).toEqual(200);
    expect(response.message).toEqual("goodbye world");
  });
});
