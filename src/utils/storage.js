export const saveCount = (count, key = "counterValue") => {
  localStorage.setItem(key, count);
}

export const loadCount = (key = "counterValue") => {
  return parseInt(localStorage.getItem(key)) || 0;
}

export const saveHistory = (history, key= "saveHistory") => {
    localStorage.setItem(key, JSON.stringify(history));
}

export const loadHistory = (key= "saveHistory") =>{
    return JSON.parse(localStorage.getItem(key)) || [];
}
