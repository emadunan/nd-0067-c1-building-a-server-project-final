"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgFileNames = void 0;
const fs_1 = __importDefault(require("fs"));
// Get available images filename
const imagesFolder = "./assets/full/";
const imgFiles = [];
fs_1.default.readdir(imagesFolder, (err, files) => {
    files.forEach((file) => {
        const filename = file.split(".")[0];
        imgFiles.push(filename);
    });
});
exports.imgFileNames = imgFiles;
