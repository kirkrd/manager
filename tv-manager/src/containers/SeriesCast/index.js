import React, {Component} from 'react';
import CastList from '../../components/CastList';

class SeriesCast extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            cast: [],
            id: 0,
            hasError: false
        }
    }
    

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}/cast`)
            .then((response) => response.json())
            .then(json => this.setState({ cast: json, id: id }));
            
    }
    componentDidCatch(error, info) {
        this.setState({hasError: true});

        this.logErrorToMyService(error, info);
    }
    logErrorToMyService(error, info){
        console.log(error, info);
    }
    
    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        else{
            return (
            
            <CastList id={this.state.id} list={this.state.cast}></CastList>
            );
        }   
       
       
        
    }
}
export default SeriesCast;