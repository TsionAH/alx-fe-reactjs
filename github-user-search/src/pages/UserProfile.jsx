import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import github from '../services/github'

export default function UserProfile() {
  const { username } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    github.getUser(username)
      .then(data => setUser(data))
      .catch(err => setError(err?.response?.data?.message || err.message))
      .finally(() => setLoading(false))
  }, [username])

  if (loading) return <p>Loading user…</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (!user) return <p>User not found</p>

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <img src={user.avatar_url} alt={user.login} width="120" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} • Following: {user.following}</p>
      <p>Public repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">Open on GitHub</a>
    </div>
  )
}
