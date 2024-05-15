import { ADMIN_INSTANCE } from "./urlInitial";

export async function addUser(data) {
    try {
        const response = await ADMIN_INSTANCE.post(``, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export async function adminLogin(data) {
    try {
        console.log('sda');
        const response = await ADMIN_INSTANCE.post(`/login`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getUsers() {
    try {
        const response = await ADMIN_INSTANCE.get(``);
        return response.data;
    } catch (error) {
        throw error;
    }
}