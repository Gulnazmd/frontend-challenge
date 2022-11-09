import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import CatList from '../../components/catList/CatList'

const AllCats: FC = (props) => {
  const [myCats, setCats] = useState()

  useEffect(() => {
    const url = 'https://api.thecatapi.com/v1/images/search?order=random&limit=25'
    axios.get(url).then((response) => {
      setCats(response.data)
      console.log(response.data)
    })
  }, [setCats])
  return (
    <div>
      <Header />
      <div>
        <CatList cats={myCats}/>
      </div>
    </div>
  )
}
export default AllCats
