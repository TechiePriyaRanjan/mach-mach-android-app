export function getCategories() {
  return fetch('https://machmach.epictechworld.in/api/category?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ')
    .then(data => data.json())
    .then(json => {
      console.log('data is ', json);
    })
}
