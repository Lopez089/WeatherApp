export const handleLocalStorage = (data) => {
    let searchs = localStorage.getItem('weather')
    if (searchs) {
        searchs = JSON.parse(searchs)
    } else {
        searchs = []
    }
    searchs.push(data.city)
    localStorage.setItem('weather', JSON.stringify(searchs))
}