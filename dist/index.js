"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const sharp_resize_1 = __importDefault(require("./utilities/sharp-resize"));
const utils_1 = require("./utilities/utils");
const app = (0, express_1.default)();
// GET /api/images endpoint
app.get("/api/images", (req, res) => {
    // Get the variables value from the query parameters.
    const filename = req.query.filename;
    const width = +req.query.width;
    const height = +req.query.height;
    // Validating query params existance
    if (!filename || !width || !height) {
        res.send("ERROR: [filename: string, width: positive number, height: positive number], Should be provided in a query string!");
        return;
    }
    // Validate filename
    if (!utils_1.imgFileNames.includes(filename)) {
        res.send("ERROR: File should be placed in /images folder!");
        return;
    }
    // Validate Dimensions
    if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        res.send("ERROR: Dimensions must be a positive number!");
        return;
    }
    // Check if there is a thumb folder, and create it — in case it does't exist
    const dir = './assets/thumb';
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir);
    }
    // Check the avaliability of the required image and send it.
    (0, utils_1.checkFileInFolderAsync)("./assets/thumb/", `${filename}_${width}_${height}`)
        .then((result) => {
        {
            // Check if the image is already processed
            if (result) {
                // Respond with the exist image without reprocessing
                const thumbFilePath = path_1.default.join(__dirname, "..", "/assets/thumb", `${filename}_${width}_${height}.jpg`);
                res.sendFile(thumbFilePath);
            }
            else {
                // Process and respond with the resized image
                (0, sharp_resize_1.default)(filename, width, height).then((thumbFilename) => {
                    const filePath = path_1.default.join(__dirname, "..", "/assets/thumb", thumbFilename);
                    res.sendFile(filePath);
                });
            }
        }
    })
        .catch((error) => {
        res.send(error);
    });
});
app.listen(8001, () => {
    console.log("Listening on port 8001 ...");
});
exports.default = app;
