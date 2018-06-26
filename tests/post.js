var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;

describe("test le endpoint", function() {
  describe("GET /post/", function() {
    it("besoin d'un type de contenu", function(done) {
      supertest(app)
        .get("/post/2")
        .set("User-Agent", "API testing")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200)
        .end(done);
    });
    it("il faut un bouton", function(done) {
      supertest(app)
        .get("/post/2")
        .set("User-Agent", "API testing")
        .expect(function(res) {
          console.log(res.text);
          assert(res.text.search("<button.*>.*</button>") != -1);
        })
        .expect(200)
        .end(done);
    });
  })
})
