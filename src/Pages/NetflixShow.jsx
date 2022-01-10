import Row from "../Componunts/Row/Row";
import Api from "../Componunts/api/Api";
import Bannar from "../Componunts/Bannar/Bannar";
import Nav from "../Componunts/Nav/Nav";

const NetflixShow = () => {
    return (
        <div>
            <Nav></Nav>
            <Bannar></Bannar>
        
            <Row  isLargeRow title="NETFLIX ORIGINALS" fetchUrl={Api.fetchNetFlixOriginals}/> 
            <Row title="Trending Now" fetchUrl={Api.fetchTrendign}/> 
            <Row title="Top Rated" fetchUrl={Api.fetchTopRated}/> 
            <Row title="Comedy Movies " fetchUrl={Api.fetchRomanceMovies}/> 
            <Row title="Comedy Movies " fetchUrl={Api.fetchRomanceMovies}/> 
            <Row title="Comedy Movies " fetchUrl={Api.fetchRomanceMovies}/> 
            <Row title="Comedy Movies " fetchUrl={Api.fetchRomanceMovies}/> 
            <Row title="Comedy Movies " fetchUrl={Api.fetchRomanceMovies}/> 
            <Row title="Comedy Movies " fetchUrl={Api.fetchRomanceMovies}/> 
            <Row title="Comedy Movies " fetchUrl={Api.fetchRomanceMovies}/> 

            

        

        </div>
    )
}

export default NetflixShow;
