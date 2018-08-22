import React, { Component } from 'react';
import Loader from '../../components/Loader';
class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response) => response.json())
            .then(json => this.setState({ show: json }));
    }
    render() {
        const { show } = this.state;


        return (
            <div>
                {show === null && <Loader />}
                {
                    show !== null
                    &&
                    <div>
                        <a href={"/"}>
                            Go back
                        </a>
                        <p>{show.name}</p>
                        <p>Language: {show.language}</p>
                        <p>Status: {show.status}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>Network: {show.network.name}</p>
                        <p>Genre: {show.genres[0]}, {show.genres[1]}</p>
                        <a href={`/shows/${show.id}/cast`}>
                            <p>Cast</p>
                        </a>

                        {show.image !== null &&
                            <p>
                                <img alt="Show" src={show.image.medium} />
                            </p>
                        }





                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;