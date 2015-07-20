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
  
    var cat = document.getElementById('cat');
    cat.setAttribute("src",QueryString.imageURL);
    var takePhoto = function() {
    var photoUrl = prompt("give url") 

    var img = document.createElement("img");
    img.src = photoUrl

    var parent= document.getElementById("gallery");
    parent.appendChild(img);
  }
}

   if (rate == 1) {
        image.src = "http://www.wallpcat.com/wp-content/uploads/2014/11/cute%20bald%20cats-wRNk.jpg";
    }