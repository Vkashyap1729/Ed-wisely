import { Box, Stack, Typography, InputBase } from '@mui/material'
import Search from '../assets/Search'

const Units = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} my={2}>
      <Stack
        display={'flex'}
        direction="row"
        spacing={4}
        alignItems="center"
        position="relative"
      >
        {[1, 2, 3, 4, 5].map((unit) => (
          <Typography
            key={unit}
            sx={{
              color: '#919EAB',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
              position: 'relative',
              alignItems: 'center',
              '&:hover': {
                color: '#0946C4',
                fontWeight: 600,
                transition:
                  'color 0.3s ease-in-out, font-weight 0.3s ease-in-out',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: '0',
                  width: '55.5px',
                  height: '3px',
                  background: '#0946C4',
                },
              },
              cursor: 'pointer', // Add cursor pointer
            }}
          >
            <Box height="24px">{`Unit ${unit}`}</Box>
          </Typography>
        ))}

        <InputBase
          placeholder="Search topics"
          startAdornment={<Search />}
          sx={{
            borderRadius: '6.64px',
            border: '1px solid #F4F6F8',
            background: '#F4F6F8',
            display: 'flex',
            height: '35px',
            width: '144px',
            padding: '7.589px 9.486px',
            alignItems: 'center',
            gap: '11.383px',
            flexShrink: 0,
          }}
        />
      </Stack>
    </Box>
  )
}

export default Units
