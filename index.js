function userData() {
const axios = require('axios');
axios.get('https://reqres.in/api/users?page=2')
  .then(response => {
    var list = response.data.data;
    console.log("got here");
    console.log(list);
    for(let i = 0; i < list.length; i++){
      console.log(user);
      const user = list[i];
      displayInfo(user);
    }
    
 })

    .catch(function (error) {
     console.log(error);
  })
    .finally(function() {
    
  });
}
 
  
function displayInfo(user) {
  var client = document.getElementById('client');
  var createRow = client.insertRow(1);
  var clientId = createRow.insertCell(0);
  var clientFname = createRow.insertCell(1);
  var clientLname = createRow.insertCell(2);
  var clientEmail = createRow.insertCell(3);

  clientId.innerHTML = user.id;
  clientFname.innerHTML = user.first_name;
  clientLname.innerHTML = user.last_name;
  clientEmail.innerHTML = user.email;
}
userData();