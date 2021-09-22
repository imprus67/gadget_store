import { axiosCustom } from '.';

export const registration = async (email, password) => {
    const response = await axiosCustom.post('/api/user/signup', {email, password});
    return response;
}

export const login = async (email, password) => {
    const response = await axiosCustom.post('/api/user/login', {email, password});
    return response;
}

export const check = async () => {
    const response = await axiosCustom.post('/api/user/auth');
    return response;
}