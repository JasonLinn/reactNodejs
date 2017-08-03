//write a function to retrieve a blob of json
// make an ajax requst! use the 'fetch' function
//http://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums(){
    
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res=>res.json())
        .then(json=>console.log(json));
}

// const fetchAlbums = async () =>{

// }
async function fetchAlbums(){ //conten async code
    
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    
    console.log(json);
}

fetchAlbums();