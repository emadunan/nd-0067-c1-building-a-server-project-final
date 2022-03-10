"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
// Resizing the received image --https://www.npmjs.com/package/sharp
const resizeImg = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    let thumb_filename = "";
    try {
        const imgRelPath = "./assets/full/" + filename + ".jpg";
        console.log(imgRelPath);
        yield (0, sharp_1.default)(imgRelPath)
            .resize({
            width: width,
            height: height,
        })
            .toFile("./assets/thumb/" + filename + "_" + width + "_" + height + ".jpg")
            .then(() => {
            thumb_filename = filename + "_" + width + "_" + height + ".jpg";
        });
    }
    catch (error) {
        console.log(error);
    }
    return thumb_filename;
});
exports.default = resizeImg;
