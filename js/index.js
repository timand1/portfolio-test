const videoButton = document.querySelector('.switch-btn');
const switchVideo = document.querySelector('.switch');
const video = document.querySelector('.video-container')


// Video play button - pause/play
videoButton.addEventListener('click', () => {   
    if(!videoButton.classList.contains('slide')) {
        videoButton.classList.add('slide');
        video.pause();
    } else {
        videoButton.classList.remove('slide');
        video.play();
    }
});

const contactButton = document.querySelector('.contact-btn');
const contactElem = document.querySelector('#contact');
contactButton.addEventListener('click', () => {
    contactElem.scrollIntoView();
});


// Menu mobile, open close
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');    
    menuButton.children[0].classList.toggle('menu-btn--top');
    menuButton.children[1].classList.toggle('menu-btn--mid');
    menuButton.children[2].classList.toggle('menu-btn--bottom');
});


// Get navigation height from the user
const navElem = document.querySelector('.nav');
const linkHeight = navElem.getBoundingClientRect().height;
const scrollHeight = window.pageYOffset;
const upButton = document.querySelector('.up-btn');

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    let videoHeight = video.getBoundingClientRect().height;
    // Switch to fixed nav bar
    if(scrollHeight > linkHeight * 6) {
        navElem.classList.add('nav--fixed')
    } else {
        navElem.classList.remove('nav--fixed')
    }

    // Add scroll to top button
    if(scrollHeight > videoHeight / 2) {
        upButton.classList.add('display')
    } else {
        upButton.classList.remove('display')
    }

    // Change menu button color to a dark color 
    if(scrollHeight > videoHeight) {
        menuButton.children[0].classList.add('menu--dark')
        menuButton.children[1].classList.add('menu--dark')
        menuButton.children[2].classList.add('menu--dark')
    } else {
        menuButton.children[0].classList.remove('menu--dark')
        menuButton.children[1].classList.remove('menu--dark')
        menuButton.children[2].classList.remove('menu--dark')
    }
});

upButton.addEventListener('click', () => {
    scroll(0,0)
});

// Knowledge - Mario pipes
const expButtons = document.querySelectorAll('.exp-btn');
const marioPipes = document.querySelectorAll('.mario-pipes');
const hiddenMario = document.querySelector('.mario-pipe--hidden');
for(let i = 0; i < expButtons.length; i++) {
    expButtons[i].addEventListener('click', () =>{
        
        if(i == 0) {
            marioPipes[i].classList.add('animHTML');
        } else if(i == 1) {
            marioPipes[i].classList.add('animCSS');
        } else if(i == 2) {
            marioPipes[i].classList.add('animJS');
        } else if(i == 3) {
            marioPipes[i].classList.add('animFigma');
        } else if(i == 4) {            
            marioPipes[i].classList.add('animMeme');
            hiddenMario.classList.add('animMeme')
        }
    })
};

const scrollLeftButton = document.querySelector('.scroll--left');
const scrollRightButton = document.querySelector('.scroll--right');
let timelineElem = document.querySelector('.timeline-container');

scrollLeftButton.addEventListener('click', () => {
    timelineElem.scrollLeft -= 150;
})

let intervalLeft;
scrollLeftButton.addEventListener('mousedown', () => {
    intervalLeft = setInterval(function() {timelineElem.scrollLeft -= 10;}, 10);    
})

scrollLeftButton.addEventListener('mouseup', () => {
    clearInterval(intervalLeft);    
})


scrollRightButton.addEventListener('click', () => {
    timelineElem.scrollLeft += 150;
})

let intervalRight;
scrollRightButton.addEventListener('mousedown', () => {
    intervalRight = setInterval(function() {timelineElem.scrollLeft += 10;}, 10);    
})

scrollRightButton.addEventListener('mouseup', () => {
    clearInterval(intervalRight);    
})

// Flip cards
const cardsElem = document.querySelectorAll('.card');
for(let i = 0; i < cardsElem.length; i++) {
    cardsElem[i].addEventListener('click', () => {
        cardsElem[i].classList.toggle('flip');
    })
}

function flipCard() {
    cardsElem.classList.toggle('flip');
}


// Message button
const messageButton = document.querySelector('.btn--form');
let messageTextElem = document.querySelector('#message');
let senderNameElem = document.querySelector('#name');
let messageSubjectElem = document.querySelector('#subject');

// Send email - open users mail client and take name, subject and text into the client
messageButton.addEventListener('click', () => {
    messageText = messageTextElem.value;
    senderName = senderNameElem .value;
    messageSubject = messageSubjectElem.value;
    window.open(`mailto:timandersson22@live.se?subject=${messageSubject}&body=${messageText}`);
});


// Put todays date in the footer
const dateElem = document.querySelector('#date');
const dateNow = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateMonth = months[dateNow.getMonth()];

dateElem.innerHTML = `${dateNow.getDate()} ${dateMonth} ${dateNow.getFullYear()}`;
