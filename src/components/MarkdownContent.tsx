import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  // Check if this is for light text (yellow/white background)
  const isLightText = className.includes('text-yellow') || className.includes('text-red-100') || className.includes('text-white');

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        // Heading levels
        h1: ({ ...props }) => <h1 className={`text-3xl font-bold mb-4 mt-6 ${isLightText ? 'text-inherit' : ''}`} {...props} />,
        h2: ({ ...props }) => <h2 className={`text-2xl font-bold mb-3 mt-5 ${isLightText ? 'text-inherit' : ''}`} {...props} />,
        h3: ({ ...props }) => <h3 className={`text-xl font-bold mb-2 mt-4 ${isLightText ? 'text-inherit' : ''}`} {...props} />,
        h4: ({ ...props }) => <h4 className={`text-lg font-bold mb-2 mt-3 ${isLightText ? 'text-inherit' : ''}`} {...props} />,

        // Paragraphs
        p: ({ ...props }) => <p className={`mb-3 leading-relaxed ${isLightText ? 'text-inherit' : ''}`} {...props} />,

        // Lists
        ul: ({ ...props }) => <ul className={`list-disc list-inside mb-3 space-y-1 ${isLightText ? 'text-inherit' : ''}`} {...props} />,
        ol: ({ ...props }) => <ol className={`list-decimal list-inside mb-3 space-y-1 ${isLightText ? 'text-inherit' : ''}`} {...props} />,
        li: ({ ...props }) => <li className={`ml-2 ${isLightText ? 'text-inherit' : ''}`} {...props} />,

        // Text formatting
        strong: ({ ...props }) => <strong className={`font-bold ${isLightText ? 'text-inherit' : 'text-gray-900'}`} {...props} />,
        em: ({ ...props }) => <em className={`italic ${isLightText ? 'text-inherit' : ''}`} {...props} />,

        // Code
        code: ({ ...props }) => {
          const { inline } = props as { inline?: boolean };
          return inline ? (
            <code className={`px-1.5 py-0.5 rounded text-sm font-mono ${isLightText ? 'bg-white/20 text-inherit' : 'bg-gray-100 text-red-600'}`} {...props} />
          ) : (
            <code className={`block p-3 rounded-lg text-sm font-mono overflow-x-auto mb-3 ${isLightText ? 'bg-white/20 text-inherit' : 'bg-gray-100'}`} {...props} />
          );
        },

        // Blockquote
        blockquote: ({ ...props }) => (
          <blockquote className={`border-l-4 pl-4 italic my-3 ${isLightText ? 'border-yellow-300 text-inherit' : 'border-red-500 text-gray-700'}`} {...props} />
        ),

        // Links
        a: ({ ...props }) => (
          <a className={`underline font-medium ${isLightText ? 'text-yellow-200 hover:text-yellow-100' : 'text-red-600 hover:text-red-700'}`} target="_blank" rel="noopener noreferrer" {...props} />
        ),

        // Horizontal rule
        hr: ({ ...props }) => <hr className={`my-6 ${isLightText ? 'border-yellow-300' : 'border-gray-300'}`} {...props} />,
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
