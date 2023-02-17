const memberUrl = 'https://peace-23.github.io/wdd230/chamber/data/members.json';


const cards = document.querySelector('.spotlights');
const array = [];
let newArray = [];
let spotNumber = 4;
var count = 0;

async function GetMemberData() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    displaySpotlight(data.members);
    
}
GetMemberData();

const displaySpotlight = (members) => {
    members.forEach((member) => {
        
        if (member.membership == "Gold" || member.membership == "Silver") {
            array.push(member);
            newArray = array.sort(() => 0.5 - Math.random()).slice(0, 3);
        }
        return newArray;
    })
    newArray.forEach((index) => {
        let card = document.createElement('section');
        let header = document.createElement('h3');
        let icon = document.createElement('img');
        let email = document.createElement('a');
        let phone = document.createElement('p');
        let website = document.createElement('a');


        email.innerHTML = `${index.email}`;
        phone.textContent = `${index.phone}`;
        website.innerHTML = `${index.url}`;
        website.setAttribute('href', `${index.url}`);
                    
        icon.setAttribute('src', index.icon);
        icon.setAttribute('alt', `${index.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200');
        icon.setAttribute('height', '100');
    
        header.appendChild(icon);
        card.appendChild(header);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(website);
                           
        cards.appendChild(card);
    }
    ) 
};      