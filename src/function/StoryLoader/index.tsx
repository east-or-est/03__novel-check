import React from 'react'
import { useLocation } from "react-router-dom"

import AxiosNovel from '../../function/AxiosNovel'


function StoryLoader() {

  const location = useLocation();

  type SelState = { sel: string, first: string, list: string, loaded: boolean }
  const selstate = location.state as SelState;


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
    path: selstate !== null ? selstate.sel + '/novel.json' : 'ms01_001/novel.json'
  })


  return data ? data : false;
}


export default StoryLoader