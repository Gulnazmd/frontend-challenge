import { TCatsImages } from './types'
import Heart from '../../images/heart.svg'

const Cat = (props: { cats: any }) => {
  const { cats } = props

  if (!cats || cats.length === 0) return <p>No cats, sorry</p>
  return (
    <div className='grid grid-cols-5 justify-between'>
      {cats.map((cat: TCatsImages) => {
        return (
          <div className='mr-5 hover:drop-shadow-xl hover:w-60'>
            <img
              className='object-contain'
              width={'225px'}
              height={'225px'}
              key={cat.id}
              src={cat.url}
              alt={cat.url}
            />
            <img className='w-10 h-10' src={Heart} />
          </div>
        )
      })}
    </div>
  )
}

export default Cat
