import React from 'react';
import './marker.css';
import {InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
const Marker = ({Place}) => {
    let src=Place?.photo?Place.photo.images.thumbnail.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';
    return (
        <div className="marker">
      <img src={`${src}`}/>
      <div style={{fontFamily:'monospace'}}>{Place?.name}</div>
      <Rating name="read-only" size='small' value={Number(Place.rating)} readOnly />
     </div>
    );
  };

  export default Marker;