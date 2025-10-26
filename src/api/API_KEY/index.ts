export const API_KEY = '64c2342471bd06ff023f91fe661d4a0a';

console.log('API_KEY testing goes here .............  Successfull  🎉🎉🎉🎉🎉  👋👋👋👋👋  🌍',API_KEY ); 

//export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
// ../api/API_KEY.ts
export const IMAGE_PATH = (size: string, path: string) =>
  `https://image.tmdb.org/t/p/${size}${path}`;
console.log('IMAGE_PATH testing goes here .............  Successfull  🎉🎉🎉🎉🎉  👋👋👋👋👋  🌍', IMAGE_PATH ); 
