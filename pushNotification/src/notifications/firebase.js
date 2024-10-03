// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAaK63EjZrm5GH_7B04MuIVvRiByon34jE",
  authDomain: "login-7ca14.firebaseapp.com",
  projectId: "login-7ca14",
  storageBucket: "login-7ca14.appspot.com",
  messagingSenderId: "332405362499",
  appId: "1:332405362499:web:ab50d2fe04f4cae05169f6"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission()
  console.log(permission)
  if(permission) {
    const token = await getToken(messaging, {
      vapidKey: 'BNctXwf1ocwxkwZ_g0nwqWSYXketAp-9KWjTcby9wm7oYa-IXcAQ40DRFQA_pu66cxY2el2EtwknWemWFLNkmFs'
    })
    console.log(token)
  }
}