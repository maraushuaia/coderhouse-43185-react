// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGJANFNN_u9ZIbJLOMNmg3vjVrASeZxGc',
  authDomain: 'explora-ecommerce-eb818.firebaseapp.com',
  projectId: 'explora-ecommerce-eb818',
  storageBucket: 'explora-ecommerce-eb818.appspot.com',
  messagingSenderId: '994887878312',
  appId: '1:994887878312:web:24279ec2551ed367f2649d',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
