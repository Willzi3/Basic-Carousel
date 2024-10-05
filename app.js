const Person = [
    {
        personID: '1',
        personName: 'Person One',
        personComment: 'Zachary is a quick learner and always eager to lend a helping hand. His problem-solving skills make him an invaluable team member.',
        personImage:'/images/image1.png'
    },
    {
        personID: '2',
        personName: 'Person Two',
        personComment: 'Working with Zachary is a pleasure. His passion for technology and his positive attitude uplift the entire team.',
        personImage:'/images/image2.png'
    },
    {
        personID: '3',
        personName: 'Person Three',
        personComment: 'Zachary\'s dedication to his craft and constant desire to grow is inspiring. He consistently brings innovative ideas to the table.',
        personImage:'/images/image3.png'
    }
];





// Start point
let currentPerson = 0;

// Function to display the current person
function displayPerson() {
    let display = document.getElementById("container");
    display.innerHTML = `
        <div class="card">
            <img src="${Person[currentPerson].personImage}" alt="${Person[currentPerson].personName}"/>
            <h2>${Person[currentPerson].personName}</h2>
            <p>${Person[currentPerson].personComment}</p>
            
            <div class="btn">
            <button id="Previous">Previous</button>
            <button id="Next">Next</button>
            </div>

        </div>
    `;

    document.getElementById("Next").addEventListener("click", function(){
        currentPerson = (currentPerson + 1) % Person.length;
        displayPerson();
    })
    
    document.getElementById("Previous").addEventListener("click", function(){
        currentPerson = (currentPerson - 1 + Person.length) % Person.length;
        displayPerson();
    })
    

}

// Initial display
displayPerson();


// document.getElementById("Next").addEventListener("click", function(){
//     currentPerson = (currentPerson + 1) % Person.length;
//     displayPerson();
// })

// document.getElementById("Previous").addEventListener("click", function(){
//     currentPerson = (currentPerson - 1 + Person.length) % Person.length;
//     displayPerson();
// })




