import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;
