import User from '../models/users.model';
import UserService from "../services/userService";
import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';

const router = Router();

const  { SECRET = 'secret' } = process.env;

// Sign up a new user
router.post("/signup", async (req: Request, res: Response) => {
    console.log(req.body)
   try {
       const user = await UserService.createUser(req.body);
       res.status(201).json(user);
   }  catch (error: any) {
         res.status(400).json({ error: error.message } );
    }
})

router.post("/login", async (req: Request, res: Response) => {
    console.log(req.body.name , "user attempting to login")
 });

const UserController = router;

export default UserController;