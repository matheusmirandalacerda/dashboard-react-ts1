import api from"./api";

export interface User {
    email: string;
    password: string;
}

export const login = async (User: User): Promise<User> => {
    const response = await api.post<User>("api/auth/login", User);
    return response.data;
    };

// import { User , getUserByEmail } from "./userService";

// export async function login(email: string, password: string): Promise<User> {
//     const user = await getUserByEmail(email);
    
//     if (user && user.password === password) {
//         return user;
//     } else {    
//         throw new Error("Email e/ou password inválido");
//     } 
// };