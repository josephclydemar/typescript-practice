import express, { Request, Response, Express} from 'express';
import path from 'path';
import fs, { ReadStream } from 'fs';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';


type HTTPVideoHeaders = {
    'Content-Range': string;
    'Accept-Ranges': string;
    'Content-Length': string;
    'Content-Type': string;
}

const PORT: number = 9500;
const app: Express = express();


app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));


// app.all('/', (req: Request, res: Response): void => {
//     res.status(200).sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
// });


app.get('/api/video/:id', (req: Request, res: Response): void => {
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${uuid()}\t${req.protocol}  ${req.method} ${req.url}`);
    // Ensure there is a range given for the video
    const range = req.headers.range;
    if(!range) {
        res.status(400).send('Requires Range Header');
        return;
    }
    
    // get video stats (about 61MB)
    const videoPath: string = path.join(__dirname, 'videos', `${req.params.id}.mp4`);
    const videoSize: number = fs.statSync(videoPath).size;

    // Parse Range
    // Example: bytes=32324-
    const CHUNK_SIZE: number = 10 ** 6; // 1MB
    const rangeStart: number = Number(range.replace(/\D/g, ''));
    const rangeEnd: number = Math.min(rangeStart + CHUNK_SIZE, videoSize-1);

    // Create headers
    const contentLength: number = rangeEnd - rangeStart + 1;
    const headers: HTTPVideoHeaders = {
        'Content-Range': `bytes ${rangeStart}-${rangeEnd}/${videoSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': `${contentLength}`,
        'Content-Type': 'video/mp4'
    };

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream: ReadStream = fs.createReadStream(videoPath, { start: rangeStart, end: rangeEnd });
    
    // Stream the video chunk to the client
    videoStream.pipe(res);
});



app.all('*', (req: Request, res: Response): void => {
    res.status(404).send('404 Error!!!');
});

app.listen(PORT, function (): void {
    console.log(`${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}   ${uuid()}\tListening on port ${PORT}`);
});