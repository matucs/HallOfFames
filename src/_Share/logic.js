import { get, post } from 'axios';


const setToLocalStorage = (key, value) => localStorage.setItem(key, value);
const getFromLocalStorage = (key) => localStorage.getItem(key);
const clearLocalStorage = () => localStorage.clear();
const removeFromLocalStorage = (key) => localStorage.removeItem(key);
const getFromApi = (url, opsions) =>  Option ? get(url, opsions) : get(url);

const postApi = (url, req) => post(url, req);



export {
    setToLocalStorage,
    getFromLocalStorage,
    clearLocalStorage,
    removeFromLocalStorage,
    getFromApi,
    postApi
}
