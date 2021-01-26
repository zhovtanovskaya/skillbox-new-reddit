import assoc from './assoc';

// Функция для генерации случайной строки.
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);
// Функция для добавления свойства "id" со случайным
// значением к объекту.
export const generateId = <O extends object>(obj: O) =>
    assoc('id', generateRandomString())(obj);
