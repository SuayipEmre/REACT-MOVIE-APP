import axios from "axios"




export const fetchIsLiked = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/likedMovies/${id}`)

    console.log(data);
    return data
}