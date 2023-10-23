import axios from "axios";
import { Alert } from 'react-native';



function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


export const register = async (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/account/signup/', data)
        .then((response) => {

            const account_number = response.data.data.account_number;
            
            resolve({ account_number});
        })
        .catch((error) => {
        
            if (axios.isCancel(error)) {
              // Request was canceled
              reject(new Error('Request canceled'));
            } else if (error.message === 'Request timed out') {
              // Timeout error occurred
              reject(new Error('Request timed out'));
            } else {
              // Other error occurred
              reject(error); // Reject the promise with the error
            }
          });
    });
}

export const authLogin = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/account/login/', data)

        .then((response) => {

            const fullname = response.data.data.fullname;
            const email = response.data.data.email;
            const mobile = response.data.data.mobile;
            const account_number = response.data.data.account_number;
            const Authorization = response.data.Authorization;

            //console.log(fullname, email, mobile, account_number, Authorization)
            resolve({fullname, email, mobile, account_number, Authorization});
        })
        .catch((error) => {
        
            if (axios.isCancel(error)) {
              // Request was canceled
              reject(new Error('Request canceled'));
            } else if (error.message === 'Request timed out') {
              // Timeout error occurred
              reject(new Error('Request timed out'));
            } else {
              // Other error occurred
              reject(error); // Reject the promise with the error
            }
          });
    });
}

export function withTimeout(promise, timeout) {
    return Promise.race([
      promise,
      delay(timeout).then(() => Promise.reject(new Error('Request timed out'))),
    ]);
}


// const fetchProvipayAccount = async () => {
//     try {

//     }
// }