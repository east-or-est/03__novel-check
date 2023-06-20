import {
  useState,
  useEffect
} from 'react'
import { AxiosRequestConfig } from 'axios'
import axios from '../../lib/axiosClient'


interface AxiosNovelProps {
  path: string;
}


function AxiosNovel({ path } : AxiosNovelProps) {

  const [ novel, setNovel ] = useState({
    isLoad: false,
    data: []
  });

  useEffect(() => {
    const options: AxiosRequestConfig = {
      url: '/' + path
    }
  
    async function fetchData() {
      const response = await axios(options);
      setNovel({
        isLoad: true,
        data: response.data
      })
    }
    fetchData();
  },[path])


  return novel.isLoad ? novel.data : false;
}


export default AxiosNovel