import axios from "axios";
const url = "/api/post";

export default class API{
    //get all posts
    static async getAllPost(){
        const res = await axios.get(url); //returns a promise
        return res.data; //returns an array of posts
    }

    //get a post by id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`); 
        return res.data;
    }   

    // to create a new post
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }

    // to update a post
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }

    //delete a post
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
} 