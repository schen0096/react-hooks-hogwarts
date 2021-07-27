import Tile from './Tile'

function HogTile({ hogs }){

    return (
        <div className = 'ui grid container'>
            {
                hogs.map( hog => 
                    (<div>
                            <Tile 
                                key={hog.name}
                                medal={hog["highest medal achieved"]}
                                hog={hog}
                            />
                    </div>
                ))
            }
        </div>
    )
}

export default HogTile;