// object literal

let petSalon = {
    name:"The Fashion Pet",
    adress:{
        street:"Av. Universidad",
        number:"7250",
        zip:"22900"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[]//array
}
let counter=0
// object constructor (function)
function pet(name,age,gender,breed,service,mood){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.mood=mood;
    this.id=counter++;
}

function isValid(aPet){
    let validation=true;

    if(aPet.name==""){
        validation=false;
        alert ("Please add the name");
    }

    if(aPet.service==""){
        validation=false;
        alert("Please add the service");
    }

    return validation;

}

function register(){
    console.log("Registering");
    // get the values from the inputs
    let inputName= document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;
    let inputMood = document.getElementById("txtMood").value;

// Creating the obj
    let newPet = new pet(inputName,inputAge,inputGender,inputBreed,inputService,inputMood);
 //push the object
 petSalon.pets.push(newPet);
if(isValid(newPet)==true){
    // display the pets array on the console
 displayPetCards();
}
}

function deletePet(petID){
    console.log ("Deleting pet" + petID);
    document.getElementById(petID).remove();
    for(let i=0;i<petSalon.pets.length;i++){//remove from html
        let pet=petSalon.pets[i];//get the current pet
        if(pet.id==petID){
            deleteIndex=i; //we found the pet, store the index
        }
    }
    petSalon.pets.splice(petID,1);// remove the form the array
}

function addServices(){
    let services = readArray();
    for(let i=0;i<services.length;i++){
        $("#txtServices").append(`<option value="${services[i].description}">${services[i].description}</option>`)
    }
}


function init(){
// creating pets using constructor
let p1 = new pet("Scooby",60,"Male","Pittbull","HairCut","Agressive");
let p2 = new pet("Jerome",50,"Male","Frenchy","Nail trim","Shy");
let p3 = new pet("Keshia",45,"Female","Germansheperad","Massage","Excited");
//pushing pets into the pets arrary
petSalon.pets.push(p1,p2,p3);
displayPetCards();
addServices();
}

window.onload=init; //waits for render the HTML