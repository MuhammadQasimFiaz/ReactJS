import { useEffect } from 'react'
import './App.css'
import { generateToken, messaging } from './notifications/firebase'
import { onMessage } from 'firebase/messaging'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  useEffect( () => {
    generateToken()
    onMessage(messaging, (payload) => {
      console.log(payload)
      toast(payload.notification.body)
    })
  }, [] )

  return (
    <>
      <h1>Push Notifications</h1>
      <Toaster position='top-right' />
    </>
  )
}

export default App
