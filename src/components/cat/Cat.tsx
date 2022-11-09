import { FC, useState } from 'react'
import { TCats } from '../catList/types'
import hoveredHeart from '../../images/hoveredH.svg'
import Heart from '../../images/heart.svg'

const Cat: FC<TCats> = ({ url, id, className, likes }) => {
  const [liked, setLiked] = useState(likes)

  const Like = () => {
    setLiked(!liked)
    let cats = JSON.parse(localStorage.getItem('myLikedCat') || '[]')
    const item = cats.find((element: { id: string }) => element.id == id)
    if (!liked) {
      if (!item) {
        cats.push({ id, url })
      }
    } else {
      if (item) {
        cats = cats.filter((element: { id: string }) => element.id != id)
        window.location.reload();
      }
    }
    localStorage.setItem('myLikedCat', JSON.stringify(cats))
  }
  return (
    <div className='m-5 hover:drop-shadow-xl hover:w-58 hover:h-58'>
      <img className={className} key={id} src={url} alt={url} />
      {!liked ? (
        <img src={Heart} onClick={Like} className='w-8 h-8 cursor-pointer' />
      ) : (
        <img src={hoveredHeart} onClick={Like} className='w-8 h-8 cursor-pointer' />
      )}
    </div>
  )
}

export default Cat
