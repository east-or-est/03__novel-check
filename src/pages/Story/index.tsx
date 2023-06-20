import React from 'react'
import { useLocation } from "react-router-dom"


import NovelPost from '../../components/organisms/NovelPost';
import styles from '../style.module.scss'


function PageStory() {

  const location = useLocation();

  type SelState = { sel: string, first: string, list: string; }
  const selstate = location.state as SelState;


  return (
    <div className={styles.content}>
      <NovelPost
        state={selstate}
      />
    </div>
  );
}

export default PageStory