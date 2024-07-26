// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
      resolve('API response');
    } else {
      reject('API error');
    }
  });
}
