let width, prgbarNumber, limit;
const url = "http://pb-api.herokuapp.com/bars";
const xmlhttpObject = new XMLHttpRequest();
xmlhttpObject.open("GET", url, true);
xmlhttpObject.send();
xmlhttpObject.addEventListener("load", function(e) {
  let response = JSON.parse(e.target.response);

  // to set global varibles
  let rootElement = document.getElementById("main");
  let limit = response.limit;
  let progressBarValueArray = response.bars;
  let buttonsArray = response.buttons;

  // to crete ProgressBars
  for (let j = 0; j < progressBarValueArray.length; j++) {
    let pr = document.createElement("div");
    pr.setAttribute("id", j + 1);
    pr.classList.add("myProgress", "space");
    pr.style.width = progressBarValueArray[j] + "%";
    pr.innerHTML = progressBarValueArray[j] * 1 + "%";
    rootElement.appendChild(pr);
  }

  // To create Buttons

  for (i = 0; i < buttonsArray.length; i++) {
    let but = document.createElement("button");
    but.innerHTML = buttonsArray[i];
    but.value = buttonsArray[i];
    but.addEventListener("click", function() {
      updateProgressBar(but.value);
    });
    rootElement.appendChild(but);
  }

  //To create select with option init.(combo box)
  let sel = document.createElement("select");
  for (i = 1; i <= progressBarValueArray.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = "Progress " + i;
    opt.value = i;
    sel.appendChild(opt);
  }
  rootElement.appendChild(sel);

  function updateProgressBar(value) {
    let currentSelection = document.querySelector("select").value;
    let currentPBValue = parseInt(progressBarValueArray[currentSelection - 1]);
    let newPBValue = currentPBValue + parseInt(value);
    let currentActiveBar = document.getElementById(currentSelection);
    if (newPBValue > limit) {
      currentActiveBar.style.width = limit + "%";
      currentActiveBar.innerHTML = limit + "%";
      currentActiveBar.className = "red-bar space";
      progressBarValueArray[currentSelection -1] = limit;
    } else if (newPBValue <= 0) {
      currentActiveBar.style.width = 0 + "%";
      currentActiveBar.innerHTML = 0 + "%";
      progressBarValueArray[currentSelection -1] = 0;
    } else if (newPBValue >= 0) {
      progressBarValueArray[currentSelection - 1] = newPBValue;
      currentActiveBar.style.width = newPBValue + "%";
      currentActiveBar.innerHTML = newPBValue + "%";
      currentActiveBar.className = "myProgress space";
    } else if( newPBValue = limit){
      progressBarValueArray[currentSelection - 1] = newPBValue;
      currentActiveBar.style.width = newPBValue + "%";
      currentActiveBar.innerHTML = newPBValue + "%";
      currentActiveBar.className = "myProgress space";
    }
  }
});
