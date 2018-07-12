import React, {Component} from 'react';
import Loader from '../../components/Loader';
import CastList from '../../components/CastList';
import {Link } from 'react-router-dom'
class SeriesCast extends Component {

    state = {
        cast: [],
        id: 0
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}/cast`)
            .then((response) => response.json())
            .then(json => this.setState({ cast: json, id: id }));
            
    }
    
    render() {
        console.log(this.state.cast);
        
        const {cast} = this.state;
        console.log(this.state.cast[1]);
        
        
        return (
        
        <CastList id={this.state.id} list={this.state.cast}></CastList>
        );
       
        
    }
}
export default SeriesCast;