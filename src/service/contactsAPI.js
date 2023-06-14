import axios from 'axios';
const BASEURL = 'https://648a1cdd5fa58521cab0d61f.mockapi.io';
export const contactAPI = axios.create({
  BaseURL: '648a1cdd5fa58521cab0d61f.mockapi.io/api/v1',
});

export const getContacts = async () => {
  const { data } = await contactAPI.get(`${BASEURL}/contact`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post(`${BASEURL}/contact`, contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await contactAPI.delete(`${BASEURL}/contact/${id}`);
  return data;
};