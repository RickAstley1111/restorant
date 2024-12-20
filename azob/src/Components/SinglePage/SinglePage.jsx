import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SinglePage() {
  const resdata = useLoaderData()
  const { Food } = useParams()

  const betDat = resdata[Food]
  return (
    <div>
      <Link to={"/"}>{"<- go back"}</Link>
      <img className='ml-auto mr-auto mt-[20px] rounded w-[800px] h-[400px]' src={betDat.imageCarousel?.images[0].url} alt="" />
      {betDat.restaurant.name}
      <div>
        <div className=' bg-gray-500 text-white justify-between flex flex-col '>
          <div className='w-[500px] flex '>
            location:  <div className='w-[400px]'>{betDat.restaurant.address.line1}<br />{betDat.restaurant.address.line2}
            </div>
            <div className=' w-[500px]'>
              {betDat.restaurant.description}
            </div>
          </div>
          <div>
            {betDat.restaurant.hours}
          </div>
        </div>


      </div>


      <div className='flex'>
        {
          betDat.timeSlots.map((el) => <div className={el.available ? "m-[10px]  w-[100px] bg-green-400 rounded" : " rounded bg-gray-400 m-[10px]  w-[100px]"}><h5>{el.time}</h5> <h6>{el.available ? "available" : "not available"}</h6></div>)
        }
      </div>
    </div>
  )
}

export default SinglePage