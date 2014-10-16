

var api_flickr = 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + 'e1126579a99d5f23c6802a189f95b9dd' + '&user_id=56199382@N00&per_page=12&page=4&format=json';          // Flickr API
var api_news = 'http://restaurantapi.apiary-mock.com/news/latest'; //news api

var template_flickr ;//= $('').html();
var render_flickr ;// = _.template(template_flickr);

var template_news = $('#news_call').html();
var render_news = _.template(template_news);

var news_title,
    news_text;

//This calls the news API and retrieves the content for the section.

    $.getJSON(api_news).done( function(news_data){

          news_title = news_data.title;

          news_text = news_data.post;
          console.log(news_text);

          $('.news').append(render_news(news_data));
        });


//This calls the Flickr API

var pages;

 $.getJSON(api_flickr).done( function(){

    console.log('hi');

});

//API variables for menu and specials
var api_menu='http://restaurantapi.apiary-mock.com/menu';
var api_special= 'http://restaurantapi.apiary-mock.com/menu/special';


//Main menu jquery for template
var template_menu=$('#template_menu').html();
var render_menu=_.template(template_menu);

$.getJSON(api_menu).done (function(menu_data){

    _.each(menu_data.appetizers, function (apps){
           $('.menu_apps').append(render_menu(apps));
    })

    _.each(menu_data.entrees, function (entree){

    $('.menu_entree').append(render_menu(entree));
    })

    _.each(menu_data.sides, function (side){

    $('.menu_sides').append(render_menu(side));
    })
});


// Specials section
var template_special=$('#template_special').html();
var render_special=_.template(template_special);

$.getJSON(api_menu).done (function(menu_data2){

  _.each(menu_data2, function (looking){

  _.each(looking, function (all){

  $.getJSON(api_special).done (function(special_data){

    var matches = _.findWhere(special_data == all);


//var match = _.findWhere (all.id == special_data.menu_item_id);


  //$('.special').append(render_special());
})
})
})
});

// Tab Functionality
$('#story').click(function(){
  $('.tabs div').removeClass('open');
  $('.story').addClass('open');
});

$('#menu').click(function(){
  $('.tabs div').removeClass('open');
  $('.menu').addClass('open');
});

$('#reservations').click(function(){
  $('.tabs div').removeClass('open');
  $('.reservations').addClass('open');
});
