

var apt_flickr ;  // Flickr API
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
