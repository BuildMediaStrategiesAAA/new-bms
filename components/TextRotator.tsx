import React, { useState, useEffect } from 'react';

interface TextRotatorProps {
  words: string[];
  className?: string;
  interval?: number;
  animationDuration?: number;
}

const TextRotator: React.FC<TextRotatorProps> = ({ 
  words, 
  className,
  interval = 2,
  animationDuration = 0.3
}) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration * 1000);
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [words.length, interval, animationDuration]);

  const currentWord = words[index];
  const nextWord = words[(index + 1) % words.length];

  const easing = 'cubic-bezier(0.44, 0, 0.56, 1)';
  const transition = isAnimating
    ? `transform ${animationDuration}s ${easing}, opacity ${animationDuration}s ${easing}`
    : 'none';

  return (
    <span className={`inline-grid relative overflow-hidden align-top pb-[0.2em] ${className || ''}`}>
      {/* Spacers: Render all words invisible to force container width/height to max word size */}
      {words.map((word, i) => (
        <span 
          key={`spacer-${i}`} 
          className="col-start-1 row-start-1 opacity-0 invisible pointer-events-none select-none whitespace-nowrap" 
          aria-hidden="true"
        >
          {word}
        </span>
      ))}

      {/* Current Word */}
      <span 
        className="col-start-1 row-start-1 whitespace-nowrap absolute left-0 top-0"
        style={{
          transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
          opacity: isAnimating ? 0 : 1,
          transition,
        }}
      >
        {currentWord}
      </span>

      {/* Next Word */}
      <span 
        className="col-start-1 row-start-1 whitespace-nowrap absolute left-0 top-0"
        style={{
          transform: isAnimating ? 'translateY(0)' : 'translateY(100%)',
          opacity: isAnimating ? 1 : 0,
          transition,
        }}
      >
        {nextWord}
      </span>
    </span>
  );
};

export default TextRotator;