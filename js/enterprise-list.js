import enterprise from "./data/enterprise.json" assert { type: "json" };
const data = enterprise;
const [enterpriseList] = $("#enterprise-list");

export default function renderEnterpriseList(data) {
  enterpriseList.innerHTML = "";

  data?.forEach((item, index) => {
    if (index % 2 != 0) {
      const figure = createItem(item);
      enterpriseList.appendChild(figure);
    }
  });
}

function createItem(obj) {
  const li = document.createElement("li");
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const figCaption = document.createElement("figcaption");

  image.src = obj.image;
  image.alt = obj.title;
  figCaption.innerText = obj.title;

  figure.append(image, figCaption);
  li.appendChild(figure);

  return li;
}

renderEnterpriseList(data);
