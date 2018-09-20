document.addEventListener('DOMContentLoaded', function() {

  let btn = document.getElementById('btn');
  
  
  btn.addEventListener('click', function(){
    let hour = document.getElementById('hourlypay');
    let hourday = document.getElementById('hoursaday');
    let month = document.getElementById('daysamonth');
    let outputfield = document.getElementById('outputfield')
    let salary = (parseInt(hour.value) * parseInt(hourday.value) * parseInt(month.value));
    outputfield.value = salary;
  
  
  
  
  
  });
  });
  
