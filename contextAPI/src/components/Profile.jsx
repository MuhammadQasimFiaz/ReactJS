import {useContext} from 'react'
import userContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(userContext)
  // if (!user) return <div>please login</div>
  return <div>{user && user.username ? `Welcome ${user.username}` : 'Please Login'}</div>
}

export default Profile
