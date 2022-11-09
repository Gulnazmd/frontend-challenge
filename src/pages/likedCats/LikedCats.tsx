import Cat from '../../components/cat/Cat'
import { FC } from 'react'
import Header from '../../components/header/Header'
import { TCats, TCatsImages } from '../../components/catList/types'

const LikedCats: FC<TCatsImages> = ({ cats }) => {
  let catsArr = JSON.parse(localStorage.getItem('myLikedCat') || '[]')
  return (
    <div>
      <Header />
      <div className='grid grid-cols-5 justify-between m-5'>
        {catsArr.map((cat: TCats) => {
          return (
            <Cat
              id={cat.id}
              likes={true}
              url={cat.url}
              className='object-cover w-52 h-52 m-5 cursor-pointer'
            />
          )
        })}
      </div>
    </div>
  )
}

export default LikedCats
