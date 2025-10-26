// config.js
import { BASE_URL } from '../BASE_URL';
import axios from 'axios';
export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGMyMzQyNDcxYmQwNmZmMDIzZjkxZmU2NjFkNGEwYSIsIm5iZiI6MTY2NzY0MTQ1Ny41MTQsInN1YiI6IjYzNjYzMDcxOTY1M2Y2MDA3ZDlkZWU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3cDryPiOLzrD0qeRXaCY3ypRJwM7xJiDY4Cc9dzyicY';
axios.get(`${BASE_URL}/movie/upcoming`, {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});
console.log('ACCESS_TOKEN testing goes here ..... ////// ====== ####  Successfull  🎉🎉🎉🎉👋👋👋👋  🌍', ACCESS_TOKEN ); 
