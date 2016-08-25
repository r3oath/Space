var ready = function(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
            fn();
        });
    }
}

ready(function() {
    LazyLoad.css('https://fonts.googleapis.com/css?family=Raleway:400,700');
    LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/blazy/1.6.2/blazy.min.js', function() {
        new Blazy();
    });
});