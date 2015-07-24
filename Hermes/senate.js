// function statesenator() {
//     var img = document.getElementById("image");
//     img.src = this.value;
//     return false;
// }

// document.getElementById("states").onchange = statesenator;

var select = document.getElementById('Alabama');
  function logValue() {
    switch (this.value) {
      case '1':
        console.log('option 1 selected');
        break;
      case '2':
        alert('option 2 selected');
        break;
      case '3':
        confirm('option 3 selected');
        break;
    }
  }
  