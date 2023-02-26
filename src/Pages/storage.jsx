export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};


export const getData = (key) => {
  try {
    let temp = JSON.parse(localStorage.getItem(key));
    return temp;
  } catch (error) {
    return undefined;
  }
};
