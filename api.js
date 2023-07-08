console.log('connected!');

function loadQuote2(){


    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => displayData(data))
}
function displayData(data){
    const value= document.getElementById('blockcode');
    value.style='text-wrap'
    value.style.alignItems='center';
    value.style.width='bold';

    value.innerHTML= data.quote;    

    
      console.log(data);
}

// for practics...

function bedashini(){

    fetch('https://randomuser.me/api/?gender=female')
      .then(response => response.json())
      .then(data => displaybedashini(data))
}

function displaybedashini(data){
// find for name data....
  const nameData=document.getElementById('name');
  const genderData= document.getElementById('gender');
  const imageData= document.getElementById('img');
  nameData.innerHTML=  data.results[0].name.first + ' '+ data.results[0].name.last;
  genderData.innerHTML= data.results[0].gender;
  
  console.log(data.results[0].name.first )

  // find for address....
  console.log(data.results[0].gender)
 

}










// document.getElementById('d').addEventListener('click',function(){

//     console.log('hi');
// })
