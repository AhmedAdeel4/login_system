import { atom } from "recoil"

const localAuthData = JSON.parse(localStorage.getItem("logged in"));

export const $auth = atom ({
    key:'authData',
    default: localAuthData ? localAuthData : {
        isAuth : false ,
        user : null ,
    } ,
});

export const $Name = atom ({
    key:'$Name',
    default:null,
});