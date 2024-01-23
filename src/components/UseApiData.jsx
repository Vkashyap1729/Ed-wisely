import { useState, useEffect } from 'react'

const useApiData = () => {
  const [data, setData] = useState({
    recentAssessments: [],
    leaderboard: [],
    assessments: [],
    courses: [],
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT')
        const jsonData = await response.json()

        // Assuming the structure of the JSON response matches the previous example
        setData({
          recentAssessments: jsonData.recent_assessments.analysis,
          leaderboard: jsonData.leaderboard,
          assessments: jsonData.assessments,
          courses: jsonData.courses,
        })

        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, []) // The empty dependency array ensures the effect runs only once when the component mounts

  return { data, loading, error }
}

export default useApiData
