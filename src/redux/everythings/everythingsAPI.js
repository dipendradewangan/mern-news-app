export const fetchEverything = (searchString, page)=>{
    console.log(searchString)
    console.log(page)
    return new Promise(async (resolve)=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchString}&apiKey=5de847037bef4587848eccc10017bd3a&pageSize=${page.newsPerPage}&page=${page.pageNum}`)
        const data = await response.json()
        resolve({data : data.articles})
    })
}

