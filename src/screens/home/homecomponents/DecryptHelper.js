import CryptoJS from 'react-native-crypto-js';
let defaultKey = 'defaultKey_-1';

export const getDecryptedMessage = (ciphertext, sceretKey) => {
  let bytes = '';
  if (sceretKey != undefined && sceretKey.length > 0)
    bytes = CryptoJS.AES.decrypt(ciphertext, sceretKey);
  else bytes = CryptoJS.AES.decrypt(ciphertext, defaultKey);

  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
