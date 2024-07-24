var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => {
    return data.json();
}).then((data1) => foo(data1))
.catch((error) => console.log(error))

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";


function foo(data1) {

    for(var i=0; i<data1.length; i++){

        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data1[i].flags.png}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data1[i].name.common}</h5>
        <p class="card-text">${data1[i].name.official}</p>
        <p class="card-text"><small class="text-muted"><b>Capital: ${data1[i].capital}</></small></p><br>
        <p class="card-text"><small class="text-muted"><b>Region : ${data1[i].region}</></small></p><br>
        <p class="card-text"><small class="text-muted"><b>Latitude - Longitude: ${data1[i].latlng}</></small></p><br>
        <p class="card-text"><small class="text-muted"><b>Country-Code : ${data1[i].cca3}</></small></p>

      </div>
    </div>
  </div>
</div>`
    row.append(col);
    container.append(row)
    document.body.append(container);
    }
}