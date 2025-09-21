import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard({ user }) {
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'center', padding: 12, border: '1px solid #eee',
      borderRadius: 8
    }}>
      <img src={user.avatar_url} alt={user.login} width="64" height="64" style={{ borderRadius: 8 }} />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0 }}>{user.login}</h3>
        <div style={{ marginTop: 6 }}>
          <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
          {' • '}
          <Link to={`/user/${user.login}`}>Details</Link>
        </div>
      </div>
    </div>
  )
}
