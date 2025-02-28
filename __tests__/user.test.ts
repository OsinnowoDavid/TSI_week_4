import supertest from "supertest";
import app from "../index";
import { describe, test, expect } from '@jest/globals';

describe("POST /api/register", () => {
    describe("given a username and password", () => {
        test("should respond with a 200 status code", async () => {
            const response = await supertest(app).post("/register").send({
                name: "username",
                email: "mail",
                password: "password",
                role: "role"
            });
            expect(response.statusCode).toBe(200);
        });

        test("should save to the database", async () => {
            const response = await supertest(app).post("/register").send({
                name: "username",
                email: "mail",
                password: "password",
                role: "role"
            });
            // Add your database assertion here
            // e.g., expect(database.findUserById(response.body.id)).toBeTruthy();
        });

        test("should respond with a json object containing the user id", async () => {
            const response = await supertest(app).post("/register").send({
                name: "username",
                email: "mail",
                password: "password",
                role: "role"
            });
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
            expect(response.body.id).toBeDefined();
        });

        test("should specify json in the content type header", async () => {
            const response = await supertest(app).post("/register").send({
                name: "username",
                email: "mail",
                password: "password",
                role: "role"
            });
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        });
    });

    describe("when the username and password is missing", () => {
        test("should respond with a status code 400", async () => {
            const response = await supertest(app).post("/register").send({});
            expect(response.statusCode).toBe(400);
        });
    });
});