var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string; 
}();

window.onload = function() {
    
    var rand_no = Math.floor(Math.random() * 11);
    document.getElementById("rate").innerHTML = rand_no;
  
    var button = document.getElementById('button');
  
    //page2.html
    if (rand_no == 1) {
    var rateSrc = "http://www.wallpcat.com/wp-content/uploads/2014/11/cute%20bald%20cats-wRNk.jpg"; 
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    //image.style.width = '500px'
  }
  
  if (rand_no == 2) {
    var rateSrc = "http://img3.wikia.nocookie.net/__cb20120716012806/disney/images/e/e1/Yzma_42.PNG";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    
  }
  
  if (rand_no == 3) {
    var rateSrc = "http://img4.wikia.nocookie.net/__cb20140821045938/disney/images/1/16/1561_Ursula_40_detail.jpg";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    
  }
  
  if (rand_no == 4) {
    var rateSrc = "http://img1.wikia.nocookie.net/__cb20131015002405/disney/images/4/4b/Dalmatians-2-disneyscreencaps.com-4658.jpg.jpg";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    
  }
  
  if (rand_no == 5) {
    var rateSrc = "http://a.dilcdn.com/bl/wp-content/uploads/sites/2/2013/09/Etiquette-Maleficent.jpg";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
  
  }
  
  if (rand_no == 6) {
    var rateSrc = "http://img3.wikia.nocookie.net/__cb20131219204049/disney/images/0/0a/Snow_white_09.png";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    
  }
  
  if (rand_no == 7) {
    var rateSrc = "http://cupegraf.com/data_images/wallpapers/52/471011-rapunzel.jpg";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    
  }
  
  if (rand_no == 8) {
    var rateSrc = "https://40.media.tumblr.com/de1100b7651df995ee3b1513b87ee1f1/tumblr_n0fkbmfj4E1s3pfhuo5_1280.jpg";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    
  }
  
  if (rand_no == 9) {
    var rateSrc = "https://differenttogether.files.wordpress.com/2012/01/prince-naveen.jpg";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    
  }
  
  if (rand_no == 10) {
    var rateSrc = "http://cdn03.cdn.justjared.com/wp-content/uploads/2014/04/efron-more/more-zac-efron-shirtless-photos-mtv-movie-awards-2014-02.jpg";
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;

    
  }
    var rateImg = document.getElementById('rateImg');
    document.getElementById("rateImg").src = rateSrc;
    //var cat = document.getElementById('cat');
    //cat.setAttribute("src",QueryString.imageURL);
    
    //index.html
    var takePhoto = function() {
      var photoUrl = prompt("give url") 

      var img = document.createElement("img");
      img.src = photoUrl

      var parent = document.getElementById("gallery");
      parent.appendChild(img);
    }
}

  