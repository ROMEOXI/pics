import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID SRWhE4IbhUcABD76tG6cGOEqPXu_u3etDUEWqdINgX0'
        },
        params: {
            query: term,
        }
    });

    console.log(response);

    return response.data.results;
}

export default searchImages;