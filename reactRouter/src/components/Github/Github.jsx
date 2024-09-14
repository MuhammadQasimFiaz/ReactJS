// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/muhammadqasimfiaz')
  //   .then(response => response.json())
  //   .then(data => {
  //     setdata(data)
  //   })
  // }, [])

  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Github Image" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/muhammadqasimfiaz')
  return response.json()
}
