

var api_flickr = 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + 'e1126579a99d5f23c6802a189f95b9dd' + '&user_id=56199382@N00&per_page=12&page=4&format=json';          // Flickr API
var api_news = 'http://restaurantapi.apiary-mock.com/news/latest'; //news api

var template_flickr ;//= $('').html();
var render_flickr ;// = _.template(template_flickr);

var template_news ;//= $('').html();
var render_news ; //= _.template(template_news);

var news_title,
    news_text;

//This calls the news API and retrieves the content for the section.

    $.getJSON(api_news).done( function(news_data){

          news_title = news_data.title;

          news_text = news_data.post;
          //console.log(news_text);
        });


//This calls the Flickr API

$.getJSON(api_flickr).done( function(flick_data){

    console.log(flick_data);

    flick_data.forEach(function(photo_array){
      photo_array.forEach(function(photo_data){

      var photo_title = photo_data.title;

      console.log(photo_title);
    })
})
    console.log("hi");
})
