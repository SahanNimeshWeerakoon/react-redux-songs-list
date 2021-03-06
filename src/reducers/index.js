import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Aan', duration: '2:35' },
        { title: 'I want it that way', duration: '1:45' },
        { title: 'yalla habibi', duration: '3:05' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type == 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})