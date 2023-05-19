export const handleLocalStorage = (data) => {
    let searchs = localStorage.getItem('weather')
    if (searchs) {
        searchs = JSON.parse(searchs)
        if(searchs.length > 5){
            searchs.shift()
        }
    } else {
        searchs = []
    }
    searchs.push(data.city)
    localStorage.setItem('weather', JSON.stringify(searchs))
}