function change() {
  let x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

fetch("data.json")
  .then((response) => response.json())
  .then((datos) => {
    const hrefs = Object.keys(datos);

    for (const i of hrefs) {
      createLink(i, datos[i]);
    }
  });

function createLink(direction, name) {
  const fatherElement = document.getElementById("nav");

  const a = document.createElement("a");
  a.setAttribute("href", direction);
  a.setAttribute("target", "_blank");
  a.textContent = name;

  fatherElement.appendChild(a);
}
