import express, { Request, Response, Express} from 'express';
import path from 'path';
import fs  from 'fs';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
// import * as io from 'socket.io-client';
// import { Socket } from 'socket.io-client';

type HTTPVideoHeaders = {
    'Content-Range': string;
    'Accept-Ranges': string;
    'Content-Length': string;
    'Content-Type': string;
}




const PORT: number = 9500;
const app: Express = express();


app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));

const videoPath = path.join('videos', '1714142493759.avi');

app.get('/api/video/:id', (req: Request, res: Response): void => {
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${uuid()}\t${req.protocol}  ${req.method} ${req.url}`);

    // Ensure there is a range given for the video
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Request Range header missing");
        return;
    }

    // Check if the video file exists
    if (!fs.existsSync(videoPath)) {
        res.status(404).send("Video file not found");
        return;
    }

    // Obtain video file stats
    const videoSize = fs.statSync(videoPath).size;

    // Parse range headers
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const START: number = Number(range.replace(/\D/g, ""));
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
    const videoStream = fs.createReadStream(videoPath, { start: START, end });
    videoStream.pipe(res);
});


app.all('*', (req: Request, res: Response): void => {
    res.status(404).send('404 Error!!!');
});

app.listen(PORT, function (): void {
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${uuid()}\tListening on port ${PORT}`);
});



























