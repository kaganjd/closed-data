function loadWords() {
    var textSpinner = document.getElementById('carousel2');
    

    for (i = 0; i < nycOpenData.length; i++) {
	var p = document.createElement("p");
    p.innerHTML = nycOpenData[i].Dataset;
    textSpinner.appendChild(p);
  }
};

// for (var i = 0; i < items.length; i++) {
//     var container = document.createElement("div");
//     container.innerHTML = items[i].Dataset;
//     dataObjects.appendChild(container);
//   }

