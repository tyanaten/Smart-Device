const accordionParts = document.querySelectorAll('.main-footer__button-wrapper');
const acoordionContent = document.querySelectorAll('.main-footer__accordion-content');
const breakpoint = window.matchMedia('(min-width:768px)');
const accordionButtons = document.querySelectorAll('.main-footer__button');

const hideAccordionContent = (action) => {
  acoordionContent.forEach((el) => {
    el.classList[action]('visually-hidden');
  });
  accordionButtons.forEach((el) => {
    el.style.backgroundImage = 'url("../img/svg/plus.svg")';
  });
};

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    if (accordionParts) {
      hideAccordionContent('add');
      for (let i = 0; i < accordionParts.length; i++) {
        accordionParts[i].addEventListener('click', (evt) => {
          let content = evt.currentTarget.closest('section').querySelector('.main-footer__accordion-content');
          let button = evt.currentTarget.closest('section').querySelector('.main-footer__button');
          if (accordionParts[i].getAttribute('data-accordion-state') === 'close') {
            hideAccordionContent('add');
            content.classList.remove('visually-hidden');
            accordionParts[i].setAttribute('data-accordion-state', 'open');
            button.style.backgroundImage = 'url("../img/svg/minus.svg")';
            content.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          } else {
            hideAccordionContent('add');
            accordionParts[i].setAttribute('data-accordion-state', 'close');
          }
        });
      }
    }
  } else {
    hideAccordionContent('remove');
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
