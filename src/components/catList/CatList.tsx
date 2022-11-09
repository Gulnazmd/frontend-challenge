import Cat from '../cat/Cat'
import { FC } from 'react'
import { TCats, TCatsImages } from './types'

const CatList: FC<TCatsImages> = ({ cats }) => {

  if (!cats || cats.length === 0) return <p>No cats, sorry</p>
  return (
    <div className='grid grid-cols-5 justify-between'>
      {cats.map((cat: TCats) => {
        return <Cat url={cat.url} id={cat.id} likes={false} className="object-cover w-52 h-52 m-5 relative top-0 left-0"/>
      })}
    </div>
  )
}

export default CatList
