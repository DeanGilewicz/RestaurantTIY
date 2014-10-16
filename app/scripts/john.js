
var api_flickr = 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + 'e1126579a99d5f23c6802a189f95b9dd' + '&user_id=56199382@N00&per_page=12&page=4&format=json&nojsoncallback=1';          // Flickr API
var api_news = 'http://restaurantapi.apiary-mock.com/news/latest'; //news api

var template_flickr = $('#template_photos').html();
var render_flickr = _.template(template_flickr);

var template_news = $('#news_call').html();
var render_news = _.template(template_news);

var news_title,
    news_text,
    food_photo;

//This calls the news API and retrieves the content for the section.

    $.getJSON(api_news).done( function(news_data){

          news_title = news_data.title;

          news_text = news_data.post;
//          console.log(news_text);

          $('.news').append(render_news(news_data));
        });


//This calls the Flickr API

var pages;

 $.getJSON(api_flickr).done( function(flickr){

  //  console.log(flickr.photos.photo);

    var photo_array = flickr.photos.photo

    photo_array.forEach(function(photo){

            // console.log(photo.title);

            var farm_id = photo.farm;

            var server_id = photo.server;

            var id = photo.id;

            var secret = photo.secret;


            food_photo = 'https://farm' + farm_id +'.staticflickr.com/' + server_id + '/' + id + '_' + secret + '_m.jpg';

            console.log(food_photo);
            //orgs = o.avatar_url;

            //$('.org_img').append(render_org(o));

          })



});
