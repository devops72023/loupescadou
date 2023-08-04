// landind section animations 
const opacity=[0, 1, 1, 1, 1, 1, 1, 0.5];
const textFramesX=[0, 10, 10, 10, 10, 10, 10, -1300];
const transition= {repeat: Infinity, duration: 10};
export const heroImageAnimation={
  x:[800, 0, 0, 0, 0, 0, 0, 800],
  opacity,
  transition,
}
export const loadingAnimation={
  opacity,
  transition,
}

export const heroTextAnimation={
  x:textFramesX,
  opacity,
  transition
}
export const heroDescriptionAnimation={
  x:textFramesX,
  opacity,
  transition:{
    ...transition,
    delay: 0.5,
  },
}
export const btnAnimation={
  x:textFramesX,
  opacity,
  transition:{
    ...transition,
    delay: 0.6,
  },
}

// history section animations
const fadeConsts={ opacity:[0, 1], transition:{ duration:0.5} }
export const leftFadeIn={
    x:[-300, 0],
    ...fadeConsts
}
export const rightFadeIn={
    x:[300, 0],
    ...fadeConsts
}
export const bottomFadeIn={
    y:[100, 0],
    ...fadeConsts
}