// Pet array with 3 pets
const pets = [
    { name: 'Tyrone', age: 5,
     gender: 'Male',
      service: 'haircut',
       breed: 'Pittbull' },
    { name: 'Jerome',
     age: 6,
      gender: 'Male',
      service: 'Bath',
       breed: 'frenchy' },
    { name: 'Keshia',
     age: 7,
      gender: 'Female',
       service: 'Nail Trim',
        breed: 'yorky' }
];

// Function to display registered pet count
function displayPetCount() {
    const petCountElement = document.getElementById('petCount');
    petCountElement.textContent = `Total Pets Registered: ${pets.length}`;
}

// Function to display pet names
function displayPetNames() {
    const petNamesElement = document.getElementById('petNames');
    const ul = document.createElement('ul');

    pets.forEach(pet => {
        const li = document.createElement('li');
        li.textContent = pet.name;
        ul.appendChild(li);
    });

    petNamesElement.appendChild(ul);
}

// Call functions to display information
displayPetCount();
displayPetNames();
