var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;

describe("test du endpoint", function() {
  it("besoin d'un type de contenu", function(done) {
    supertest(app)
      .get("/")
      .set("User-Agent", "API testing")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200)
      .end(done);
  });
  it("besoin du titre \"Blog\"", function(done) {
      supertest(app)
      .get("/")
      .set("User-Agent", "API testing")
      .expect(function(res) {
        assert(res.text.includes("<title>Blog</title>"));
      })
      .expect(200)
      .end(done);
});
})
