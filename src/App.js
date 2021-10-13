import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>

      {/* Nav */}


      {/* Banner */}
      <Banner/>


      {/* title this is prop */}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl = { requests.fetchNetflixOriginals } 
        isLargeRow = { true }
      /> 
      <Row title="Trending Now" fetchUrl = { requests.fetchTrending } />
      <Row title="Top Rated" fetchUrl = { requests.fetchTopRated } />
      <Row title="Action Movives" fetchUrl = { requests.fetchActionMoives } />
      <Row title="Comedy Movives" fetchUrl = { requests.fetchComedyMoives } />
      <Row title="Romance Movives" fetchUrl = { requests.fetchRomanceMoives } />
      <Row title="Documentaries" fetchUrl = { requests.fetchDocumentaries } />

    </div>
  );
}

export default App;
