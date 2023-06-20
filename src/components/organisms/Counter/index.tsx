import React from 'react'
import {
  useState, useEffect 
} from 'react'


import NovelData from '../../templates/NovelData'
import NovelImage from '../../molecules/NovelImage'

import styles from './style.module.scss'


interface CounterProps {
  pageAll?: number;
  data: any;
  sel: string | null;
}


function Counter( { pageAll = 0, data, sel } : CounterProps ) {

  const [ count, setCount ] = useState(0)
  const [ error, setError ] = useState(false)
  const [ next, setNext ] = useState(true)
  const [ animate, setAnimate ] = useState(false)


  useEffect(() => {
    setCount(0)
  },[sel])


  const handlePlus = () => {
    if (count < pageAll) {
      setError(false)
      setCount(count + 1)
      setNext(true)
      handleAnimate()
    }
    else {
      setError(true)
    }
  }

  const handleMinus = () => {
    if (count > 0) {
      setError(false)
      setCount(count - 1)
      setNext(false)
      handleAnimate()
    }
    else {
      setError(true)
    }
  }

  const handleAnimate = () => {
    setAnimate(false)
    window.setTimeout(() => {
      setAnimate(true);
    }, 50)
  }

  const handleErrorClose = () => {
    setError(false)
  }

  return (
    <>
      { count > 0 ?
        <NovelData
          data={data}
          count={count - 1}
          sel={sel}
          next={next}
          animate={animate}
        />
        :
        <div className={styles.start}>
          <NovelImage
            sel={sel}
            next={next}
            image='start'
            animate={animate}
            count={count - 1}
            startSel={data[0].image}
          />
        </div>
      }
      <div className={styles.counter}>
        <ul>
          <li><button onClick={() => handleMinus()}>←</button></li>
          <li><button onClick={() => handlePlus()}>→</button></li>
        </ul>
        <p>{ count } Page</p>
      </div>
      { error ? 
        <div className={styles.error} onClick={() => handleErrorClose()}>
          <div>
          { count > 0 ?
              <p>このページはここまでです。</p>
            :
              <p>このページはこれ以上戻れません。</p>
          }
          <p>＜画面をクリックして閉じる＞</p>
        </div>
      </div>
      : false }
    </>
  )
}


export default Counter