// TODO: write your code here
// Реализуйте класс Validator с методом validateUsername,
// который проверяет имя пользователя с помощью регулярных выражений на соответствие
// следующим правилам:

//    Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
//    Имя не должно содержать подряд более трёх цифр,
//    Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.

export default class Validator {

  validateUsername(username) {
      const pattern = /^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z]$/;
      const digitsInRow = !/\d{4,}/.test(username); // подряд 4 и более цифр

      return pattern.test(username) && digitsInRow;
  }
}
