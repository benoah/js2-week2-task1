const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 20,
    isFriendly: true,
    name: "Benny",
};


const petDetail = document.querySelector(".pet-detail");
let friendly = "yes";

if (pet.isFriendly === false) {
    friendly = "no";

}
const petColor = pet.colour;

let petAge = "unknown";

if (pet.age !== undefined && pet.age !== null) {
    petAge = pet.age;
}
//  short handversion 
//          if (pet.age) {
//           petAge = pet.age;
//           }



petDetail.innerHTML = `
<h1>hello</h1>
<h4 style="color:${petColor}">${pet.type}</h4>
 <p>Age: ${petAge}</p>
 <p>Friendly: ${friendly}</p>
 <p>name: ${pet.name}</p> 
 `