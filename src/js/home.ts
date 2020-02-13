if (window.location.pathname === APP_ROOT) {
    $(document).ready(() => {

        // Scroll down text
        document.getElementById('scroll-text').addEventListener('click', function() {
            document.getElementById('scroll-text').scrollIntoView({ behavior: 'smooth' });
        });
    

        // Get most recent tracks
        const tracks = [
            {
                artist: 'Joshua Myler',
                title: 'Never Let You Go',
            },
            {
                artist: 'Gazing Skies',
                title: 'Our Night',
            },
            {
                artist: 'Willford, Holden Redd & ROMIN (ft. Sebastian S)',
                title: 'Never Too Late',
            },
            {
                artist: 'Oli Harper (ft. Cadence XYZ)',
                title: 'Back By Your Side',
            },
            {
                artist: 'Daniel Sundqvist',
                title: 'Home',
            },
            {
                artist: 'Just In Time',
                title: 'Calculator',
            }
        ];

        for (let i: number = 0; i < 6; i++) {
            template('home-list-item', 'home-track-list', [
                {label: 'img', value: 'https://via.placeholder.com/300/10'},
                {label: 'artist', value: tracks[i].artist},
                {label: 'title', value: tracks[i].title},
                {label: 'link', value: 'music/' + 'test'}
            ]);
        }

        // Get featured artists
        for (let i: number = 0; i < 6; i++) {
            template('home-list-item', 'home-artist-list', [
                {label: 'img', value: 'https://via.placeholder.com/300'},
                {label: 'artist', value: 'Primary Genre'},
                {label: 'title', value: 'Artist Name'},
                {label: 'link', value: 'artists/' + 'test'}
            ]);
        }
    });
}
