function createTable() {
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  const tr = document.createElement("tr");

  const thId = document.createElement("th");
  thId.textContent = "id";
  const thImage = document.createElement("th");
  thImage.textContent = "Image";
  const thName = document.createElement("th");
  thName.textContent = "Name";
  const thLastName = document.createElement("th");
  thLastName.textContent = "Last name";
  const thCity = document.createElement("th");
  thCity.textContent = "City";
  const thFavColor = document.createElement("th");
  thFavColor.textContent = "Favorite Color";

  tr.append(thId, thImage, thName, thLastName, thCity, thFavColor);
  tHead.append(tr);
  table.append(tHead, document.createElement("tbody"));

  document.body.append(table);
}

async function getRobots() {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me/");
    if (response.ok) {
      const robots = await response.json();
      const rows = [];
      robots.forEach((robot) => {
        rows.push(generateTableRow(robot));
      });
      tbody.append(...rows);
    }
  } catch (error) {
    console.log(error);
  }
}

function generateTableRow(data) {
  const fullNameArray = data.name.split(" ");

  const tr = document.createElement("tr");

  const tdId = document.createElement("td");
  tdId.textContent = data.id;
  const tdImage = document.createElement("td");
  const img = document.createElement("img");
  img.src = data.image;
  tdImage.append(img);
  const tdName = document.createElement("td");
  tdName.textContent = fullNameArray[0];
  const tdLastName = document.createElement("td");
  tdLastName.textContent = fullNameArray[1];
  const tdCity = document.createElement("td");
  tdCity.textContent = data.city;
  const tdFavColor = document.createElement("td");
  tdFavColor.textContent = data.fav_color;

  tr.append(tdId, tdImage, tdName, tdLastName, tdCity, tdFavColor);
  return tr;
}

createTable();
const tbody = document.querySelector("tbody");
getRobots();
