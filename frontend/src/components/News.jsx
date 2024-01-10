import { news } from '../constants/index'
import { Link } from 'react-router-dom'
const News = () => {
  return (
    <div className="py-20">
      <div className="text-center flex flex-col gap-3 pb-10">
        <h1 className='font-bold text-[2rem] font-roboto'>Our Latest News</h1>
        <p className='text-[0.9rem] text-gray-400 max-w-[850px] m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra vel facilisis.</p>
      </div>

      <div className='flex gap-6'>
        {
          news.map(items=> (
            <div
            key={items.id}>
              <Link to={items.path}>
                <div className='flex flex-col gap-5 cursor-pointer' >
                  <img className='' src={items.img} alt={items.title} />
                  <div className='flex items-center gap-3 text-gray-500'>
                    <h2 className='text-[0.9rem] font-medium'>{items.cat}</h2>
                    <p className='text-[0.8rem]'>{items.date}</p>
                  </div>
                  <h1 className='font-bold text-[1.3rem] font-roboto'>{items.title}</h1>
                </div>
              </Link>
              <p className='py-3 text-gray-400 text-[0.9rem]'>{items.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default News
