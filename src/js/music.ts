if (window.location.pathname === APP_ROOT + 'music/') {
    for (let i: number = 0; i < 11; i++) {
        template('music-list-item', 'music-page-container', [
            {label: 'img', value: 'https://via.placeholder.com/300/23a5d9/d92323/'},
            {label: 'subtitle', value: 'Genre'},
            {label: 'title', value: 'Title'},
            {label: 'link', value: 'music/' + 'test'}
        ]);
    }
}
