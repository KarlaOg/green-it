function getInfos() {
  
    const city = document.getElementById("search").value;

    fetch(`http://127.0.0.1:3000/city?=${city}`, {
      method: "GET",
    })
      .then(response => console.log(response.json()))
      .then(response => console.log(response))
      .catch(function (err) {
        console.log("FETCH ERROR", err)
      })
  }
  

  window.onload = function() {
    getInfos();
  };



