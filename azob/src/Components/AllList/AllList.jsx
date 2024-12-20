import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


function AllList() {
    const resdata =  useLoaderData()
    console.log(resdata);
    
    return <div>
        <h1>Our Restourants</h1>
        <div className='gap-5 flex flex-wrap'>
        {
            resdata.map((el) =>
                <div key={el.id} className='p-1 hei bg-gray-500 justify-center rounded-[10px]'>
                    <Link className='justify-center text-center' to={el.id}>
                        <h4>{el.restaurant.name}</h4>
                        <div className='w-[170px] ml-auto mr-auto pb-2 '><img className=' rounded-[10px] w-[170px]' src={el.imageCarousel.images[0].url} alt="" /></div>
                        <div className='flex flex-wrap text-[10px] w-[160px]'>{el.restaurant.description}</div>
                    </Link>
                </div>)
        }
        </div>
        
    </div>
}

export default AllList