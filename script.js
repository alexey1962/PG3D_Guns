// function showSpecial() {
//     var element = document.getElementsByClassName('P');
//     element.style.visibility = 'hidden';
// }

//=======================================================================

//  document.getElementsByClassName("premium").onclick = function() {
//      document.getElementById("P").style.display = "none";
//  }

//=======================================================================

//  let element = document.getElementById('P');

//  function hidePremium() {
//      element.style.display = "none";
//  }

//=======================================================================

  // let element = document.querySelector('.premium');

  // element.onclick = function() {
  //     console.log("1");
  // }

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
