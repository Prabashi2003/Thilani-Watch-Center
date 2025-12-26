import { useState } from 'react';

type Props = {
  children: string;
  sentencesToShow?: number;
  className?: string;
};

const ReadMore = ({ children, sentencesToShow = 2, className }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const text = String(children).trim();
  const sentences = text.split(/(?<=[.!?])\s+/);
  const isTruncated = sentences.length > sentencesToShow;
  const preview = isTruncated ? sentences.slice(0, sentencesToShow).join(' ') : text;

  return (
    <p className={className}>
      {expanded ? text : preview}
      {isTruncated && (
        <button
          onClick={() => setExpanded((s) => !s)}
          className="text-gray-500 ml-2 cursor-pointer"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </p>
  );
};

export default ReadMore;
