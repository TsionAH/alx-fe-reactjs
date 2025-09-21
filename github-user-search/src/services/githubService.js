import axios from 'axios'

const API_URL = 'https://api.github.com/users/'

async function fetchUserData(username) {
  const response = await axios.get(`${API_URL}${username}`)
  return response.data
}

export default { fetchUserData }
