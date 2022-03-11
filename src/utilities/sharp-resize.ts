import sharp from "sharp";

// Resizing the received image --https://www.npmjs.com/package/sharp
const resizeImg = async (
    filename: string,
    width: number,
    height: number
): Promise<string> => {
    let thumb_filename: string = "";

    try {
        const imgRelPath: string = "./assets/full/" + filename + ".jpg";
        await sharp(imgRelPath)
            .resize({
                width: width,
                height: height,
            })
            .toFile(
                "./assets/thumb/" +
                    filename +
                    "_" +
                    width +
                    "_" +
                    height +
                    ".jpg"
            )
            .then((): void => {
                thumb_filename = filename + "_" + width + "_" + height + ".jpg";
            });
    } catch (error) {
        throw new Error("ERROR: Image hasn't been resized!");
    }

    return thumb_filename;
};

export default resizeImg;
