import { FC } from 'react'
import Header from '../../components/header/Header'

const LikedCats: FC = (props) => {
  return (
    <div>
      <Header />
      <div className='m-10 color-red'>My lovely cats</div>
     </div>
  )
}

export default LikedCats;