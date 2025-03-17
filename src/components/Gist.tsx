import React from 'react'
import '../styles/paraiso-hljs.css'
import { Helmet } from 'react-helmet-async'
import Markdown from './Markdown'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function useFetchGist(user: string, id: string) {
  // Ensure user doesn't have @ prefix from the URL
  const cleanUser = user.startsWith('@') ? user.substring(1) : user;
  
  // Use CORS proxy for development, direct API call for production
  const isProduction = import.meta.env.PROD;
  let url = '';

  if (isProduction) {
    // In production with Amplify hosting
    url = `https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/${cleanUser}/${id}/raw`;
  } else {
    // Local development
    url = `https://gist.githubusercontent.com/${cleanUser}/${id}/raw`;
  }
  
  console.log('Fetching gist from URL:', url);
  return useFetch<string>(url)
} 

type GistParams = {
  user: string
  id: string
}

const Gist = () => {
  const { user, id } = useParams<GistParams>()
  
  if (!user || !id) {
    return (
      <div className="container">
        <div className="error">INVALID GIST PARAMETERS</div>
      </div>
    )
  }
  
  const { data: raw, isLoading, error } = useFetchGist(user, id)
  
  if (isLoading) {
    return (
      <div className="container">
        <div className="loading">LOADING...</div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="container">
        <div className="error">ERROR LOADING GIST: {error.message}</div>
        <p>This may be due to CORS restrictions. Try using a CORS proxy or viewing the gist directly on GitHub.</p>
        <p><a href={`https://gist.github.com/${user.replace('@', '')}/${id}`} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
      </div>
    )
  }
  
  return (
    <div className="container">
      <Helmet>
        <title>GIST.IO | @{user}/{id}</title>
      </Helmet>

      <header>
        <div className="site-header">
          <Link to="/" className="site-title">GIST.IO</Link>
        </div>
        <div className="gist-info">
          <a href={`https://github.com/${user.replace('@', '')}/`} target="_blank" rel="noopener noreferrer">@{user.replace('@', '')}</a>
          /
          <a href={`https://gist.github.com/${user.replace('@', '')}/${id}`} target="_blank" rel="noopener noreferrer">{id}</a>
        </div>
      </header>

      <main className="content">
        {raw && <Markdown raw={raw} />}
      </main>
      
      <footer>
        <p>GIST.IO | WRITING FOR HACKERS | ZERO SETUP | PUBLISH IN SECONDS</p>
      </footer>
    </div>
  )
}

export default Gist
