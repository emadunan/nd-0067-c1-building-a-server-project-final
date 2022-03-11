import fs, { promises as fsPromises } from "fs";

// Get available images filename
const imagesFolder: string = "./assets/full/";
const imgFilesArray: string[] = [];

fs.readdir(imagesFolder, (_err: NodeJS.ErrnoException|null, files: string[]): void => {
    files.forEach((file: string): void => {
        const filename: string = file.split(".")[0];
        imgFilesArray.push(filename);
    });
});

// Export array of the assets/full/ folder filenames
export const imgFileNames: string[] = imgFilesArray;

// Check file existance in a specific path
export const checkFileInFolderAsync = (
    folderPath: string,
    filename: string
): Promise<boolean> => {
    const imgFiles: string[] = [];

    return fsPromises
        .readdir(folderPath)
        .then((files: string[]): void => {
            files.forEach((file: string): void => {
                const filename: string = file.split(".")[0];
                imgFiles.push(filename);
            });
        })
        .then((): boolean => {
            return imgFiles.includes(filename);
        });
};
