
import { getFromApi, getFromLocalStorage, removeFromLocalStorage } from '../_Share/logic'

const options = {
    headers: { 'Authorization': getFromLocalStorage('Authorization') }
};

//Authorization code didn't return any data then i had to use guest=true
const getListWithAuthorization = (url) => getFromApi(url, options).then((res) => {
    // console.log(res.data.data.list)
})
const logOut = () => {
    removeFromLocalStorage('Authorization');
}
const getAsGuest = (url) => getFromApi(url).then((res) => {
    return res.data.data.list;
}).then(
    (result) => {
        const tempList = [];
        result.forEach(element => {
            tempList.push(element);
        });
        return tempList;
    }
)



export { getListWithAuthorization, getAsGuest,logOut };
