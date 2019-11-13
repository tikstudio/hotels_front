export const getData = () => {
  let data;
  try {
    data = JSON.parse(localStorage.getItem('data'))
  } catch (e) {

  }
  return data || {}
};

export const setData = (data) => {
  localStorage.setItem('data', JSON.stringify(data))
};