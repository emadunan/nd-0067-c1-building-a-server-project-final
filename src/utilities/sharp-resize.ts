import sharp from "sharp";

// Resizing the received image --https://www.npmjs.com/package/sharp
const resizeImg = async (
    filename: string,
    width: number,
    height: number
): Promise<string> => {
    let thumb_filename = "";

    try {
        const imgRelPath = "./assets/full/" + filename + ".jpg";
        console.log(imgRelPath);
        await sharp(imgRelPath)
            .resize({
                width: width,
                height: height,
            })
            .toFile("./assets/thumb/" + filename + "_" + width + "_" + height + ".jpg")
            .then(() => {
                thumb_filename = filename + "_" + width + "_" + height + ".jpg";
            });
    } catch (error) {
        console.log(error);
    }

    return thumb_filename;
};

export default resizeImg;
