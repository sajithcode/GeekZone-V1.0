import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animated, we can optionally stop observing
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

// Animation variants
export const fadeInUp = {
  initial: "opacity-0 translate-y-8",
  animate: "opacity-100 translate-y-0",
  transition: "transition-all duration-700 ease-out",
};

export const fadeInLeft = {
  initial: "opacity-0 -translate-x-8",
  animate: "opacity-100 translate-x-0",
  transition: "transition-all duration-700 ease-out",
};

export const fadeInRight = {
  initial: "opacity-0 translate-x-8",
  animate: "opacity-100 translate-x-0",
  transition: "transition-all duration-700 ease-out",
};

export const scaleIn = {
  initial: "opacity-0 scale-95",
  animate: "opacity-100 scale-100",
  transition: "transition-all duration-700 ease-out",
};

export const staggerContainer = {
  animate: "space-y-4",
  transition: "transition-all duration-300",
};
