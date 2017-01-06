function colorize() {
    var colors = ["#FF4E50","#FFD8D8","#E5F04C", "#DCF7F3", "#47EF85", "#FCD164","#9d84ff"];
    var i = 0;
    $('.carousel-item').each(function () {
        i = (i+1)%colors.length;
        $(this).css('background-color',colors[i]);
    })
}

$(window).load((function () {
    $url = 'https://api.github.com/users/abishekaditya/repos';
    $.getJSON ($url, function ( response ) {
        var i = 0;
        $.each (response, function (index, repos) {
            var currentRepo = '';

            if (repos.name != currentRepo && repos.description != null && repos.description.match('Project :')) {

                i += 1;
                $('.carousel-inner').append('<div class="carousel-item"> ' + '<div class="num">' + i + '<br/></div><div class="parent">'
                    + repos.name + '<a href='+ repos.html_url +'><button type="button" class="btn child">Repository</button></a></div>' +
                    '<hr><div class="desc"><br/>' +
                    repos.description
                    +'</div></div>');
                colorize();
                if(i == 1) {
                    $('.carousel-item').addClass('active');
                }
                currentRepo = repos.name;
            }
        });
    });
}));