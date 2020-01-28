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
    let active : string = '';
    const p : string = window.location.pathname;
    if (p === APP_ROOT) active = 'home';
    else if (p.startsWith(APP_ROOT + 'music/')) active = 'music';
    else if (p.startsWith(APP_ROOT + 'artists/')) active = 'artists';
    else if (p === APP_ROOT + 'demo/') active = 'demo';
    $(`#nav-item-${active}`).addClass('active');

    // Animate in menu items
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
