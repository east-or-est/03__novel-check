import React from 'react'

import AxiosNovel from '../../../function/AxiosNovel'
import NovelOpen from '../../templates/NovelOpen'


interface NovelPostProps {
  state: null | NovelPostPropsState;
}

interface NovelPostPropsState {
  sel: string | null;
  first: string | null;
  list: any;
}


function NovelPost({ state } : NovelPostProps) {

  const defList = [
    {
      "num": "ms01_001-2",
      "firstImage": "037-01.jpg"
    },
    {
      "num": "ms01_001-3",
      "firstImage": "066-01.jpg"
    },
    {
      "num": "ms01_001-4",
      "firstImage": "099-01.jpg"
    }
  ];

  const data : any = AxiosNovel({
    path: state !== null ? state.sel + '/novel.json' : 'ms01_001/novel.json'
  })

  return (
    <div>
      {
        data ?
          state !== null ?
          <>
            <NovelOpen
              data={data}
              sel={state.sel}
              first={state.first}
              list={state.list}
            />
          </>
          :
          <>
            <NovelOpen
              data={data}
              sel="ms01_001"
              first="ms01_001"
              list={defList}
            />
          </>
        :false
      }
    </div>
  )
}


export default NovelPost