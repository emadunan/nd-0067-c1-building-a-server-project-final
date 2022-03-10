import supertest from "supertest";
import app from "../index";
import resizeImg from "../utilities/sharp-resize";

const request = supertest(app);

describe("API Endpoints tests:", () => {
    describe("Test endpoint response", () => {
        it("gets /api/images endpoint", async () => {
            const response = await request.get("/api/images");
            expect(response.status).toBe(200);
        });
    });

    describe("Utility tests:", () => {
        it("Expect not to throw an error", async () => {
            const result = await resizeImg("santamonica", 300, 300);
            expect(() => result).not.toThrowError();
        });

        it("Expect to return santamonica_300_300.jpg", async () => {
            const result = await resizeImg("santamonica", 300, 300);
            expect(result).toEqual("santamonica_300_300.jpg");
        });

        it("Expect to return santamonica_200_250.jpg", async () => {
            const result = await resizeImg("santamonica", 200, 250);
            expect(result).toEqual("santamonica_200_250.jpg");
        });

        it("Expect to return santamonica_400_300.jpg", async () => {
            const result = await resizeImg("santamonica", 400, 300);
            expect(result).toEqual("santamonica_400_300.jpg");
        });
    });
});
