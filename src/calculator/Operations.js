function changeSign(content) {
  const signWithDigitRegex = new RegExp(/[+\-X/]?(\d\.?)+/g);
  const values = Array.from(newContent.matchAll(signWithDigitRegex));
  let toChange = values[values.length - 1][0]; // drop sign

  if (toChange.indexOf('X') != -1 || toChange.indexOf('/') != -1) {
    let newPart = '-' + toChange.substr(1);

    if (toChange.substr(toChange.length - 1) == '%') {
      newPart += '%';
    }
    return newContent.replace(new RegExp(/(\d\.?)+%?$/g), newPart);
  } else if (toChange.indexOf('+') != -1) {
    return newContent.replace(new RegExp(/[+-/X]?(\d\.?)+%?$/g), toChange.replace('+', '-'));
  } else if (toChange.indexOf('-') != -1) {
    return newContent.replace(new RegExp(/[+-/X]?(\d\.?)+%?$/g), toChange.replace('-', '+'));
  } else {
    return newContent.replace(new RegExp(/[+-/X]?(\d\.?)+%?$/g), '-' + toChange);
  }
}