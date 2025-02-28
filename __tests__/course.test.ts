import { expect, describe, test } from '@jest/globals'; // Add this line

describe("Course Tests", () => {
    test("Sample test", () => {
        expect(true).toBe(true);
    });
});

describe("Course tests", () => {
    test("should pass a basic test", () => {
        expect(true).toBe(true);
    });
});

// describe("course", () => {
//     describe("get course", () => {
//         describe("", () => {
//             describe("given the course does not exist", () => {
//                 it("should return a 404", async () => {
//                     const id = "123"
//                     await supertest(app).get(`/api/getcoursebtid/${id}`).expect(404);
//                 });
//             });
//         });
//     });
// });