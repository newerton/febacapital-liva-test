import renderEnterpriseList from "./enterprise-list.js";
import enterprise from "/data/enterprise.json" assert { type: "json" };
const data = enterprise;

const [location] = $("#location");
const [type] = $("#type");

$("#location").change(filterProperties);
$("#type").change(filterProperties);

export default function filterProperties() {
  let filteredList = data;

  $("#mosaic").addClass("d-none");
  $("#enterprise-list").removeClass("d-none");

  if (location.value && type.value) {
    if (type.value) {
      filteredList = filteredList.filter((item) => {
        return item.city == location.value && item.type == type.value;
      });
    }
    if (!type.value) {
      filteredList = filteredList.filter((item) => {
        return item.city == location.value;
      });
    }
  }

  if (!location.value && type.value) {
    filteredList = filteredList.filter((item) => {
      return item.type == type.value;
    });
  }

  renderEnterpriseList(filteredList);
}

$(".btn-filter").click((e) => {
  e.preventDefault();
  $(".select-filter").toggleClass("d-none");
  if ($(".select-filter").hasClass("d-none")) {
    $("#enterprise-list").addClass("d-none");
    $("#mosaic").removeClass("d-none");
  }
});
