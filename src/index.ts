import express from "express";
import path from "path";

import resizeImg from "./utilities/sharp-resize";
import { checkFileInFolderAsync, imgFileNames } from "./utilities/utils";

const app = express();

// GET /api/images endpoint
app.get("/api/images", (req: express.Request, res: express.Response) => {
    
    // Get the variables value from the query parameters.
    const filename = req.query.filename as string;
    const width = +(req.query.width as string);
    const height = +(req.query.height as string);

    // Validate filename
    if (!imgFileNames.includes(filename)) {
        res.send("INFO: File should be placed in /images folder!");
        return;
    }

    // Validate Dimensions
    if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        res.send("INFO: Dimensions must be a positive number!");
        return;
    }

    // Check the avaliability of the required image and send it.
    checkFileInFolderAsync('./assets/thumb/', `${filename}_${width}_${height}`)
        .then((result) => {
            {
                // Check if the image is already processed
                if (result) {
                    // Respond with the exist image without reprocessing
                    const thumbFilePath = path.join(__dirname, "..", "/assets/thumb", `${filename}_${width}_${height}.jpg`);
                    res.sendFile(thumbFilePath);
                } else {
                    // Process and respond with the resized image
                    resizeImg(filename, width, height)
                        .then((thumbFilename) => {
                            const filePath = path.join(__dirname, "..", "/assets/thumb", thumbFilename);
                            res.sendFile(filePath);
                        })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
});

app.listen(3000, () => {
    console.log("Listening on port 3000 ...");
});

export default app;
