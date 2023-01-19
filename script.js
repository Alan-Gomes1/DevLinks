function toggleMode() {
  let html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute("src", "./img/avatar-light.png")
  } else {
    img.setAttribute("src", "./img/avatar.png")
  }
}

function notification() {
  alert("Ooops nothing over here")
}