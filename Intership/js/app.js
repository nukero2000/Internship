$(function () {
    $('label').click(function () {
        switch ($('input[name=' + $(this).attr('for') + ']').attr('type')) {
            /*case "text":
            case "password":*/

            case "checkbox":
                $('input[name=' + $(this).attr('for') + ']').trigger('click');
                break;
            default:
                $('input[name=' + $(this).attr('for') + ']').focus();
                break;
        }

    });
    $('.lang-link').click(function () {
        $('.lang-link').removeClass('selected');
        $(this).addClass('selected');
        $.get('php/appAPI.php?op=setLang&lang=' + $(this).attr('data-lang'), function () {
            window.location = window.location;
        });
    });
    new WOW().init();
});

