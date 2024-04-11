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
// app.all('/', (req: Request, res: Response): void => {
//     res.status(200).sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
// });
app.get('/api/video/:id', (req, res) => {
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\t${req.protocol}  ${req.method} ${req.url}`);
    // Ensure there is a range given for the video
    const range = req.headers.range;
    if (!range) {
        res.status(400).send('Requires Range Header');
        return;
    }
    // get video stats (about 61MB)
    const videoPath = path_1.default.join(__dirname, 'videos', `${req.params.id}.mp4`);
    const videoSize = fs_1.default.statSync(videoPath).size;
    // Parse Range
    // Example: bytes=32324-
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const rangeStart = Number(range.replace(/\D/g, ''));
    const rangeEnd = Math.min(rangeStart + CHUNK_SIZE, videoSize - 1);
    // Create headers
    const contentLength = rangeEnd - rangeStart + 1;
    const headers = {
        'Content-Range': `bytes ${rangeStart}-${rangeEnd}/${videoSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': `${contentLength}`,
        'Content-Type': 'video/mp4'
    };
    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);
    // create video read stream for this particular chunk
    const videoStream = fs_1.default.createReadStream(videoPath, { start: rangeStart, end: rangeEnd });
    // Stream the video chunk to the client
    videoStream.pipe(res);
});
app.all('*', (req, res) => {
    res.status(404).send('404 Error!!!');
});
app.listen(PORT, function () {
    console.log(`${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${(0, uuid_1.v4)()}\tListening on port ${PORT}`);
});
