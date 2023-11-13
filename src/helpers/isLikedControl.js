import axios from "axios"



  
export const fetchIsLiked = async(id) => {
    const {data} = await axios.get(`http://localhost:3000/likedMovies/${id}`)
    return  data
}