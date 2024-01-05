function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";
 // travel the array
 for(let i=0;i<petSalon.pets.length;i++){
    let pet = petSalon.pets[i];
    console.log(pet);
 // create the HTML template
 card+= `
 <div>
 <p> Name: ${pet.name}</p>
 <p> Age: ${pet.age}</p>
 <p> Gender: ${pet.gender}</p>
 <p> Breed: ${pet.breed}</P>
 <p> Service: ${pet.service}</P>
 </div>
 `
 }
 DIV.innerHTML=card;

 //insert the HTML template into the register.html
}