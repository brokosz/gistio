import React from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js'

// Configure marked renderer
marked.setOptions({
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-',
  gfm: true,
  breaks: false
});

interface MarkdownProps {
  raw: string;
}

const Markdown: React.FC<MarkdownProps> = ({ raw }) => {
  // Memoize the parsed HTML to avoid unnecessary re-renders
  const html = React.useMemo(() => {
    return { __html: marked(raw) };
  }, [raw]);

  return <div dangerouslySetInnerHTML={html} />
}

export default Markdown