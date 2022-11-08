const telInputs = document.querySelectorAll('input[type="tel"]');
const submitButtons = document.querySelectorAll('button[data-form-submit]');
const prefixNumber = (str) => {
  if (str === '7') {
    return '7 (';
  }
  if (str === '8') {
    return '8 (';
  }
  if (str === '9') {
    return '7 (9';
  }
  return '7 (';
};

const hideValidationMessage = (func) => {
  setTimeout(() => {
    func();
  }, 2000);
};

const hideContent = (element, action) => {
  element.classList[action]('visually-hidden');
};


telInputs.forEach((element) => {
  element.addEventListener('input', () => {
    const value = element.value.replace(/\D+/g, '');
    const numberLength = 11;

    let result;
    if (element.value.includes('+8') || element.value[0] === '8') {
      result = '';
    } else {
      result = '+';
    }

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ') ';
          break;
        case 7:
          result += '-';
          break;
        case 9:
          result += '-';
          break;
        default:
          break;
      }
      result += value[i];
    }

    element.value = result;
  });
});

submitButtons.forEach((submitButton) => {
  let nameModalError = submitButton.closest('form').querySelector('div[data-error-message="name"]');
  let nameModalInput = submitButton.closest('form').querySelector('input[name="name"]');

  let telModalError = submitButton.closest('form').querySelector('div[data-error-message="tel"]');
  let telModalInput = submitButton.closest('form').querySelector('input[type="tel"]');

  let checkboxModal = submitButton.closest('form').querySelector('input[type="checkbox"]');
  let checkboxModalMark = submitButton.closest('form').querySelector('.custom-checkbox__mark');

  submitButton.addEventListener('click', () => {
    let telValue = telModalInput.value.replace(/\D+/g, '');
    let nameValue = nameModalInput.value.replace(/[\-\s]/g, '');

    if (telValue.replace(/[^0-9]/g, '').length < 11) {
      telModalInput.setCustomValidity('Invalid field.');
      hideContent(telModalError, 'remove');
      hideValidationMessage(() => {
        hideContent(telModalError, 'add');
      });
    } else {
      telModalInput.setCustomValidity('');
      hideContent(telModalError, 'add');
    }

    if (!(nameValue.match(/^[а-яёА-ЯЁ]+$/))) {
      nameModalInput.setCustomValidity('Invalid field.');
      hideContent(nameModalError, 'remove');
      hideValidationMessage(() => {
        hideContent(nameModalError, 'add');
      });
    } else {
      nameModalInput.setCustomValidity('');
      hideContent(nameModalError, 'add');
    }

    if (!(checkboxModal.checked)) {
      checkboxModalMark.style.borderColor = 'rgba(255, 2, 2, 0.75)';
      hideValidationMessage(() => {
        checkboxModalMark.style.borderColor = '#ffffff';
      });
    }
  });
});
