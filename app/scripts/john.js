
var api_flickr = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&tags=food&tag_mode=all&license=1&api_key=' + 'e1126579a99d5f23c6802a189f95b9dd' + '&per_page=6&page=1&format=json&nojsoncallback=1';

// Flickr API uses method photos.search, uses license key = 7-No known copyright restrictions.

var api_news = 'http://private-2d011-restaurantapi.apiary-mock.com/news/latest'; //news api

var template_flickr = $('#template_photos').html();
var render_flickr = _.template(template_flickr);

var template_news = $('#news_call').html();
var render_news = _.template(template_news);
//var render_specialphoto = _.template($('#template_specialphoto').html());
var news_title,
    news_text,
    food_photo;
var farm_id;

var server_id;

var id;

var secret;

//This calls the news API and retrieves the content for the section.

    $.getJSON(api_news).done( function(news_data){

          news_title = news_data.title;

          news_text = news_data.post;
//          console.log(news_text);

          $('.news').append(render_news(news_data));
        });


//This calls the Flickr API


 $.getJSON(api_flickr).done( function(flickr){

  //  console.log(flickr.photos.photo);

    var photo_array = flickr.photos.photo


    photo_array.forEach(function(photo){

            // console.log(photo.title);

            farm_id = photo.farm;

            server_id = photo.server;

            id = photo.id;

            secret = photo.secret;

            food_photo = 'https://farm' + farm_id +'.staticflickr.com/' + server_id + '/' + id + '_' + secret + '_m.jpg';

          //  console.log(food_photo);

            console.log(photo.owner);


            $('.flickr').append(render_flickr(photo));

          })

//var special_photo = 'https://farm' + farm_id +'.staticflickr.com/' + server_id + '/' + id + '_' + secret + '_m.jpg';

//console.log(special_photo);

});



//$('.special_photo').append(render_specialphoto());
