import Header from'./components/header/header'
import React from 'react';
import Map from './components/map/map';
import List from './components/list/list';
import { useState,useEffect } from 'react';
import getPlacesData from './api/api';
import './App.css';
const App=()=> {
  const [coords,setCoords]=useState({lat:0,lng:0});
  const [bounds,setBounds]=useState({ne:0,sw:0});
  const [Places,setPlaces]=useState([]);
  const [Rating,setRating]=useState(3);
  const [type,setType]=useState("hotels");
  const [autocomplete, setAutocomplete] = useState(null);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((data)=>{setCoords({lat:data.coords.latitude,lng:data.coords.longitude})});
  },[])
  useEffect(()=>{
    getPlacesData(bounds.sw,bounds.ne,type).then(data=>setPlaces(data));
  },[bounds,type])
  const changeRating=(e)=>{
  setRating(e.target.value);
  let places=Places.filter(place=>place.rating>=Rating);
  setPlaces(places);
  }
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };
 const changePlaces=(data)=>{
   setPlaces(data);
 }
  return (
    <div className='App'>
      <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged}/>
     <div className='container'>
     <div className="left" >
          <List places={Places} changeRating={changeRating} Rating={Rating} type={type} setType={setType} changePlaces={changePlaces}/>
        </div>
        <div className="right">
         <Map coords={coords} setBounds={setBounds} setCoords={setCoords} Places={Places?.length?Places:null}/>
        </div>
     </div>
    </div>
  );
}

export default App;
