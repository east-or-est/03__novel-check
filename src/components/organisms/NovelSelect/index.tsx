import React from 'react'
import { Link } from "react-router-dom"

import AxiosNovel from '../../../function/AxiosNovel'


import Headline from '../../atoms/Headline'
import styles from './style.module.scss'


function NovelSelect() {

  const data : any = AxiosNovel({
    path: 'list.json'
  })


  return (
    <>
      { data ?
      <>
        {data.map(( item: any, index: number ) =>
          <section key={index} className={styles.section}>
            <div className={styles.title}>
              <p>{item.sec}</p>
              <Headline
                text={item.title}
              />
            </div>
            <div className={styles.list}>
            { item.sel.length !== 0 ?
            <ul>
              {item.sel.map(( story: any, i: number ) =>
                <li key={index} className={styles.section}>
                  <Link to={`${process.env.PUBLIC_URL}/posts/`} state={{ sel: story.link, first: story.link, list: story.list, loaded: true }}>{story.num}　{story.title}</Link>
                </li>
              )}
            </ul>
            : <p>準備中です</p>
            }
            </div>
          </section>
        )}
      </>
      : false
      }
    </>
  )
}


export default NovelSelect