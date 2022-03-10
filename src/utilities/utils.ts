import fs from "fs";

// Get available images filename
const imagesFolder = "./assets/full/";
const imgFiles: string[] = [];

fs.readdir(imagesFolder, (err, files) => {
    files.forEach((file) => {
        const filename = file.split(".")[0];
        imgFiles.push(filename);
    });
});

export const imgFileNames = imgFiles;
