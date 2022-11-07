import { FC, useState } from 'react'
import { TCats } from '../catList/types'
import hoveredHeart from '../../images/hoveredH.svg'
import Heart from '../../images/heart.svg'

const Cat: FC<TCats> = ({ url, id }) => {
  const [likedCats, setlikedCats] = useState(false)

  const addLikedCats = () => {
    setlikedCats(!likedCats)
  }
  return (
    <div className='mr-5 hover:drop-shadow-xl hover:w-60'>
      <img
        className='object-contain cursor-pointer'
        width={'225px'}
        height={'225px'}
        key={id}
        src={url}
        alt={url}
      />
      {!likedCats ? (
        <img src={Heart} onClick={addLikedCats} className='absolute w-8 h-8' />
      ) : (
        <img src={hoveredHeart} onClick={addLikedCats} className='absolute w-8 h-8' />
      )}
    </div>
  )
}

export default Cat
