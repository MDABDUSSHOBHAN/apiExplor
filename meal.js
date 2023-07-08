console.log('connected');

// function fiendFish(){

//     fetch('https://restcountries.com/v3.1/all')
     
//        .then(response => response.json())
//        .then(data => displayFish(data))
// }

function displayFish(data){


    for( const fish of data){

        console.log(fish);
    }
//  console.log(data.meals)
}
function allCountry(search_prod){
 const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search_prod}`;
 console.log(url)
    fetch(url)
      
   
    .then(response => response.json())
    .then(data => displayCountry(data.meals))
}
function displayCountry(data){
   
    
        const container= document.getElementById('milcontainer');
        container.innerText='';
        for( const user of data){
            console.log(user);

            const milDiv= document.createElement('div');
            

             milDiv.classList.add('col');

          milDiv.innerHTML=`
          
          <div class="card">
                <img src="${user.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${user.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button onclick="mealsDetails(${user.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Detail's
                  </button>
                </div>
              </div>    
          `
            container.appendChild(milDiv);
        }
    }
    function searchMeal(){

        console.log(' Yeah! Found');

        const searchText= document.getElementById('search_prod').value;

        console.log(searchText);
        allCountry(searchText);
    }

     allCountry('fish');
    //  modal function... and mils details:

   function mealsDetails(idMeal){

    console.log(idMeal);

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    //  console.log(url);
     fetch(url)
       .then(response => response.json())
       .then(data =>displayData(data))




   }
   
   function displayData(data){

       console.log(data.meals[0]);
       document.getElementById('det').innerText= data.meals[0].strMeal;
       const imgt= document.getElementById('imgd');
       imgt.innerHTML =`
       <img class="img-fluid" src="${data.meals[0].strMealThumb}" alt="">
       
       
       
       `
       


   }












   
   const mealsDetails2 = async(idMeal) =>{

 url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res= await fetch(url)

    const data= await res.json();
    displayData(data)

   }