import axios from 'axios'

const Index = () => {
  axios.get('/api/players').then((data) => {
    console.log(data)
  })
  
  return <div>
    <h1>Home page</h1>
  </div>
}

export default Index