const teamMembers = [
    {
        firstName : "Wayne",
        lastName : "Barnett",
        role : "Founder & CEO",
        picture : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        firstName : "Angela",
        lastName : "Caroll",
        role : "Chief Editor",
        picture : "img/angela-caroll-chief-editor.jpg",
    },

    {
        firstName : "Walter",
        lastName : "Gordon",
        role : "Office Manager",
        picture : "img/walter-gordon-office-manager.jpg",
    },

    {
        firstName : "Angela",
        lastName : "Lopez",
        role : "Social Media Manager",
        picture : "img/angela-lopez-social-media-manager.jpg",
    },

    {
        firstName : "Scott",
        lastName : "Estrada",
        role : "Developer",
        picture : "img/scott-estrada-developer.jpg",
    },

    {
        firstName : "Barbara",
        lastName : "Ramos",
        role : "Graphic Designer",
        picture : "img/barbara-ramos-graphic-designer.jpg",
    },

];

const container = document.querySelector(".teamContainer");

for(let i = 0; i < teamMembers.length; i++) {
    const post = `
        <div class="card">
            <div class="div-picture">
                <img class="picture" src="${teamMembers[i].picture}" alt="">
            </div>
            <div class="memberInfo">
                <h2>${teamMembers[i].firstName}${teamMembers[i].lastName}</h2>
                <small>${teamMembers[i].role}<small>
            </div>
        </div> `;

    container.innerHTML += post; 
}