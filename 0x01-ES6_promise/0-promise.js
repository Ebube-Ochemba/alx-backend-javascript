// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    const success = true;
    if (success) {
      resolve('API response');
    }
  });
}
