import data from "../_Data/Data.js";

async function getAllUser(){
    return await data.dataFromApi()
}

async function getUserById(id) {
    const users = await data.dataFromApi()
    const userId =  users.filter(e => e.id === id)
    return userId
}

export default {getAllUser, getUserById}