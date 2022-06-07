function changeData(callbackFunction) {
  const xhr = new XMLHttpRequest();
  // Now We have to Set What will Happen When We call the function after we send request to the server
  xhr.onload = function () {
    callbackFunction(xhr);
  };
  // Now we have to decide what we want to do after changes
  xhr.open("GET", "./data/data.txt");

  // After Open the request we can pass our custom request header
  xhr.setRequestHeader("MY_DREAM", "Web Developer");

  // When we are ready and our all task has been done then we have to send the request in to the server
  xhr.send();
}

// That is how we can use multiple request with in a function
// We have to Declear two different function as a callback parameter function!

function callBack1(xhr) {
  const container = document.getElementById("test");
  container.innerHTML = xhr.responseText;
}

function callBack2(xhr) {
  const container = document.getElementById("test2");
  container.innerHTML = xhr.responseText;
}
