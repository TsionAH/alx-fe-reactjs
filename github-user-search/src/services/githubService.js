import axios from 'axios'

const API_URL = 'https://api.github.com/search/users?q='

async function searchUsers({ username, location, minRepos }) {
  let query = ''

  if (username) query += `${username} in:login `
  if (location) query += `location:${location} `
  if (minRepos) query += `repos:>=${minRepos} `

  const response = await axios.get(`${API_URL}${query.trim()}`)
  return response.data
}

export default { searchUsers }
