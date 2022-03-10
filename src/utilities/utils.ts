import fs, { promises as fsPromises } from "fs";

// Get available images filename
const imagesFolder = "./assets/full/";
const imgFilesArray: string[] = [];

fs.readdir(imagesFolder, (err, files) => {
    files.forEach((file) => {
        const filename = file.split(".")[0];
        imgFilesArray.push(filename);
    });
});

// Export array of the assets/full/ folder filenames
export const imgFileNames = imgFilesArray;

// Check file existance in a specific path
export const checkFileInFolderAsync = (folderPath: string, filename: string): Promise<boolean> => {
    const imgFiles: string[] = [];

    return fsPromises.readdir(folderPath)
        .then(files => {
            files.forEach((file) => {
                const filename = file.split(".")[0];
                imgFiles.push(filename);
            });
        })
        .then(() => {
            return imgFiles.includes(filename);
        })
}

