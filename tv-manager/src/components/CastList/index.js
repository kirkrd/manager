import React from 'react';
import './index.css'; 
const CastListItem = ({ cast }) => (
    <div>
        
        <ul className="cast-list">
            <li>
                <b>
                    <em>
                    {cast.character.name}
                    </em>
                </b>
            </li>
            <li>
                <p>
                    {cast.person.name}
                </p>

            </li>
            <li>
                <img src= {cast.person.image.medium} alt="person image"/>
                    
            </li>
        </ul>
    </div>

)

const CastList = (props) => {
    
    return (
        <div>
        <a href = {`/series/${props.id}`}>
        <p>Go back</p>
        </a>
            <ul className="cast-list">
                {props.list.map(cast =>
                    (
                        <CastListItem cast={cast} key={cast.person.id} />

                    ))}
            </ul>
        </div>
    )
}

export default CastList;