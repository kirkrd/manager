import React from 'react';
import './index.css';
const CastListItem = ({ cast }) => (

    <div>
        {cast === null}
        {
            cast !== null
            &&
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
                {cast.person.country.name != null &&
                    <li>
                        {cast.person.country.name}
                    </li>
                }
                {cast.person.birthday != null &&
                    <li>
                        <p>Born: {cast.person.birthday} </p>

                    </li>
                }


                <li>
                    {cast.person.image !== null &&

                        <img src={cast.person.image.medium} alt="person image" />

                    }
                    {cast.character.image !== null &&

                        <img src={cast.character.image.medium} alt="person image" />

                    }
                    {cast.character.image == null &&

                        <img className="unknown_user_img" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="person image" />
                    }
                    {cast.person.image == null &&

                        <img className="unknown_user_img" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="person image" />
                    }


                </li>
            </ul>
        }

    </div>

)

const CastList = (props) => {
    
    for (let person of props.list) {
        if (person.person.country == null) {
            person.person.country = "Unknown";
        }
    }
    return (
        <div>
            <a href={`/series/${props.id}`}>
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