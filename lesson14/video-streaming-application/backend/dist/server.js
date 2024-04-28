"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const date_fns_1 = require("date-fns");
const uuid_1 = require("uuid");
const PORT = 9500;
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', 'frontend', 'dist')));
const videoPath = path_1.default.join('videos', '1714142493759.avi');
app.get('/api/video/:id', (req, res) => {
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t${req.protocol}  ${req.method} ${req.url}`);
    // Ensure there is a range given for the video
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Request Range header missing");
        return;
    }
    // Check if the video file exists
    if (!fs_1.default.existsSync(videoPath)) {
        res.status(404).send("Video file not found");
        return;
    }
    // Obtain video file stats
    const videoSize = fs_1.default.statSync(videoPath).size;
    // Parse range headers
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const START = Number(range.replace(/\D/g, ""));
    const end = Math.min(START + CHUNK_SIZE, videoSize - 1);
    // Calculate content length and set response headers
    const contentLength = end - START + 1;
    const headers = {
        "Content-Range": `bytes ${START}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/avi",
    };
    // Send partial content response (206 Partial Content)
    res.writeHead(206, headers);
    // Create read stream for video file and pipe it to response
    const videoStream = fs_1.default.createReadStream(videoPath, { start: START, end });
    videoStream.pipe(res);
});
app.all('*', (req, res) => {
    res.status(404).send('404 Error!!!');
});
app.listen(PORT, function () {
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\tListening on port ${PORT}`);
});
