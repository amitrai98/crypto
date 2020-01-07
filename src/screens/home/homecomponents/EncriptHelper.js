import CryptoJS from 'react-native-crypto-js';
let defaultKey = 'defaultKey_-1';
export const getCypherText = (text, sceretKey) => {
  if (sceretKey == undefined)
    return CryptoJS.AES.encrypt(text, defaultKey).toString();
  else return CryptoJS.AES.encrypt(text, sceretKey).toString();
};
