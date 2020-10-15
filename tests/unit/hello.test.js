const app = require("../../hello-world/app.js");

describe("hello-world function", function () {
  it("verifies successful response", async () => {
    let event, context;
    const result = await app.lambdaHandler(event, context);
    const response = JSON.parse(result.body);

    expect(result.statusCode).toEqual(200);
    expect(response.message).toEqual("hello world");
  });
});
