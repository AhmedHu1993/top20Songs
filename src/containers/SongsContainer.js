import React, {Component} from 'react';
import SongsList from '../components/SongsList'

class SongsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(list => list.feed)
        .then(api => api.entry)
        .then(songs => this.setState({data: songs}))
    }

    render(){
        return(
           <SongsList songs={this.state.data} /> 
        )
    }
}

export default SongsContainer;
