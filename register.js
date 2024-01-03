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
    pets:[]
}

// object constructor (function)
function pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function register(){
    console.log("Registering");
    // get the values from the inputs
    let inputName= document.
    getElementById("txtName").value;
    let inputAge = document.
    getElementById("txtAge").value;
    let inputGender = document.
    getElementById("txtGender").value;
    let inputBreed = document.
    getElementById("txtBreed").value;
    let inputService = document.
    getElementById("txtService").value;

    
    // Creating the obj
    let newPet = new pet(inputName,inputAge,inputGender,inputBreed,inputService);
 //push the object
 petSalon.pets.push(newPet);
 // display the pets array on the console
 console. log(petSalon.pets);
}

// creating pets using constructor
let p1 = new pet("Scooby",60,"Male","Pittbull","Haircut");
let p2 = new pet("Jerome",50,"Male","Frenchy","Nail trim");
let p3 = new pet("Keshia",45,"Female","Germansheperad","Massage");
//pushing pets into the pets arrary
petSalon.pets.push(p1,p2,p3);
console.log(petSalon.pets);