import {Router, Request, Response} from 'express';
import path from 'path';
import multer from 'multer';

const router = Router();


// upload a file

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
     cb(null, './uploads');
    },
    filename: function(req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now());
    }
   });
   
   const upload = multer({ storage: storage });

router.post("/upload", async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        res.status(201).json(req.body);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
})
