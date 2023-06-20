import React from 'react'

import NovelFrame from '../../organisms/NovelFrame'
import NovelImage from '../../molecules/NovelImage'

import styles from './style.module.scss'


interface NovelDataProps {
  data: any;
  count: number;
  sel: string | null;
  next: boolean;
  animate: boolean;
}


function NovelData({ data, count, sel, next, animate } : NovelDataProps) {

  return (
    <div className={styles.content}>
      <div className={styles.image}>
      { typeof data[count].image !== "undefined" ?
        <>
          {( () => {
            switch (count) {
              case 0 :
                return(
                  <NovelImage
                    sel={sel}
                    next={next}
                    image={data[count].image}
                    afterImage={data[count + 1].image}
                    animate={animate}
                    count={count}
                  />
                );
              case data.length - 1 :
                return(
                  <NovelImage
                    sel={sel}
                    next={next}
                    image={data[count].image}
                    beforeImage={data[count - 1].image}
                    animate={animate}
                    count={count}
                  />
                );
              default :
                return(
                  <NovelImage
                    sel={sel}
                    next={next}
                    image={data[count].image}
                    beforeImage={data[count - 1].image}
                    afterImage={data[count + 1].image}
                    animate={animate}
                    count={count}
                  />
                );
            }
          }) ()}
        </>
      : false
      }
      </div>
      <div className={styles.desc}>
        { typeof data[count].novel !== "undefined" ?
          typeof data[count].name === "undefined" ?
          <NovelFrame
            novel={data[count].novel}
            animate={animate}
          />
          :
            <NovelFrame
              novel={data[count].novel}
              name={data[count].name}
              animate={animate}
            />
        : false
        }
      </div>
    </div>
  )
}


export default NovelData