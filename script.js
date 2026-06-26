const progressBars = document.querySelectorAll(".progress");

function animateSkills() {

    progressBars.forEach(bar => {

        const sectionPos = bar.getBoundingClientRect().top;
        const screenPos = window.innerHeight - 100;

        if(sectionPos < screenPos) {

            bar.style.width = bar.dataset.width;

        }
    });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

const certificateCards =
document.querySelectorAll('.certificate-card');

window.addEventListener('scroll', () => {

    certificateCards.forEach(card => {

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.classList.add('show');
        }

    });
});

const achievement = document.querySelector('.achievement-banner');

window.addEventListener('scroll',()=>{

    const sectionTop = achievement.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
        achievement.classList.add('show');
    }

});

const resumeCards = document.querySelectorAll('.resume-card');

window.addEventListener('scroll',()=>{

    resumeCards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.classList.add('show');
        }

    });

});

document.querySelector('.hire-btn').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function(e){
    e.preventDefault();

    popup.classList.add("show");

    form.reset();
});

function closePopup(){
    popup.classList.remove("show");
}