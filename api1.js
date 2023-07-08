console.log('connected');

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    };
    

function exploreapi(){
 const  person1= document.getElementById('cardTitle');
 const  person2= document.getElementById('cardTitle1');
 const  person3= document.getElementById('cardTitle2');

 person1.innerText=person.result[0].name.common;
 person2.innerText=person.result[0].age;
 person3.innerText=person.result[0].address.street;


 const  person4= document.getElementById('cardTitle3');
 const  person5= document.getElementById('cardTitle4');
 const  person6= document.getElementById('cardTitle5');

 person4.innerText=person.result[1].name.common;
 person5.innerText=person.result[1].age;
 person6.innerText=person.result[1].address.street;


 console.log(person[1])

}

// new api list
const data = [
    {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description: "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
        _id: "60795e440489a32f948c4168",
        name: "MitoSedan",
        price: "221",
        description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags,Transmission: Manual",
        imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
        },
        {
        _id: "60795fc20489a32f948c4169",
        name: "Isuzu Tacoma",
        price: "105",
        description:"Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8Bags, Transmission: Manual",
        imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
        },
        {
        _id: "6079615d0489a32f948c416a",
        name: "Chevrolet Crossover",
        price: "434",
        description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags,Transmission: Automatic",
        },
        ];


       
function exploreapi2(data){

const mainsection= document.getElementById('submaincon');
    for(const user of data){
       const Divcontainer= document.createElement('div');
       Divcontainer.classList.add('col');
        console.log(user.description);

        Divcontainer.innerHTML=`
        
        <div class="card">
       
        <div class="card-body">
        <img src="${user.imageURL}" class="card-img-top" alt="...">
          <h5 class="card-title">Car_Name: ${user.name}</h5>
          <p class="card-text">Car_Detail's:${user.description}</p>
          <button class="btn btn-primary">Price: ${user. price}</button>
        </div>
      </div>
        
        
        
        
        `;



        mainsection.appendChild(Divcontainer);
    }

   
    

}

// explore-3

function adviceexp(data){


    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
      .then(response => response.json())
      .then(data => displayData(data))
    // console.log('Yeah connected!')
}

function displayData(data){
const tile= document.getElementById('adviceid');
carId.innerText=data.slip.id;

tile.innerText= data.slip.advice;

console.log(data.slip.id);
}

// api-4

function dicexplor(){

    console.log('Yeah! connected!');

  const url ='https://api.dictionaryapi.dev/api/v2/entries/en/boy'
  fetch(url)
   .then(response => response.json())
   .then(data => explorda(data))
}
function explorda(data){

console.log(data);

const maincon= document.getElementById('divd');
for( const user of data){

  console.log(user.meanings[0].definitions[0])

  const crele= document.createElement('div');

   crele.classList.add('col');
   crele.innerHTML=`
   
   <div class="card">
    <h5 class="card-header"> chief_word: ${user.word}</h5>
    <div class="card-body">
      <h5 class="card-title">Speciald title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <audio controls id="aut">
        <source src="https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3" type="audio/ogg">
      </audio>
      
    </div>
  </div>
   
   
   
   
   
   `;
   maincon.appendChild(crele);


  // console.log(user.meanings[0].definitions[0]);



}
// const audio= document.getElementById('aut');
// audio.innerText= data[0].phonetics.audio;

}


// api-3


function buttonshort(){



  console.log('Yeah! connected!');


  // let longURL = document.getElementById('');

  const field1= document.getElementById('inputfield1').value; 
  console.log(field1);
  
  
  const url= `https://api.shrtco.de/v2/shorten?url=${field1}`;
    console.log(url);

      fetch(url)
      .then(response => response.json())
      .then( data => displatlink(data))
}

function displatlink(data){
  const field2= document.getElementById('inputfield2').value=data.result.short_link2; 
  console.log(field2);
    
      // console.log(field1);
  console.log(data.result.short_link2);




}