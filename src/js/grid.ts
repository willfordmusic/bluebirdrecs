if (window.location.pathname === APP_ROOT + 'music/') {
    for (let i: number = 0; i < 11; i++) {
        template('music-grid-item', 'music-page-card', [
            {label: 'img', value: 'https://via.placeholder.com/300/23a5d9/d92323/'},
            {label: 'subtitle', value: 'Artists'},
            {label: 'title', value: 'Title'},
            {label: 'link', value: 'music/' + 'test' + '/'}
        ]);
    }
}

if (window.location.pathname === APP_ROOT + 'artists/') {
    for (let i: number = 0; i < 11; i++) {
        template('music-grid-item', 'artists-page-card', [
            {label: 'img', value: 'https://via.placeholder.com/300/f2b50c/3400e0/'},
            {label: 'subtitle', value: 'Primary Genre'},
            {label: 'title', value: 'Artist'},
            {label: 'link', value: 'artist/' + 'test' + '/'}
        ]);
    }
}
