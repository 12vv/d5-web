"use client";
import { useEffect, useState } from 'react'
import { classNames } from '../utils';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-stone-100 text-black hover:bg-stone-100 focus:bg-stone-100 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
        </svg>

      </button>
    </div>
  )
}