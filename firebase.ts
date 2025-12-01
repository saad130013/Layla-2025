
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// =================================================================================================
// !! هام جداً !!
// !! VERY IMPORTANT !!
//
// استبدل القيم التالية بالقيم التي حصلت عليها من Firebase Console.
// Replace the following placeholder values with your actual Firebase project configuration.
//
// 1. Go to your Firebase project console.
// 2. Click on the gear icon (Project settings).
// 3. In the "General" tab, scroll down to "Your apps".
// 4. Find your web app and look for "Firebase SDK snippet".
// 5. Select "Config" and copy the configuration object here.
// =================================================================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE", // Example: "AIzaSy..."
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase App
// يتم تهيئة التطبيق مرة واحدة فقط
const app = initializeApp(firebaseConfig);

// Export Firebase services to be used across the application
// تصدير خدمات Firebase لاستخدامها في جميع أنحاء التطبيق
export const db = getFirestore(app); // The Firestore database instance / قاعدة بيانات Firestore
export const auth = getAuth(app); // The Authentication service instance / خدمة المصادقة
