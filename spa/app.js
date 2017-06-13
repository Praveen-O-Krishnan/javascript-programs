var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var recent = document.getElementById('recent');

function initJsonData() {
  var data = document.getElementById('data').innerHTML;
  var mydata = JSON.parse(data);

  home.addEventListener('click', function() {
    document.getElementById('main').innerHTML = '<h1>'+mydata.home.title+'</h1><br>'+mydata.home.content;
  });

  about.addEventListener('click', function() {
    document.getElementById('main').innerHTML = '<h1>'+mydata.about.title+'</h1><br>'+mydata.about.content;
  });

  contact.addEventListener('click', function() {
    document.getElementById('main').innerHTML = '<h1>'+mydata.contact.title+'</h1><br>'+mydata.contact.content;
  });

  recent.addEventListener('click', function() {
    var node = document.getElementById('main');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }

    for (var i = 0; i < mydata.recent.newsArray.length; i++) {
      document.getElementById('main').innerHTML += '<h1>'+mydata.recent.title+'</h1><br>'+mydata.recent.newsArray[i].title+' '+mydata.recent.newsArray[i].news;
    }
  });
}
