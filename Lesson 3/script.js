function changeData() {
  const xhr = new XMLHttpRequest();
  // Now We have to Set What will Happen When We call the function after we send request to the server
  xhr.onload = function () {
    console.log("has setted the function as asyncronous");
    const container = document.getElementById("test");
    container.innerHTML = xhr.responseText;
  };
  // Now we have to decide what we want to do after changes
  //  in The 3rd parameter of open we can pass a value which decide our function is asyncronous or not! we can define it give true of false value
  // xhr.open("GET", "./data/data.txt", true);

  // if we are facing some problem getting the actual data from the server then we should apply a js function which is math.random(). it will get the random data on every request
  xhr.open("GET", "./data/data.txt" + Math.random());

  // When we are ready and our all task has been done then we have to send the request in to the server
  xhr.send();
  console.log("Hello World");
}
