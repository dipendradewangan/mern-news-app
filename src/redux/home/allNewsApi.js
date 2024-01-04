export const fetchAllNews = (countryIso, title)=>{
    return new Promise(async (resolve)=>{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${title}&country=${countryIso}&language=en&apiKey=5de847037bef4587848eccc10017bd3a`)
        const data = await response.json()
        resolve({data : data.articles})
    })
}



export const fetchEverythingNews = ()=>{
    return new Promise(async (resolve)=>{
        const response = await fetch()
        const data = await response.json();
        console.log(data);
        resolve({data})
    })
}