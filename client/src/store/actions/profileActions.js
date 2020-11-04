import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

export const getUserById = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
    const user = response.data;
    return user;
}

export const getUserLikesRatio = async (uid) => {
    const response = await axios.get(`http://localhost:8080/api/post/user/likes_ratio/${uid}`);
    const percentage = response.data;
    return percentage;
}

export const changeUsername = async (uid, newUsername) => {
    const data = {userId: uid, newUsername};
    const response = await axios.post('http://localhost:8080/api/user/change_username', JSON.stringify(data), config);
    const msg = response.data;
    return msg;
}

export const changePassword = async (uid, newPassword) => {
    const data = {userId: uid, newPassword};
    const response = await axios.post('http://localhost:8080/api/user/change_password', JSON.stringify(data), config);
    const isSuccessful = response.data;
    return isSuccessful;
}