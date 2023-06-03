    async function call(movie){

        const key = '';
        
    
        const inf = await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=${key}`)
        const data = await inf.json();
    
        console.log(data)
    
        return data.Search
    }


export default call