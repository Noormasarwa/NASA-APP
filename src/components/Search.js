import {useState } from 'react';
import MediaCard from './MediaCard'
const axios = require('axios')


function Search() {
    const [images, setImages] = useState([])

    const searchForImages = async (e) => {
        if (e.key !== 'Enter') {
            return
        }
        let results = await axios.get(`https://images-api.nasa.gov/search?q=${e.target.value}&media_type=image`)
        results = results.data.collection.items.map(v => { return {id : v.data[0].nasa_id,img:{ title: v.data[0].title || '', description: v.data[0].description || '', url: v.links[0].href || ''}} })
        setImages(results)
    }

    const saveImage = async (image) => {
        const result = await axios.post('http://localhost:8080/image', image)
        if(result.err){
            console.log(result.err)
           alert("faild to save it ")
        }else{
            alert("saved")
        }
    }

    return (
        <div id="search">
            <div id="searchContainer">
                <div className="group" >
                    <input type="text" required onKeyDown={searchForImages} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <div id="searchResults">
                {images.map(v => <MediaCard img={v.img} key = {v.id} saveImage={saveImage}/>)}
            </div>
        </div>

    );
}

export default Search;