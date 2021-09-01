import {InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import './list.css';
import Card from '../card/card';
const List=({places,changeRating,Rating,type,setType,changePlaces})=>{
    return(
        <div className='list'>
          <h1 className='header'>All Places To Visit</h1>
            <div className="selectors">
            <FormControl className='formcontrol'>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={`${type}`} onChange={(e)=>setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='formcontrol'>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={Rating} onChange={(e)=>changeRating(e)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
            </div>
            <div className="places">
                {places?.map(place=><Card place={place} changePlaces={changePlaces}/>)}
            </div>
        </div>
    );
}
export default List;