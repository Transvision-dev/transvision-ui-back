import User from '../models/users.model';
import UserService from "../services/userService";
import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    try {
        const user = await UserService.getUserByName(req.body.name);
        console.log(user)
        if (!user) {
            throw new Error('User not found');
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({ id: user._id }, SECRET);
        res.status(200).json({ token });
        console.log("user logged in")
    } catch(error: any) {
        res.status(400).json({ error: error.message });
    }
 });

const UserController = router;

export default UserController;