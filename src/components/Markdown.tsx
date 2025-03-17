import { marked } from 'marked';
import hljs from 'highlight.js';
import '../styles/paraiso-hljs.css';

interface MarkdownProps {
  raw: string;
}

const Markdown = ({ raw }: MarkdownProps) => {
  marked.setOptions({
    highlight: function(code, lang) {
      try {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      } catch (e) {
        console.error(e);
        return hljs.highlight(code, { language: 'plaintext' }).value;
      }
    },
    gfm: true,
    breaks: true,
  });

  const html = marked(raw);

  return (
    <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default Markdown;
