import User from '../models/users.model';
import { IUser } from '../models/users.model';
import bcrypt from 'bcrypt';

const getAllUsers = async () => {
    return await User.find({});
};

const getUserById = async (id: string) => {
    return await User.findById(id);
}

const getUserByName = async (name: string) => {
    return  await User.findOne({ name });
}


/**
 * Creates a new user in the database.
 * @param user - The user object containing the user details.
 * @returns A promise that resolves to the newly created user.
 * @throws Error if the user already exists or if SALT_WORK_FACTOR is not defined.
 */

const createUser = async (user: IUser) => {
    try {
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
            throw new Error('User already exists');
        }
        
        // Check if SALT_WORK_FACTOR is defined in the .env file
        
        if (!process.env.SALT_WORK_FACTOR) {
            throw new Error('SALT_WORK_FACTOR not defined');
        }
        const SALT_WORK_FACTOR: number = parseInt(process.env.SALT_WORK_FACTOR) || 10; // Define the value of SALT_WORK_FACTOR
        
        
        // Hash the password before saving the user to the database with our new salt
        const hashedPassword = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
        const newUser = new User({
            ...user,
            password: hashedPassword
        
        });
        return await newUser.save();
    } catch (error) {
        console.error('Error in UserService.ts',  error);   
        throw error;
    }
}


const UserService = {
    getAllUsers,
    getUserById,
    getUserByName,
    createUser
}

export default UserService;