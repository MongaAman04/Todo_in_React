const todoKey = "TodoLists"
export const GetDataFromLocalStorage = ()=>{
    const rawdata = localStorage.getItem(todoKey);
    if(rawdata && rawdata !== 'undefined') return JSON.parse(rawdata);
    return [];
    
}

export const SetDataAtLocalStorage = (curr) =>{
  return  localStorage.setItem(todoKey, JSON.stringify(curr))
}