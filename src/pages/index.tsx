import React from 'react'
import NovelSelect from '../components/organisms/NovelSelect'

import styles from './style.module.scss'


function NovelLink() {
  return (
    <div className={styles.content}>
      <NovelSelect />
    </div>
  );
}

export default NovelLink