export const fetchAllNews = ()=>{
    return new Promise(async (resolve)=>{
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=5de847037bef4587848eccc10017bd3a')
        const data = await response.json()
        resolve({data : data.articles})
    })
}


