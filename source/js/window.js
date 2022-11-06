const scrollButton = document.querySelector('.main-section__button');
const formSection = document.querySelector('.form-section__wrapper');
const productSectionTitle = document.querySelector('.products__text');
const breakpoint = window.matchMedia('(min-width:768px)');
const mobileText = document.querySelector('[data-text-modile-hide]');
const hideText = document.querySelectorAll('[data-hide-text]');
const moreButton = document.querySelector('.company-info__button');

const hideTextContent = (action) => {
  hideText.forEach((item) => {
    item.classList[action]('visually-hidden');
  });
};

hideTextContent('add');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    scrollButton.textContent = 'Получить бесплатную консультацию';
    productSectionTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
    mobileText.classList.remove('visually-hidden');
  } else {
    scrollButton.textContent = 'бесплатная консультация';
    productSectionTitle.innerHTML = 'Товары и услуги<br>Smart Device';
    if (moreButton.getAttribute('data-button') === 'more') {
      mobileText.classList.add('visually-hidden');
    } else {
      mobileText.classList.remove('visually-hidden');
    }
  }
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();


moreButton.addEventListener('click', () => {
  if (moreButton.getAttribute('data-button') === 'more') {
    hideTextContent('remove');
    moreButton.setAttribute('data-button', 'less');
    moreButton.textContent = 'Свернуть';
  } else {
    hideTextContent('add');
    moreButton.setAttribute('data-button', 'more');
    moreButton.textContent = 'Подробнее';
  }
  breakpointChecker();
});

scrollButton.addEventListener('click', () => {
  formSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
