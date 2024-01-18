import { Grid, Box } from '@mui/material'
import MainHeader from './MainHeader'
import Navbar from './Navbar'
import DashBordCards from './DashBordCards'
import { Margin } from '@mui/icons-material'

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
        <Box marginTop={'15px'} height={'1px'} bgcolor={'#DFE3E8'}></Box>
        <DashBordCards />
      </Grid>
    </Grid>
  )
}
export default FixedComponet
