import user from './user.png'
const MainHeaderImage = () => {
  const styles = {
    width: '50px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '24px',
    background: `url(${user}), lightgray 50% / cover no-repeat, #C4C4C4`,
    marginRight: '40px',
  }

  return <img src={user} alt="" style={styles} marginR />
}

export default MainHeaderImage
