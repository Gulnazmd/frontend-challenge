import Cat from '../cat/Cat'
import { FC } from 'react'
import { TCats, TCatsImages } from './types'

const CatList: FC<TCatsImages> = ({ cats }) => {

  if (!cats || cats.length === 0) return <p>No cats, sorry</p>
  return (
    <div className='grid grid-cols-5 justify-between'>
      {cats.map((cat: TCats) => {
        return <Cat url={cat.url} width={cat.width} likes={false} map={undefined} length={0} height={cat.height} id={cat.id}/>
      })}
    </div>
  )
}

export default CatList
