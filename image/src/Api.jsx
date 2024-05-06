import axios from 'axios';


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers : {
        Authorization : 'Client-ID YSHBVLpWry_IQ98tlGvu2r4KJjoR2as8l5uEvFikblk',
      },
      params : {
        query : term,
      },
     });
    
     return response.data.results ; 
    };  
  
    export default searchImages;