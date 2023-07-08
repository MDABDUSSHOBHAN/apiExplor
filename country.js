console.log('connected');

function allCountry(){

     fetch('https://restcountries.com/v3.1/all')
       
    
     .then(response => response.json())
     .then(data => displayCountry(data))
}

// function for country's code...

function countryCode(code){
   
     const url = `https://restcountries.com/v3.1/alpha/${code}`
     fetch(url)
       .then(response => response.json())
       .then(data => displayCountryDetails(data[0]));
    
       
     
}
// country's Details 
function displayCountryDetails(data){

console.log(data);
     // console.log(data[0].);
     const detailscountry = document.getElementById('details_countrys');
     detailscountry.innerHTML =`
     
     <h3> Name: ${data.name.common} </h3>
     <p></p>
     <h4>Capital: ${data.capital[0]} </h4>
     
     <img src="${data.flags.png}" alt="">
     
     `;
     console.log(data);
}








// Fiend Country's All 

 function displayCountry(data){
    const allCountryname= document.getElementById('country-container');
    // for( const country of data){
    //     console.log(country);

    // }
    
        data.forEach((n)=>{

           console.log(n.cca2); 
        const divcontainer= document.createElement('div');
        divcontainer.classList.add('div5');
        divcontainer.innerHTML=`
        <h3> Name:${n.name.common}</h3>
        <h4> Capital:${n.capital ? n.capital[0] : 'No Capital'}</h4>

        
        <p>Official: ${n.name.official}</p>
        <p>Area: ${n.area} sq</p>
        <button onclick='countryCode("${n.cca2}")'>Details</button>
        
        `;

        allCountryname.appendChild(divcontainer);

        console.log(n.capital);
       })

    
    
 }


//  numbers=[1,2,3,4,5,6]

//  numbers.forEach(number => {
//     console.log(number);
// });
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4

// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(sumWithInitial);


// const sum = numbers.reduce((previousvalue,currentvalue) => previousvalue+currentvalue,0);

// console.log(sum);

// // Expected output: 10



// const numbers1= ['abdus','alim','abul']
//  const num= numbers1.map(x=> x[0]);

//  console.log(num);

//  number4=[2,3,4,5];
//  const valueof= number4.forEach((n)=>{
//     console.log(n*2);
//  });
