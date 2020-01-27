// Set navigation event listeners
$(document).ready(() => {

    // Mobile navigation toggle button
    $('#mobile-nav-toggle').click(() => $('#nav-collapse').toggleClass('expanded'));

    // Change color of navbar on scroll
    $(document).on('scroll', () => {
        if (window.scrollY > 50) {
            $('#nav').addClass('scrolled');
            $('.nav-item img').attr('src', APP_ROOT + 'img/logo.png');
            $('.nav-brand-mobile img').attr('src', APP_ROOT + 'img/logo.png');
        } else {
            $('#nav').removeClass('scrolled');
            $('.nav-item img').attr('src', APP_ROOT + 'img/logo-black.png');
            $('.nav-brand-mobile img').attr('src', APP_ROOT + 'img/logo-black.png');
        }
    });

    // Set active menu item
    switch (window.location.pathname) {
        case APP_ROOT:
            $('#nav-item-home').addClass('active');
            break;
        case APP_ROOT + 'music/':
            $('#nav-item-music').addClass('active');
            break;
        case APP_ROOT + 'artists/':
            $('#nav-item-artists').addClass('active');
            break;
        case APP_ROOT + 'demo/':
            $('#nav-item-demo').addClass('active');
            break;
    }

    // Fade in menu items
    const interval : number = 150;
    setTimeout(() => {
        $('#nav-item-home').removeClass('hidden');
        setTimeout(() => {
            $('#nav-item-music').removeClass('hidden');
            setTimeout(() => {
                $('#nav-item-artists').removeClass('hidden');
                setTimeout(() => {
                    $('#nav-item-demo').removeClass('hidden');
                }, interval);
            }, interval);
        }, interval);
    }, interval);
});
