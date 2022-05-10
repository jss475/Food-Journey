import React, {useContext} from 'react'
import RestaurantTile from './RestaurantTile';


function Liked({allRestaurants}){

    //if statement based off of true/false on logged in or not

    const restuarantArray = allRestaurants.map(res => {
        return <RestaurantTile key={res.id} res={res} />
      })
    
      return (
          <>
            <h2>Liked Restaurants!</h2>
            {restuarantArray}
          </>
        );
}

export default Liked