function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // We have to handle application error too thats why we need to apply some condition into the onload
      if (this.status >= 400) {
        reject(
          `There was an application error and the response rate this ${this.status}`
        );
      } else {
        resolve(this.response);
      }
    };

    // To Handle Error We have a Separated Function Which Can Make Our Life Easier
    xhr.onerror = function () {
      reject("There Was an Critical Error");
    };

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send(data);
  });
  return promise;
}

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}

// We can send a string data to by POST method, We can send object data by converting object to string using json.stringify method
function sendData() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "Title Has Been changed",
      body: "Some Data Has Been Inserted in the URL",
      userId: 1,
    })
  )
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
