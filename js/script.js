$(window).load((function () {
    $url = 'https://api.github.com/users/abishekaditya/repos?per_page=200';
    $.getJSON ($url, function ( response ) {
        var i = 0;
        $.each (response, function (index, repos) {
            var currentRepo = '';

            if (repos.name != currentRepo && repos.description != null && repos.description.match('Project :')) {

                i += 1;
                $('.carousel-inner').append('<div class="carousel-item"> ' + '<div class="num">' + i + '<br/></div><div class="parent row"><div class="col-sm-10">'
                    + repos.name + '</div><div class="col-sm-2"><a href='+ repos.html_url +'><button type="button" class="btn child">Repository</button></a></div></div>' +
                    '<br/><div class="desc"><br/>' +
                    repos.description.replace('Project :','')
                    +'</div></div>');
                $('.carousel').css('background-color','#A4E9FF')
                if(i == 1) {
                    $('.carousel-item').addClass('active');
                }
                currentRepo = repos.name;
            }
        });
    });
}));

$('.carousel').bind('slide.bs.carousel', function () {
    var colors = ["#FF6164","#A4E9FF","#B8F038", "#94D8F7", "#47EF85", "#FCD164","#9d84ff"]; 
    $('.carousel').css('background-color', colors[(parseInt($('.active > .num').html(),10)+1) % colors.length])
});