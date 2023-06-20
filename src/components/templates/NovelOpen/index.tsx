import React from 'react'
import { Link } from "react-router-dom"

import Counter from '../../organisms/Counter'
import NovelNumList from '../../molecules/NovelNumList'


interface NovelOpenProps {
  data: any;
  sel: string | null;
  first: string | null;
  list: any;
}


function NovelOpen({ data, sel, first, list } : NovelOpenProps) {

  return (
    <>
      <Counter pageAll={data.length} data={data} sel={sel} />
      <NovelNumList
        firstSel={first}
        groupSel={list}
      />
      <div className="tc">
        <p>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            ＞ TOPに戻る。
          </Link>
        </p>
      </div>
    </>
  )
}


export default NovelOpen