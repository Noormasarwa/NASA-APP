import MediaCard from './MediaCard'

function Home() {
    
  return (
    <div id="Home">
        <h1>Use your imagenation</h1>
        <MediaCard img={{url:"https://static01.nyt.com/images/2020/05/26/science/20SCI-GALAXY1/20SCI-GALAXY1-videoSixteenByNineJumbo1600.jpg", title:"Galaxy", description:"A colorful collection of galaxy specimens from NASA Wide-field Infrared Survey Explorer mission showcases galaxies of several types, from elegant grand design spirals to more patchy flocculent spirals."}}/>
    </div>
  );
}

export default Home;