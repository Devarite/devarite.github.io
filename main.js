function CreateDropdown(id, options) { // broken/unfinished
    var dropdown = document.createElement("select");
    dropdown.id = id;
    dropdown.className = "form-control";
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.innerHTML = options[i];
        option.id = options[i] + "_" + id;
        dropdown.appendChild(option);
    }
    return dropdown;
}

function ShowToast(title, message) { // Toasts system
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "<div class=\"toast-header\"><strong class=\"mr-auto\">" + title + "</strong></div><div class=\"toast-body\">" + message + "</div>";
    document.body.appendChild(toast);
    // push others out of the way
    var toasts = document.getElementsByClassName("toast");
    for (var i = 0; i < toasts.length; i++) {
        toasts[i].style.bottom = (i * 50) + "px";
    }
    // Add the 'show' class to DIV
    toast.classList.add("show");
    // After 3 seconds, remove
    setTimeout(function () {
        // fade opacity
        toast.style.opacity = "0";
        // remove after opacity
        setTimeout(function () {
            // make all toasts move down
            for (var i = 0; i < toasts.length; i++) {
                toasts[i].style.bottom = ((i * 50) - 50) + "px";
            }
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

$(document).ready(function(){
    //header buttons
    $('.tab').click(function(){
        $(this).addClass('pressed').siblings().removeClass('pressed');
    });

    $('#projects').click(function(){
        $('.projects').show();
        $('.about').hide();
    });

    $('#about').click(function(){
        $('.about').show();
        $('.projects').hide();
    });

    //scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},200);
        return false;
    });

    $('#twitter-button').click(function(){
        $('#twitter-widget-0').remove();
        // shrink #Twitter 
        $('#Twitter').css('height', '0px');
        // wait for the animation to finish
        setTimeout(function(){
            // remove #Twitter
            $('#Twitter').remove();
            ShowToast("Removed widget", "Twitter successfuly reomoved")
        }, 500);
    });
});

