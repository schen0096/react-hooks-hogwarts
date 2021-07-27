import { useState } from 'react';
function Tile({medal, hog:{name, image, specialty, weight, greased }}){

    const [ isClicked, setClicked ] = useState(true)

    function setTileInfo(){
        return (
            <div className = 'pigTile'>
                <h3>{name}</h3>
                <p>{`Specialty:${specialty}`}</p>
                <p>{`Weight: ${weight}`}</p>
                <p>{`Highest Medal Achieved: ${medal}`}</p>
                <p>{`Greased?: ${greased}`}</p>
            </div>
        )
    }

    function DefaultTile(){
        return(
            <div className = 'minPigTile'>
                <img src = {image} alt = "hogName"></img>
            </div>
        )
    }

    return (
        <>
            <div onClick ={()=>setClicked(!isClicked)} className ='ui four wide column image'>
                {!isClicked ? DefaultTile() : setTileInfo() }
            </div>
        </>
    )
}

export default Tile