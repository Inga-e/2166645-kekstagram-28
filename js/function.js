'use strict';

/*Функция для проверки длины строки. Она принимает строку, которую нужно проверить,
и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false,
если строка длиннее. Эта функция нам пригодится для валидации формы.
Примеры использования функции:
- Cтрока короче 20 символов
имяФункции('проверяемая строка', 20); // true
- Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
- Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false*/

function checkLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

/*Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
Например:
- Строка является палиндромом
имяФункции('топот'); // true
- Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
- Это не палиндром
имяФункции('Кекс');  // false
Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы.
Они не должны учитываться при проверке!

Это палиндром
имяФункции('Лёша на полке клопа нашёл '); // true*/

function checkPalindrome(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  for (let i = 0; i <= string.length / 2; i++) {
    if (string.at(i) === string.at(string.length - (i + 1))) {
      return true;
    } return false;
  }
}

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
функция должна вернуть NaN:

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число:

имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15*/
/*
function getStringToNumber (string) {
  let stringNumber = '';
  for (let i = 0; i <= string.length; i++) {
    if (Number(string.at(i)) === Number(string.at(i))) {
      stringNumber += string.at(i);
    }
  }
  stringNumber = stringNumber.replaceAll(' ', '');
  if (stringNumber === '') {
    return NaN;
  }
  return Number(stringNumber);
}

console.log(getStringToNumber('1 кефир, 0.5 батона'));
*/

function getStringToNumber(string) {
  let stringNumber = '';
  string = String(string);
  for (let i = 0; i <= string.length; i++) {
    if (Number(string.at(i)) === Number(string.at(i))) {
      stringNumber += string.at(i);
    }
  }
  stringNumber = stringNumber.replaceAll(' ', '');
  if (stringNumber === '') {
    return NaN;
  }
  return Number(stringNumber);
}

/*Функция, которая принимает три параметра: исходную строку, минимальную длину и строку
 с добавочными символами — и возвращает исходную строку, дополненную указанными символами
  до заданной длины. Символы добавляются в начало строки.
   Если исходная строка превышает заданную длину, она не должна обрезаться.
   Если «добивка» слишком длинная, она обрезается с конца.

Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

// Добавочный символ использован один раз
имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
имяФункции('qwerty', 4, '0'); // 'qwerty'
Попробуйте не использовать при этом функцию padStart() =)*/

function getNewString(string, minLength, additionalSymbols) {
  let addSymbolString = '';
  if (string.length <= minLength) {
    for (let i = minLength - string.length; i > 0; i = i - additionalSymbols.length) {
      if (additionalSymbols.length <= i) {
        addSymbolString += additionalSymbols.slice();
      } else {
        addSymbolString = additionalSymbols.slice(0, i) + addSymbolString;
      }
    }
    addSymbolString += string;
    return addSymbolString;
  }
  return string;
}

