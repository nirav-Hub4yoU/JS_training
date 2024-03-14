// Browsers can store up to 5 MiB of local storage, and 5 MiB of session storage per origin
//  5.24288Mb of data they can hold
//  where cookie can store only 4kb of data
//  localStorage and sessionStorage are almost identical and have the same API.
//  The difference is that with sessionStorage, the data is persisted only until the window or tab is closed.
//  With localStorage, the data is persisted until the user manually clears the browser cache or
//  until your web app clears the data

function addLocalData() {
  let listData = [1, 2, 3, 4, 5, 6, 6, 66, 6, 77, 7, 989];
  //
  let useData = new Object({
    name: "Vk",
    rollNumber: 121212,
    useNam: "theoneTech121",
  });
  localStorage.setItem("localData", listData);
  localStorage.setItem("userName", "AngularDev");
  localStorage.setItem("useData", JSON.stringify(useData));
}

function addSessionData() {
  let listData = [1, 2, 3, 4, 5, 6, 6, 66, 6, 77, 7, 989];
  let useData = new Object({
    name: "Vk",
    rollNumber: 121212,
    useNam: "theoneTech121",
  });
  sessionStorage.setItem("localDataSession", listData);
  sessionStorage.setItem("userName", "TheOneTech117");
  sessionStorage.setItem("useData", JSON.stringify(useData));
}
function removeLocalData() {
  let localData = localStorage.getItem("localData");
  if (localData) {
    localStorage.removeItem("localData");
  }
}

function removeSessionData() {
  let localDataSession = sessionStorage.getItem("localDataSession");
  if (localDataSession) {
    sessionStorage.removeItem("localDataSession");
  }
}

function clearAllStorage(a) {
  if (a == 0) {
    sessionStorage.clear();
  } else {
    localStorage.clear();
  }
}

function getKeyFromDom() {
  let jsonData = localStorage.getItem("useData");
  console.log(jsonData);
  console.log(JSON.parse(jsonData));
}

// triggers on updates made to the same storage from other documents
window.onstorage = (event) => {
  // can also use window.addEventListener('storage', event => {
  console.log(event);
};
//! both browser tab must need to on the same storage, have same storage key values
