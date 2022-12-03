export const getData = async (url) => {
  const response = await fetch(url);
console.log(url)
  if(response.ok) {
    return response.json();
  }
}