const LOCAL_STORAGE_KEY = "searchHistory";

class getSession { }

getSession.saveHistory = (arr) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}

getSession.loadHistory = () =>JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

getSession.removeAllHistory=()=>{localStorage.removeItem(LOCAL_STORAGE_KEY)}


export default getSession




