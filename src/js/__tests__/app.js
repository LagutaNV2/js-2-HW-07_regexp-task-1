import Validator from '../app';

let validator;

// гарантирует, что перед запуском каждого теста создаётся новый экземпляр класса Validator.
// Это позволяет работать с "чистым" экземпляром для каждого теста.
beforeAll(() => {
  validator = new Validator();
});

test('валидное имя: только буквы', () => {
    expect(validator.validateUsername('Username')).toBe(true);
});

test('валидное имя: буквы, цифры и допустимые символы', () => {
    expect(validator.validateUsername('User_123-Name')).toBe(true);
});

test('невалидное имя: начинается с цифры', () => {
  expect(validator.validateUsername('1Username')).toBe(false);
});

test('невалидное имя: заканчивается цифрой', () => {
  expect(validator.validateUsername('Username1')).toBe(false);
});

test('невалидное имя: начинается с тире', () => {
  expect(validator.validateUsername('-Username')).toBe(false);
});

test('невалидное имя: заканчивается подчёркиванием', () => {
  expect(validator.validateUsername('Username_')).toBe(false);
});

test('невалидное имя: содержит более трёх цифр подряд', () => {
  expect(validator.validateUsername('User1234Name')).toBe(false);
});

test('невалидное имя: только цифры', () => {
  expect(validator.validateUsername('123456')).toBe(false);
});

test('невалидное имя: содержит недопустимые символы', () => {
  expect(validator.validateUsername('User@name')).toBe(false);
});

test('Невалидное имя: минимально допустимое имя', () => {
  expect(validator.validateUsername('U')).toBe(false);
});

test('невалидное имя: пустая строка', () => {
  expect(validator.validateUsername('')).toBe(false);
});
