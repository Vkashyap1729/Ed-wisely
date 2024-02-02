import axios from 'axios'
import setTableData from '../reducers/dashboard.reducer'

export const getAssessmentdata = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      let endpoint = `https://stagingstudentpython.edwisely.com/reactProject/assessments`
      let options = {
        method: 'GET',
        redirect: 'follow',
      }
      const response = await axios.get(endpoint, options)
      console.log(response)

      if (response?.data?.status !== 200) {
        throw response
      }

      // dispatch(
      //   setTableData({
      //     tableData: response?.assessments,
      //     loadingTableData: false,
      //     errorLoadingTableData: false,
      //   })
      // )
      return response
    }

    try {
      // dispatch(
      //   setTableData({
      //     tableData: [],
      //     loadingTableData: true,
      //     errorLoadingTableData: false,
      //   })
      // )
      const fetchedData = await fetchData()
      console.log(fetchedData)
      return fetchedData
    } catch (error) {
      console.log(error)
      // dispatch(
      //   setTableData({
      //     tableData: [],
      //     loadingTableData: false,
      //     errorLoadingTableData: true,
      //   })
      // )
      return error
    }
  }
}
