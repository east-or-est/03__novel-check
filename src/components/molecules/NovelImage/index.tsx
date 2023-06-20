import React from 'react'

import styles from './style.module.scss'


interface NovelImageProps {
  image: string;
  next: boolean;
  beforeImage?: string;
  afterImage?: string;
  sel: string | null;
  animate: boolean;
  count: number;
  startSel?: string | null;
}


function NovelImage({ image, next, beforeImage = '', afterImage = '', sel, animate, count, startSel = '' } : NovelImageProps) {

  const imageSel = (value: string): string => {
    switch(value) {
      case 'start' :
        return `${process.env.PUBLIC_URL}/novel/${sel}/img/${value}.png`
      case 'noimage' :
        return `${process.env.PUBLIC_URL}/novel/noimage.png`
      case 'dark' :
        return `${process.env.PUBLIC_URL}/novel/noimage.png`
      case 'light' :
        return `${process.env.PUBLIC_URL}/novel/light.png`
      default :
        return `${process.env.PUBLIC_URL}/novel/${sel}/img/${value}.jpg`
    }
  }

  const path = imageSel(image)
  const beforePath = imageSel(beforeImage)
  const afterPath = imageSel(afterImage)

  return (
    <div className={styles.group}>
      { count === 0 && next ? <img data-animate={animate} className={styles.before} src={`${process.env.PUBLIC_URL}/novel/${sel}/img/start.png`} alt="" /> : false }
      { beforeImage !== '' && next ? <img data-animate={animate} className={styles.before} src={beforePath} alt="" /> : false }
      <img src={path} alt="" />
      { afterImage !== '' && next === false ? <img data-animate={animate} className={styles.after} src={afterPath} alt="" /> : false }
      { image === 'start' && next === false ? <img data-animate={animate} className={styles.after} src={`${process.env.PUBLIC_URL}/novel/${sel}/img/${startSel}.jpg`} alt="" /> : false }
    </div>
  )
}


export default NovelImage