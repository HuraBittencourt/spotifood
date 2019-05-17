// o middleware fica escutando todas as actions

export const loadingBarMiddleware = store => next => action => {
    if (action.type.indexOf('requested') !== -1) {
        store.dispatch({
            type: 'loading',
        })
    }
    if (action.type.indexOf('success') !== -1) {
        store.dispatch({
            type: 'loaded'
        })
    }

    if (action typeof '') {
        return action(store.dispatch)
    }

    console.log(action);
    next(action)
}

// store.getState()
// store.dispatch()

// Lista de actions chamadas pela aplicação:
// 0: { type: 'start' }
// 1: { type: 'filter-requested' }
// 2: { type: 'filter-error' }
// 3: { type: 'playlist-requested' }
// 4: { type: 'playlist-success', data: [1,2,3] }

combineReducers({
    loading: (state = false, action) => {
        if (action.type === 'loading') {
            return true
        }
        if (action.type === 'loaded') {
            return false
        }
    },
    playlist: (state = [], action) => {
        if (action.type === 'playlist-success') {
            return action.data
        }
    }
})

@connect(
    state => ({
        playlistList: state.playlist,
        isLoading: state.loading
    }),
    dispatch => ({
        getPlaylistRequested: () => dispatch({
            type: 'playlist-requested',
        }),
        getPlaylistSuccess: data => dispatch({
            type: 'playlist-success',
            data: data
        }),
        start: () => dispatch({ type: 'START' })
    })
);

class App extends Component {
    componentDidMount() {
        this.props.start();
    }

    handleClick = event => {
        this.props.getPlaylistRequested();

        axios
            .get('url/endpoint')
            .then(response => this.props.getPlaylistSuccess(response.data))
            .catch(error)
    };


    render() {
        return (
            <div className={this.props.isLoading && 'loading'}>
                App
                {this.props.playlistList.map(playlist => (
                    <div key={playlist.id}>
                        {playlist.content}
                    </div>
                ))}
                <button onClick={this.handleClick}>Buscar</button>
            </div>
        )
    }
}

export default App;