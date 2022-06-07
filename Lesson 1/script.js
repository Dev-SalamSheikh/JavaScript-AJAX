function changeData() {
  const xhr = new XMLHttpRequest();
  // Now We have to Set What will Happen When We call the function after we send request to the server
  xhr.onload = function () {
    const container = document.getElementById("test");
    container.innerHTML = xhr.responseText;
  };
  // Now we have to decide what we want to do after changes
  xhr.open("GET", "./data/data.txt");

  // When we are ready and our all task has been done then we have to send the request in to the server
  xhr.send();
}
