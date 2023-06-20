import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import styles from './style.module.scss'


interface NovelFrameProps {
  novel: string[];
  name?: string;
  typeSpeed?: number;
  animate: boolean;
}


function NovelFrame({ novel, name = '', animate, typeSpeed = 40 } : NovelFrameProps) {

  return (
    <div className={styles.content}>
      { name !== '' ?
        <div className={styles.name}>
          <p>{ name }</p>
        </div>
        : false
      }
      { animate !== false ?
        <div className={styles.novel}>
          <p>
            <Typewriter
              words={novel}
              cursor
              cursorStyle='_'
              cursorBlinking={true}
              typeSpeed={typeSpeed}
            />
          </p>
        </div>
        : false
      }
    </div>
  )
}


export default NovelFrame