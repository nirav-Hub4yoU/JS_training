function addData(event) {
  event.preventDefault();
  let dataObj = {};
  for (let i = 0; i < event.target.length; i++) {
    if (i === 0) {
      dataObj.email = event.target[0].value;
    } else if (i === 1) {
      dataObj.password = event.target[1].value;
    }
  }
  dataObj.id = Math.floor(Math.random() * 10);
  addRemoveDataFromStorage(dataObj);
}

function addRemoveDataFromStorage(data) {
  let existingData = [];
  if (getDataFromLocal()) {
    existingData = getDataFromLocal();
    existingData.push(data);
    setDataTOLocal(existingData);
  } else {
    existingData.push(data);
    setDataTOLocal(existingData);
  }
}

function appendDataOnDOM() {
  let el = document.getElementById("listData");
  let data = getDataFromLocal();
  if (data && data.length > 0) {
    let stingHTML = data.map(
      (
        m
      ) => `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;" id=${m.id}>
      <div class="card-header">Details</div>
      <div class="card-body">
        <h5 class="card-title">${m.email}</h5>
        <p class="card-text">${m.password}</p>
        <button type="button" class="btn btn-danger" onclick=removeData("${m.id}")>Delete Record</button>
      </div>
    </div>
  <br>`
    );
    el.innerHTML = stingHTML;
  }

  //
}

function getDataFromLocal() {
  return (
    localStorage.getItem("credentials") &&
    JSON.parse(localStorage.getItem("credentials"))
  );
}

function setDataTOLocal(data) {
  localStorage.setItem("credentials", JSON.stringify(data));
  appendDataOnDOM();
}

function removeData(a) {
  const el = getDataFromLocal();
  if (el && el.length > 0) {
    const filteredData = el.filter((e) => e.id != a);
    setDataTOLocal(filteredData);
  }
}
