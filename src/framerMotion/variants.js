export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      scale: direction ? 0.95 : 1
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", 
        stiffness: 100,
        damping: 10,
        mass: 0.5,
        delay: delay,
        ease: [0.17, 0.67, 0.83, 0.67] 
      }
    },
    
    exit: {
      y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };
};

export const slideIn = {
  hidden: { x: -100, opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.2
    }
  }
};

export const popIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150
    }
  }
};