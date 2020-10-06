import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {

    renderList () {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                           className="ui button primary"
                           onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content" >{song.title}</div>
                </div>
            )
        })
    }
    render(){
        return <div className="ui divdided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, { selectSong })(SongList); 
// selectSong is passed in connect() to tell redux that it is a action creator
// connect() function will automatically call dispatch function with all the action creator