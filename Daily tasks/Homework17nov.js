//---------------morning session ------------------------------

// function getData(country){
//     const data = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((result)=>result.json())
//     .then((data1)=>console.log(data1[1].borders ))
// }

// console.log(getData('india'));

function getData1(country){
    const data = fetch(`https://restcountries.com/v2/alpha/${country}`)
    .then((result)=>{
        if(!result.ok) throw new Error("bhag ")
    }
    ).catch((e)=>{console.log(e)})
  

}

console.log(getData1('hd'));