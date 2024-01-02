import axios from "axios";
const sign = "http://localhost:3001/api/users/signup";
const login = "http://localhost:3001/api/users/login";  
const testUser = {
    name: "test",
    email: "a.morellon@outlook.com",
    password: "password123"
}
/* 
    axios
        .post(sign, testUser)
        .then(response => console.log(response))
        .catch(error => console.error(error))

 */
axios
    .post(login, { name: testUser.name, password: testUser.password })
    .then(response => console.log(response))
    .catch(error => console.error(error))