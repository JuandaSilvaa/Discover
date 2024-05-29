function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Juan Almeida serio, usando camisa social preta, e fundo praticamente branco, bem clarinho com algumas linhas brancas"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Juan Almeida serio, usando camisa social preta, e fundo azul escuro com algumas linhas brancas"
    )
  }
}
