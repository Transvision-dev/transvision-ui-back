import { Router, Request, Response } from 'express';
import path from 'path';
import multer from 'multer';

const router = Router();


// upload a file

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const fileStorage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        // ...Do your stuff here.
    },

    filename: (
        req: Request,
        file: Express.Multer.File,
        callback: FileNameCallback
    ): void => {
        // ...Do your stuff here.
    }
})

/* export const fileFilter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        callback(null, true)
    } else {
        callback(null, false)
    }
} */




const Multer = multer({ storage: fileStorage });
const upload = Multer.single('video');

router.post("/upload", async (req: Request, res: Response) => {
    upload(req, res, (err: any) => {
        if (err) {
            return res.status(400).json({
                message: err.message,
            });
        }
        return res.status(200).json({
            message: "File uploded successfully",
        });
    });
})

export default router;
