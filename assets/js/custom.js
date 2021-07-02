    var player = videojs('player');

    player.playlistUi();

    player.playlist([{
        sources: [{
            src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
        }, {
        sources: [{
            src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/bunny/poster.png'
        }, {
        sources: [{
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
        }],