import express from "express";
import path from "path";
import fs from "fs";

import resizeImg from "./utilities/sharp-resize";
import { exreq, exres } from "./utilities/type-aliases";
import { checkFileInFolderAsync, imgFileNames } from "./utilities/utils";


const app = express();

// GET /api/images endpoint
app.get("/api/images", (req: exreq, res: exres): void => {
    // Get the variables value from the query parameters.
    const filename = req.query.filename as string;
    const width = +(req.query.width as string);
    const height = +(req.query.height as string);

    // Validating query params existance
    if (!filename || !width || !height) {
        res.send("ERROR: [filename: string, width: positive number, height: positive number], Should be provided in a query string!");
        return;
    }

    // Validate filename
    if (!imgFileNames.includes(filename)) {
        res.send("ERROR: File should be placed in /images folder!");
        return;
    }

    // Validate Dimensions
    if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        res.send("ERROR: Dimensions must be a positive number!");
        return;
    }

    // Check if there is a thumb folder, and create it — in case it does't exist
    const dir: string = './assets/thumb';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    // Check the avaliability of the required image and send it.
    checkFileInFolderAsync("./assets/thumb/", `${filename}_${width}_${height}`)
        .then((result: boolean): void => {
            {
                // Check if the image is already processed
                if (result) {
                    // Respond with the exist image without reprocessing
                    const thumbFilePath = path.join(
                        __dirname,
                        "..",
                        "/assets/thumb",
                        `${filename}_${width}_${height}.jpg`
                    );
                    res.sendFile(thumbFilePath);
                } else {
                    // Process and respond with the resized image
                    resizeImg(filename, width, height).then((thumbFilename: string): void => {
                        const filePath = path.join(
                            __dirname,
                            "..",
                            "/assets/thumb",
                            thumbFilename
                        );
                        res.sendFile(filePath);
                    });
                }
            }
        })
        .catch((error): void => {
            res.send(error);
        });
});

app.listen(8001, (): void => {
    console.log("Listening on port 8001 ...");
});

export default app;
