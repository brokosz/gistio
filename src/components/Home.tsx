import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>GIST.IO | WRITING FOR HACKERS</title>
      </Helmet>

      <header className="site-header">
        <div className="site-title">GIST.IO</div>
      </header>

      <h1>WRITING FOR HACKERS</h1>
      
      <p>
        There's a scale of permanence to writing on the web. On one end, we have the tweet: 
        brief and ephemeral. On the other end of the scale, we have longform blog writing: 
        unlimited in length and hopefully impervious to the passage of time.
      </p>
      
      <p>
        Sometimes, we want to share a bit of writing that is neither. Maybe we want to write 
        for a specific audience, but don't want to address the people who usually read our blogs. 
        Maybe it's just something that doesn't fit into 280 characters.
      </p>
      
      <p>
        Gist.io is a solution for that, inspired by Mike Bostock's delightful 
        <a href="https://bl.ocks.org" target="_blank" rel="noopener noreferrer">bl.ocks.org</a>
      </p>
      
      <h2>USAGE</h2>
      
      <ol>
        <li>
          <a href="https://gist.github.com" target="_blank" rel="noopener noreferrer">CREATE A GIST</a> 
          on GitHub with a single 
          <a href="https://commonmark.org/help/" target="_blank" rel="noopener noreferrer">MARKDOWN</a>-syntax file.
        </li>
        <li>
          In the URL bar, replace<br/>
          <code>gist.github.com/youruser/abc123…</code> with<br/>
          <code>gist.io/@youruser/abc123…</code>
        </li>
        <li>Enjoy your beautifully-presented writing.</li>
      </ol>

      <h2>TYPOGRAPHY & CUSTOMIZATION</h2>
      
      <p>
        This version of Gist.io features typographic ligatures for improved readability. 
        Notice how certain letter combinations flow together: fi, ff, ffi, th, etc.
      </p>
      
      <div className="ligature-examples">
        <div className="example">fiction • office • affliction • fluffy</div>
        <div className="example">final • often • offline • effortless</div>
        <div className="example">difficult • efficient • certificate</div>
        <div className="example">THE FIVE BOXING WIZARDS JUMP QUICKLY</div>
      </div>
      
      <p>
        Click the settings icon <span className="gear-icon">⚙️</span> in the bottom-right corner to customize the reading experience:
      </p>
      
      <ul>
        <li>Choose between Brutalist, Minimal, and Classic themes</li>
        <li>Toggle between Light, Dark, or System color modes</li>
        <li>Enable or disable typographic ligatures</li>
        <li>Adjust font size for comfortable reading</li>
        <li>Change spacing density to suit your preferences</li>
      </ul>
      
      <div className="meta">
        <p>HAPPY WRITING!</p>
        <p>IDAN GAZIT</p>
        <p>
          <a href="https://gazit.me">WEB</a> / 
          <a href="https://twitter.com/idangazit">TWITTER</a> / 
          <a href="https://github.com/idan">GITHUB</a>
        </p>
      </div>
      
      <footer>
        <p>© 2025 | RAW HTML • ZERO DECORATION • PURE CONTENT</p>
      </footer>
    </div>
  )
}