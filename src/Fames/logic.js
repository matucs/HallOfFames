
import { getFromApi, getFromLocalStorage } from '../_Share/logic'

const options = {
    headers: { 'Authorization': getFromLocalStorage('Authorization') }
};

const getListWithAuthorization = (url) => getFromApi(url, options).then((res) => {
// console.log(res.data.data.list)
})
const getAsGuest = (url) => getFromApi(url).then((res) => {
    return res.data.data.list;
})



export { getListWithAuthorization , getAsGuest};
