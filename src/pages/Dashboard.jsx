import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAssessmentdata } from '../store/actions/dashboard.actions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { tableData, loadingTableData, errorLoadingTableData } = useSelector(
    (state) => state.dashboard
  )

  console.log(tableData, loadingTableData, errorLoadingTableData)

  useEffect(() => {
    dispatch(getAssessmentdata())
  }, [])

  return <div>Dashboard</div>
}

export default Dashboard
