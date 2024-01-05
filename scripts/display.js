function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";
 // travel the array
 for(let i=0;i<petSalon.pets.length;i++){
    let pet = petSalon.pets[i];
    console.log(pet);
 // create the HTML template
 card+= `
 <tr id="${pet.id}">
 <td> Name: ${pet.name}</td>
 <td> Age: ${pet.age}</td>
 <td> Gender: ${pet.gender}</td>
 <td> Breed: ${pet.breed}</td>
 <td> Service: ${pet.service}</td>
 <td> <button onclick="deletePet(${pet.id})">🗑️</button></td>
 </tr>
 `
 }
 DIV.innerHTML=card;

 //insert the HTML template into the register.html
}