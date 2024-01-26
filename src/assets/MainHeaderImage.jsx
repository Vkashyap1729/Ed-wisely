import user from './user.png'
const MainHeaderImage = ({ url = user }) => {
  const styles = {
    width: '50px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '24px',
    background: `url(${url}), lightgray 50% / cover no-repeat, #C4C4C4`,
    marginRight: '40px',
  }

  return <img src={user} alt="" style={styles} marginR />
}

export default MainHeaderImage
