import GoogleMapReact from 'google-map-react';
import useStyles from './styles';
import { Paper, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import mapStyles from './../../mapStyles';
import Marker from '../marker/marker';
const Map=({coords,setCoords,setBounds,Places})=>{
    let classes=useStyles();
    console.log(Places);
    return(
          <div style={{height:'100%'}}>
           <GoogleMapReact
           bootstrapURLKeys={{ key:'AIzaSyBi6hydFJP1S93uME7QAgzKQ0NBwo1pPJo'}}
           defaultCenter={coords}
           center={coords}
           defaultZoom={14}
           margin={[50, 50, 50, 50]}
           onChange={(e)=>{
               setCoords({lat:e.center.lat,lng:e.center.lng});
               setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
           }}
           options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
           onChildClick={''}
           >
               {
                   Places?Places.map((place)=><Marker lat={place.latitude} lng={place.longitude} Place={place}/>):null
               }
             
           </GoogleMapReact>
           </div>
    );
}
export default Map;