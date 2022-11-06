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

const telInputs = document.querySelectorAll('input[type="tel"]');

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
