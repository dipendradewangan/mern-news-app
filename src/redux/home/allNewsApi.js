export const fetchAllNews = (country, title)=>{
    return new Promise(async (resolve)=>{
        // console.log(title)
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${title}&country=${country}&language=en&apiKey=5de847037bef4587848eccc10017bd3a`)
        const data = await response.json()
        resolve({data : data.articles})
    })
}

