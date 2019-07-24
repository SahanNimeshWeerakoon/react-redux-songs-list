import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    const content = song ? (
        <div>
            <h3>Details</h3>
            <hr />
            <p>Title: {song.title}</p>            
            <p>Duration: {song.duration}</p>
        </div>
    ) : (
        <div>
            <h3>Select a Song</h3>
            <hr />
        </div>
    )
    
    return (
        <div className="song-detail">    
            { content }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)