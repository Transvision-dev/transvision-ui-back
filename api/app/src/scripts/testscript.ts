import axios from "axios";
import IUser from "../models/users.model";
const sign = "http://localhost:3001/api/users/signup";

const testUser = {
    name: "test",
    email: "a.morellon@outlook.com",
    password: "password123"
}
axios
    .post(sign, testUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))