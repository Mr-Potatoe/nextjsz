import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
