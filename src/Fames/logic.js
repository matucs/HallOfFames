
import { getFromApi, getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from '../_Share/logic'

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
const getAsGuest = (url) => {
    return getFromApi(url).then((res) => {
        return res.data.data.list;
    }).then(
        (result) => {
            const tempList = [];
            result.forEach(element => {
                tempList.push(element);
            });
            cashLoadedList('fames-list', tempList)
            return tempList;
        }
    ).catch((e) => {
        //if there is no Internet conection try return list from cash
        return getFromLocalStorage('fames-list')

    })
}
// store in cash
const cashLoadedList = (key, value) => {
    setToLocalStorage(key, value)
}



export { getListWithAuthorization, getAsGuest, logOut, cashLoadedList };
