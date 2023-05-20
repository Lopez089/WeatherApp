import { v4 as uuidv4 } from 'uuid';

export const handleLocalStorage = (data) => {
    console.log("🚀 ~ file: handleLocalStorage.js:2 ~ handleLocalStorage ~ data:", data)
    let searchs = localStorage.getItem('weather')
    if (searchs) {
        searchs = JSON.parse(searchs)
        if(searchs.length > 5){
            searchs.shift()
        }
    } else {
        searchs = []
    }
    searchs.push({city:data.city, unit: 'celsius', id: uuidv4()})
    localStorage.setItem('weather', JSON.stringify(searchs))
}