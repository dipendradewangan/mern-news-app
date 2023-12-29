import React, { Fragment, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNewsAsync, selectAllNews } from '../../redux/home/allNewsSlice';
import moment from 'moment';
import { Link } from 'react-router-dom';



const Home = () => {
    const dispatch = useDispatch()
    const allNews = useSelector(selectAllNews)

    useEffect(() => {
        dispatch(fetchAllNewsAsync())
    }, [dispatch])

    console.log(allNews)

    return (
        <Fragment>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <div className='w-full grid grid-cols-3 gap-8 p-8 rounded-lg bg-gray-200 my-6'>
                    <form>
                        <select>
                            <option value="in" disabled selected>India</option>
                        </select>
                    </form>


                </div>


                <div className='w-full grid grid-cols-3 gap-8 p-8 rounded-lg bg-gray-200'>
                    {/* cards */}
                    {
                        allNews && allNews.map((newsItem, index) => {
                            if (newsItem.title === '[Removed]') {
                                return ''
                            }
                            return <Link key={index} to={newsItem.url}>
                                <div className='bg-white p-6 rounded-md hover:bg-gray-100'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <div className='mb-3 flex justify-between items-center font-bold text-[12px] text-gray-500'>
                                                <div className='flex gap-2 items-center'>
                                                    <NewspaperIcon sx={"font-size : 15px"} />
                                                    <p>BY {newsItem.author}</p>
                                                </div>

                                                <div className='flex gap-0 items-center'>
                                                    <FavoriteBorderIcon sx={"font-size : 15px"} />
                                                    <p>11K</p>

                                                </div>
                                            </div>

                                            {/* news thumbnail */}
                                            <div className='rounded-md mb-1 h-[150px] w-full overflow-hidden flex justify-center items-center'>

                                                <img src={newsItem.urlToImage} alt='news' />
                                            </div>

                                            {/* news title */}
                                            <div className='flex justify-between font-normal text-gray-600 text-3xl mb-3'>
                                                <h1>{newsItem.title}</h1>
                                            </div>


                                            {/* news descriptoin */}
                                            <div className='mb-3'>
                                                <p className='font-[15px]'>{newsItem.description}</p>
                                            </div>

                                        </div>


                                        <div className='flex justify-between font-semibold text-gray-600 text-[10px] '>
                                            <p>{moment().startOf('day').fromNow()}</p>
                                            <p>
                                                {moment(newsItem.publishedAt).format('MMMM Do YYYY')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>


                        })
                    }


                </div>
            </div>
        </Fragment>
    )
}

export default Home
