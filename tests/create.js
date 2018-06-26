var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;

describe("test le endpoint", function() {
  describe("POST /post/create", function() {
    it("besoin d'un type de contenu", function(done) {
      supertest(app)
        .post("/post/create")
        .set("User-Agent", "API testing")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200)
        .end(done);
    });
    it("il faut un formulaire", function(done) {
      supertest(app)
        .post("/post/create")
        .set("User-Agent", "API testing")
        .expect(function(res) {
          assert(res.text.search("<form.*>.*</form>") != -1);
        })
        .expect(200)
        .end(done);
    });
    it("il faut un bouton", function(done) {
      supertest(app)
        .post("/post/create")
        .set("User-Agent", "API testing")
        .expect(function(res) {
          assert(res.text.search("<button.*>.*</button>") != -1);
        })
        .expect(200)
        .end(done);
    });
  })
})
