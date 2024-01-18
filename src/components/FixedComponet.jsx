import { Grid } from '@mui/material'
import MainHeader from './MainHeader'
import Navbar from './Navbar'
import DashBordCards from './DashBordCards'

const FixedComponet = () => {
  return (
    <Grid container>
      <Grid item xs={0.7}>
        <Navbar />
      </Grid>
      <Grid
        item
        xs={11.3}
        borderRadius={'0 25px 25px 0'}
        // border={'2px solid black'}
      >
        <MainHeader />
        <DashBordCards />
      </Grid>
    </Grid>
  )
}
export default FixedComponet
