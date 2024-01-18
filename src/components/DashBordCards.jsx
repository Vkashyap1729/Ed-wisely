import { Typography } from '@mui/material'

const DashBordCards = () => {
  const styles = {
    color: 'var(--Basic-700, #2E3A59)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '28px',
  }
  return (
    <div>
      <Typography style={styles} marginLeft={2}>
        Dashboard
      </Typography>
    </div>
  )
}
export default DashBordCards
