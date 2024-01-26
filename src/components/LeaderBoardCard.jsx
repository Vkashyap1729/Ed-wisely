import { useState } from 'react'

import CustomCard from './CustomCard'
import { Skeleton, Stack, Typography, Drawer, IconButton } from '@mui/material'
import LeaderRanking from './LeaderRanking'
import LeaderBordButton from '../assets/LeaderBordButton'

const LeaderBoardCard = ({ width = '100%', height = '100%' }) => {
  // console.log(data, '--> LeaderBoardCard')
  const data = [
    {
      id: 1234,
      name: 'Maharram Hasanli',
      percentage: 65.7,
      profile_pic:
        'https://edwisely-profile-v2.s3.amazonaws.com/profile/EDS3/158746378221920200421092750.jpg',
      rank: 12,
    },
    {
      id: 1235,
      name: 'Virat Kohli',
      percentage: 98,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 1,
    },
    {
      id: 1236,
      name: 'Rohit Sharma',
      percentage: 97.5,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 2,
    },
    {
      id: 1237,
      name: 'MS Dhoni',
      percentage: 95.8,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 3,
    },
    {
      id: 1238,
      name: 'Rahul Dravid',
      percentage: 94.2,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 4,
    },
    {
      id: 1239,
      name: 'Sachin Tendulkar',
      percentage: 93.6,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 5,
    },
    {
      id: 1240,
      name: 'Kapil Dev',
      percentage: 91.5,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 6,
    },
    {
      id: 1241,
      name: 'Sourav Ganguly',
      percentage: 90,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 7,
    },
    {
      id: 1242,
      name: 'AB De Villiers',
      percentage: 89.2,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 8,
    },
    {
      id: 1243,
      name: 'David Warner',
      percentage: 87.6,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 9,
    },
    {
      id: 1244,
      name: 'Chris Gayle',
      percentage: 79,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 10,
    },
    {
      id: 1245,
      name: 'Yuvraj Singh',
      percentage: 71.1,
      profile_pic:
        'https://s3.ap-south-1.amazonaws.com/frndzzy-assetsweb/assets/images/app/default.png',
      rank: 11,
    },
  ]
  const sortedData = data.sort((a, b) => b.percentage - a.percentage)
  const rankedData = sortedData.map((data, index) => ({
    ...data,
    rank: index + 1,
  }))
  const [open, setOpen] = useState(false)

  const handleToggleDrawer = () => {
    setOpen(!open)
  }
  const loggedInUserId = 1234
  const userIndex = rankedData.findIndex((item) => item.id === loggedInUserId)

  if (userIndex !== -1) {
    const user = rankedData.splice(userIndex, 1)[0]
    rankedData.unshift(user)
  }
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ alignItems: 'center' }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'var(--Basic-700, #2E3A59)',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '28px',
          }}
        >
          Leaderboard
        </Typography>
        <IconButton onClick={handleToggleDrawer} alignItems="center">
          <LeaderBordButton />
        </IconButton>
      </Stack>
      <Stack gap={'22px'}>
        {rankedData.slice(0, 6).map((item, index) => (
          <LeaderRanking
            key={index + 1}
            data={item}
            value={item.percentage}
            index={index + 1}
            rank={item.rank}
            col={item.rank < 4 ? '#EDFAEE ' : '#E7EEFE'}
            fontcol={item.rank < 4 ? '#40A846 ' : '#0B58F5'}
          />
        ))}
      </Stack>
      <Drawer anchor="right" open={open} onClose={handleToggleDrawer}>
        <CustomCard width={width} height={height}>
          <Stack gap={'16px'}>
            {rankedData ? (
              <Stack gap={'22px'}>
                {rankedData?.map((item, index) => (
                  <LeaderRanking
                    key={index + 1}
                    data={item}
                    value={item.percentage}
                    index={index + 1}
                    rank={item.rank}
                    col={item.rank < 4 ? '#EDFAEE ' : '#E7EEFE'}
                    fontcol={item.rank < 4 ? '#40A846 ' : '#0B58F5'}
                  />
                ))}
              </Stack>
            ) : (
              <LeaderPlaceHolder />
            )}
          </Stack>
        </CustomCard>
      </Drawer>
    </>
  )
}

export default LeaderBoardCard

const LeaderPlaceHolder = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: '1rem',
          background: (theme) => theme.palette.grey[200],
        }}
      />
    </Stack>
  )
}
