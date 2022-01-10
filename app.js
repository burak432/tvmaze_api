const myform = document.querySelector("#myform");
const searchinput = document.querySelector("#search");
const btn1 = document.querySelector("#btn1");
const imagesDiv = document.querySelector("#imagesDiv");

myform.addEventListener("submit", async (e) => {
  e.preventDefault();
  imagesDiv.innerHTML = "";
  let searchTearm = myform.elements.query.value;

  //basit yöntem. query'ye bir degisken gönderme.
  //   let res = await axios.get(
  //     `https://api.tvmaze.com/search/shows?q=${searchTearm}`
  //   );

  ///// ikinci yöntem. query'ye config diye bir obje gönderme. axios'un özelliği. axios github readme'de var.
  let config = { params: { q: searchTearm } };

  let res = await axios.get("https://api.tvmaze.com/search/shows", config);
  showimages(res.data);
  console.log(res.data);
});

function showimages(items) {
  for (let i of items) {
    if (i.show.image) {
      const img = document.createElement("img");
      img.src = i.show.image.medium;
      imagesDiv.append(img);
    }
  }
}
