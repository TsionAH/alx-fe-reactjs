import axios from 'axios'

const token = import.meta.env.VITE_APP_GITHUB_API_KEY // your .env value
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: token ? { Authorization: `token ${token}` } : undefined,
})

export default {
  // search users (returns the full response.data object from GitHub)
  searchUsers: async (q) => {
    const res = await api.get('/search/users', { params: { q } })
    return res.data
  },

  // get single user
  getUser: async (username) => {
    const res = await api.get(`/users/${username}`)
    return res.data
  },

  // get repos for a user (optional)
  getUserRepos: async (username) => {
    const res = await api.get(`/users/${username}/repos`)
    return res.data
  },
}
