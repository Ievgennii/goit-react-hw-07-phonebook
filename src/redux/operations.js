import axios from 'axios'; // Импортируем библиотеку axios для работы с HTTP-запросами
const BASEURL = 'https://648a1cdd5fa58521cab0d61f.mockapi.io'; // Устанавливаем базовый URL для API

export const contactAPI = axios.create({
  BaseURL: '648a1cdd5fa58521cab0d61f.mockapi.io/api/v1', // Создаем экземпляр axios с указанным базовым URL
});

export const fetchContacts = async () => {
  // Функция для получения всех контактов
  const { data } = await contactAPI.get(`${BASEURL}/contact`); // Выполняем GET-запрос на URL `${BASEURL}/contact` с помощью axios и получаем данные
  return data; // Возвращаем полученные данные
};

export const addContacts = async contact => {
  // Функция для добавления контакта
  const { data } = await contactAPI.post(`${BASEURL}/contact`, contact); // Выполняем POST-запрос на URL `${BASEURL}/contact` с переданным контактом и получаем данные
  return data; // Возвращаем полученные данные
};

export const delContacts = async id => {
  // Функция для удаления контакта
  const { data } = await contactAPI.delete(`${BASEURL}/contact/${id}`); // Выполняем DELETE-запрос на URL `${BASEURL}/contact/${id}` с указанным идентификатором контакта и получаем данные
  return data; // Возвращаем полученные данные
};


// Здесь мы используем библиотеку axios для выполнения HTTP-запросов к API.
// contactAPI - экземпляр axios с базовым URL для API. Он будет использоваться для выполнения запросов к серверу.
// getContacts - функция для получения всех контактов. Она выполняет GET-запрос на URL ${BASEURL}/contact с помощью axios и возвращает полученные данные.
// addContacts - функция для добавления контакта. Она выполняет POST-запрос на URL ${BASEURL}/contact с переданным контактом и возвращает полученные данные.
// delContacts - функция для удаления контакта. Она выполняет DELETE-запрос на URL ${BASEURL}/contact/${id} с указанным идентификатором контакта и возвращает полученные данные.
// Все эти функции используют await для ожидания ответа от сервера и возвращают полученные данные.