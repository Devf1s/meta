import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

AOS.init({
	offset: 120, 
	delay: 1, 
	easing: 'ease-in-out'
});

if (document.body.clientWidth < 575) {
	AOS.init({
		disable: true
	})
}


//* --- FAQ Accordion --- *//
const faqs = document.querySelectorAll('.faq__question');
const answers = document.querySelectorAll('.faq__answer');
for (let i = 0; i < faqs.length; i++) {
	faqs[i].addEventListener('click', (e) => {
		if (parseInt(answers[i].style.height) != answers[i].scrollHeight) {
			faqs[i].classList.toggle('active');
		}

		// Validation for number of active questions
		for (let j = 0; j < answers.length; j++) {
			if (j !== i) {
				if (faqs[j].classList.contains('active')) {
					faqs[j].classList.remove('active');
				}
			}
		}
	});
}

//* --- Burger --- *//
const burger = document.querySelector('.header__burger');
const burgerLogo = document.querySelector('.header__logo');
const burgerMenu = document.querySelector('.nav');
const burgerList = [burger, burgerLogo, burgerMenu];
burger.addEventListener('click', () => {
	burgerList.forEach((e) => {
		e.classList.toggle('active');
	})
	
	// Anchor crossing
	for (let i = 0; i < burgerList.length; i++) {
		if (burgerList[i].classList.contains('active')) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.scrollBehavior = 'auto';
			setTimeout(() => {
				burgerLogo.style.zIndex = '99';
			}, 300);
		} else {
			document.body.style.overflow = 'auto';	
			document.documentElement.style.scrollBehavior = 'smooth';
			burgerLogo.style.zIndex = '0';
		}
	}
});

// Anchor crossing
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((navLink) => {
	navLink.addEventListener('click', (e) => {
		document.body.style.overflow = 'auto';	
		setTimeout(() => {
			document.documentElement.style.scrollBehavior = 'smooth';	
		}, 1000);
	});
});