// Your code goes here

// Ten unique events
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.style.transform = 'translate(100px, 100px)';
    header.style.zIndex = '-9999';
})

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', () => {
    logoHeading.style.background = 'purple';
})

const pictures = document.querySelectorAll('img');
window.addEventListener('resize', () => {
    pictures.forEach((pic) => {
        pic.style.width = '100px';
        pic.style.height = '100px';
    })
})

pictures.forEach((pic) => {
    pic.addEventListener('mouseenter', () => {
        pic.style.transform = 'scale(1.5)'
    })
})

pictures.forEach((pic) => {
    pic.addEventListener('mouseleave', () => {
        pic.style = 'auto';
    })
})

const firstDestinationDiv = document.querySelector('.destination');
firstDestinationDiv.addEventListener('click', () => {
    firstDestinationDiv.style.background = 'hotpink';
})

const firstButton = document.querySelector('.btn');
firstButton.addEventListener('click', (event) => {
    event.target.textContent = 'Yee Haw';
    // Stopping the bubbling here -------------------
    event.stopPropagation();
})

// Doesn't do anything? I don't know why not.
//------------------------------------------------
// const pTags = document.querySelectorAll('p');
// pTags.forEach((pTag) => {
//     pTag.addEventListener('select', () => {
//         pTag.style.fontSize = '50px';
//     })
// })

const body = document.querySelector('body');
const secondDestination = document.querySelectorAll('.destination')[1];
secondDestination.addEventListener('drag', () => {
    body.style.background = 'limegreen';
})

secondDestination.addEventListener('dragend', () => {
    body.style.background = 'lightpink';
})

const thirdButton = document.querySelectorAll('.btn')[2];
const secondButton = document.querySelectorAll('.btn')[1];

window.addEventListener('keydown', () => {
    thirdButton.textContent = 'HAAW';
    secondButton.textContent = 'Sign Me Up!';
})

window.addEventListener('keyup', () => {
    thirdButton.textContent = 'Sign Me Up!';
    secondButton.textContent = 'Yeeeeeee';
})



// Using preventDefault on links
const aTags = document.querySelectorAll('a');
aTags.forEach((aTag) => {
    aTag.addEventListener('click', (event) => {
        event.preventDefault();
    })
})




