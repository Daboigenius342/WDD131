let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let page = document.querySelector('.page');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current === 'dark') {
    page.style.backgroundColor = "#121212";
    page.style.color = "#eee";
    logo.src = "logobyui-white.png";
  } else if (current === 'light') {
    page.style.backgroundColor = "white";
    page.style.color = "black";
    logo.src = "logobyui.png";
  }
}
                    
