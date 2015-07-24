var url = "https://congress.api.sunlightfoundation.com/legislators/locate?zip=94520&apikey=1099c63152fa475a8ac969ac48b80571";

function statesenator() {
    var img = document.getElementById("image");
    img.src = this.value;
    return false;
}

document.getElementById("states").onchange = statesenator;

jQuery.get(url, function( response ) { 
    // response contains site information
} );