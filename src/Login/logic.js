import { postApi, setToLocalStorage } from '../_Share/logic'
import { baseUrl } from '../_Share/common'


const tryLogin = (username, password) => postApi(baseUrl + '/login', { "username": username, "password": password }).then((res) => {
    console.log(res.headers.authorization)
    // login is successfull
    if (res.status === 200) {
        //save token in local storage
        setToLocalStorage('Authorization', res.headers.authorization)
        return true;
    }
    // login is not successful
    else {
        throw console.error('error');
    }
})




export { tryLogin };