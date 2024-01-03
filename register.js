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
    pets:[
        {
            name:"daffy",
            age:25,
            gender:"Male",
            service:"Grooming"
        },
        {
            name:"Scooby",
            age:35,
            gender:"Male",
            service:"Nail cut",
        },
        {
            name:"Tweety",
            age:79,
            gender:"Male",
            service:"Vaccine"
        }
    ]
}


console.table(petSalon.pets);
console.log(petSalon.pets[0].name);
console.log(petSalon.pets[1].name);
console.log(petSalon.pets[2].name);

// display names
console.log