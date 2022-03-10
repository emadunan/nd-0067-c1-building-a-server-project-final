"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sharp_resize_1 = __importDefault(require("./utilities/sharp-resize"));
const utils_1 = require("./utilities/utils");
const app = (0, express_1.default)();
// GET /api/images endpoint
app.get("/api/images", (req, res) => {
    // Get the variables value from the query parameters.
    const filename = req.query.filename;
    const width = +req.query.width;
    const height = +req.query.height;
    // Validate filename
    if (!utils_1.imgFileNames.includes(filename)) {
        res.send("INFO: File should be placed in /images folder!");
        return;
    }
    // Validate Dimensions
    if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        res.send("INFO: Dimensions must be a positive number!");
        return;
    }
    // Respond with resized image
    (0, sharp_resize_1.default)(filename, width, height)
        .then((thumbFilename) => {
        const filePath = path_1.default.join(__dirname, "..", "/assets/thumb", thumbFilename);
        res.sendFile(filePath);
    })
        .catch((error) => {
        console.log(error);
    });
});
app.listen(3000, () => {
    console.log("Listening on port 3000 ...");
});
exports.default = app;