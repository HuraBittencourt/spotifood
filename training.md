import React, { Component } from 'react';

@connect(
    state => ({

    }),
    dispatch => ({
        getPlaylist: data => dispatch({
            type: 'playlist',
            data: data
        })
    })
)
class Playlists extends Component {
    handleClick = event => {
        axios
        .get('ulr/ednpiont')
        .then(response => this.props.getPlaylist(response.data))
        .catch(error)
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Buscar</button>
            </div>
        );
    }
}

export default Playlists;
