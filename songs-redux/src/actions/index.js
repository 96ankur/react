// Action creator
export const selectSong = (song) => { // named export (allows to export many function from a file)
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};