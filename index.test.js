const request = require("supertest");
const app = require("./index");
const user = require("./user.json");
const career = require("./career.json");
const documents = require("./documents.json");

describe("GET", () => {
    it("responds 200", (done) => {
        request(app)
            .get("/user")
            .expect(200)
            .send(user)
            .end((err, res) => {
                if (err) done(err);
                return done();
            });
    });

    it("responds 200", (done) => {
        request(app)
            .get("/documents")
            .expect(200)
            .send(documents)
            .end((err, res) => {
                if (err) done(err);
                return done();
            });
    });

    it("responds 200", (done) => {
        request(app)
            .get("/career")
            .expect(200)
            .send(career)
            .end((err, res) => {
                if (err) done(err);
                return done();
            });
    });
});
