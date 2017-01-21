/**
 * Created by mmishak on 22/01/17.
 */
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
});