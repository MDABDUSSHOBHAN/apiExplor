console.log('connected');

function mealsDetail(searchText){

  const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => displayData(data.meals))

}




function displayData(data){
  
  const mainContainer= document.getElementById('divContainer');
    mainContainer.innerText='';

   for( const user of data){
    console.log(user.strMealThumb
        );

    const divelement= document.createElement('div');
    divelement.classList.add('col');

    divelement.innerHTML =`
    
    <div class="card " style="width: 28rem;">
    <div class="d-flex">
        <div>
            <img src="${user.strMealThumb}" style="width: 11rem; height: 13rem;" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Name: ${user.strMeal}</h5>
          <p class="card-text">With supporting text below as .</p>
          <button onclick="modalDetails(${user.idMeal})" class="btn  mt-5" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><a href="#" class="text-warning">View Details</a> </button>
          
    </div>   
    </div>
  </div>
    
    
    
    
    `;

   
    mainContainer.appendChild(divelement);

   
   }

   
   



   
      

}



function searchMeal(){

const textField= document.getElementById('search_prod').value;
  
  console.log(textField);

  mealsDetail(textField);
  textField.value='';
  
}

// detail's modal
function modalDetails(idMeal){


  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(response =>response.json())
  .then(data => displatdata(data))

  console.log(url);
console.log(idMeal);

}
// for display modal data and value..
function displatdata(data){

const title= document.getElementById('exampleModalToggleLabel2').innerText= data.meals[0].strMeal;
const title1= document.getElementById('container1');




 title1.innerHTML=`



       
 <a href="${data.meals[0].strSource}"></a>
 <img class="img-fluid" src="${data.meals[0].strMealThumb}" alt="">
 <p>
 <h2>Your Privacy</h2>
 We use cookies to make sure that our website works properly, as well as some optional cookies to personalise content and advertising</p>




`
  console.log(data);
}

