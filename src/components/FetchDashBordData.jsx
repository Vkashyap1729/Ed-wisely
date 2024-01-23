import { useEffect, useState } from 'react'
import axios from 'axios'

const FetchDashBordData = () => {
  const url =
    'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      console.log('API Response:', response.data) // Log the response
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      FetchDashBordData
      {console.log(data)}
    </div>
  )
}

export default FetchDashBordData
