import './modalDetails.scss';

import React, { Component } from 'react';
import { playlistTrackItemsSelector, playlistTrackLimit, playlistTrackNext, tracksSelector } from '../selectors/playlistTracks';

import { Container } from 'react-bootstrap';
import PlaylistTracks from './playlistTracks';
import { closeModalDetails } from '../actions/modalDetails';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { getPlaylistTracks } from '../actions/playlistTracks';
import { modalDetailsStateSelector } from '../selectors/modalDetails';

const componentClassName = 'modal-details';

const mapStateToProps = state => ({
    modalDetailsState: modalDetailsStateSelector(state),
    playlistTrackItems: playlistTrackItemsSelector(state),
    playlistTrackItemsNext: playlistTrackNext(state),
    playlistTrackItemsLimit: playlistTrackLimit(state)
})

const mapDispatchToProps = dispatch => ({
    closeModal: modalDetailsState => dispatch(closeModalDetails(modalDetailsState)),
    getMoreResults: (trackId, params) => dispatch(getPlaylistTracks(trackId, params))
})

class ModalDetails extends Component {

    constructor(props) {
        super(props);
        this.handleClickMoreResults = debounce(this.handleClickMoreResults, 1000)
    }

    handleClickCloseModal = () => {
        this.props.closeModal(this.props.modalDetailsState);
    }

    handleClickMoreResults = () => {
        const trackNextLimit = this.props.playlistTrackItemsLimit + 3;
        this.props.getMoreResults(this.props.modalId, trackNextLimit)
    }

    render() {
        const { playlistTrackItems, modalId } = this.props;
        console.log(modalId)
        console.log(this.props)
        console.log(playlistTrackItems);
        return (
            <div className={componentClassName}>
                <span className={`${componentClassName}__close-modal`} onClick={this.handleClickCloseModal}>X</span>
                <Container className={`${componentClassName}__container`}>
                    {(playlistTrackItems !== undefined) && (
                        <div>
                            {playlistTrackItems.map(({track}) => (
                                <PlaylistTracks 
                                    key={track.id}
                                    name={track.name}
                                    popularity={track.popularity}
                                    external_url={track.external_urls.spotify}
                                    preview={track.preview_url} />
                            ))}
                            <div className={`${componentClassName}__more`}>
                                <p onClick={this.handleClickMoreResults}>More</p>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetails);
