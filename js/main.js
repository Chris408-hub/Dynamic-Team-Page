console.log('its working');

let theHeading = document.querySelector('h2'),
    theButtons = document.querySelectorAll('div'),
    theList = document.querySelector('ul');

// rules for working with/creating objects
// 1,need a name
// 2,comas between keys

//functions go here
let partners = {
    jie: {
        name: 'jie',
        role: 'Developer',
        bio: 'Jie is a developer with a background in interactive media design. She is learning how to  build web applications using a variety of technologies. In her free time, Jie enjoys playing  and traveling.',

    },
    jay: {
        name: 'jay',
        role: 'Designer',
        bio: 'Jay is a talented designer with a passion for creating beautiful and intuitive user interfaces. He wants to work with major brands such as Apple, Google, and Microsoft. In his free time, Jay enjoys photography and hiking.',
    }

}

function listTeam() {

    if (theList.children.length > 0) {
        theList.innerHTML = "";
        return;
    }

    for (item in partners[this.dataset.team]) {
        let newItem = document.createElement('li');

        newItem.textContent = partners[this.dataset.team][item];
        theList.appendChild(newItem);
        theHeading.textContent = 'About ' + partners[this.dataset.team]['name'];
    }
}
// add event handling here
theButtons.forEach(teamButton =>teamButton.addEventListener('click', listTeam));