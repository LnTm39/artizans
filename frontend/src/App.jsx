import { useEffect, useState } from 'react'
import './App.css'
import ArtisansList from './components/artisans/ArtisansList'

function App() {
  const [artisans, setArtisans] = useState([])

  useEffect(()=> {
    const getData = async () => {
      const response = await window.fetch('http://localhost:1337/api/artisans?populate=*')
      const responseData = await response.json()
      setArtisans(responseData.data)
    }
    getData()
  }, [])

  return (
    <>
      <ArtisansList artisans = {artisans} />
    </>
  )
}

export default App
