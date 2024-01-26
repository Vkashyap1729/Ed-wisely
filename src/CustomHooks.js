import { useState, useEffect } from 'react'

export default function useFetchData(fetchFn) {
  const [assessmentsData, setAssessmentsData] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function fetchData() {
      try {
        const data = await fetchFn()
        if (isMounted) {
          setAssessmentsData(data)
          setError(false)
          setIsLoading(false)
        }
      } catch (error) {
        if (isMounted) {
          setError(true)
          setIsLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      // Cleanup function to handle component unmounting
      isMounted = false
    }
  }, [])

  return { assessmentsData, error, isLoading, setAssessmentsData }
}
