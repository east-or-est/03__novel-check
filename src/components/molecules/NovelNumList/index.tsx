import React from 'react'
import { useNavigate } from "react-router-dom"

import styles from './style.module.scss'


interface NovelNumListProps {
  firstSel: string | null;
  groupSel: any;
}

interface NovelNumListMapProps {
  num: string;
  firstImage: string;
}


function NovelNumList({ firstSel, groupSel } : NovelNumListProps) {

  const navigate = useNavigate();

  const handleClickFirst = () => {
    navigate(`${process.env.PUBLIC_URL}/posts/`,{state: { sel: firstSel, first: firstSel, list: groupSel, loaded: true } })
  }

  const handleClickSel = ( num: string ) => {
    navigate(`${process.env.PUBLIC_URL}/posts/${num}/`,{state: { sel: num, first: firstSel, list: groupSel, loaded: true } })
    
  }

  return (
    <ul className={styles.list}>
      <li>
        <button onClick={() => handleClickFirst() }>
          <img src={`${process.env.PUBLIC_URL}/novel/${firstSel}/img/001-01.jpg`} alt="" />
        </button>
      </li>
      {groupSel.map(( item: NovelNumListMapProps, index: number ) =>
        <li key={index}>
          <button onClick={() => handleClickSel( item.num as string ) }>
            <img src={`${process.env.PUBLIC_URL}/novel/${item.num}/img/${item.firstImage}`} alt="" />
          </button>
        </li>
      )}
    </ul>
  )
}


export default NovelNumList