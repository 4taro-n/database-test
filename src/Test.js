import React,{useState, useEffect} from 'react';
import * as api from './firebase/api';

function Test() {
//     const [news, setNews] = useState([]);
    // 取得したデータをstateで管理できるように格納
    const fetch = async() => {
        const data = await api.getNews();
        // await setNews(data);
        // await console.log(data[0].content);
        // await console.log(example);
        await api.addNews("d");
        
  }
  
  // 起動時に発動
  useEffect (()=> {
    fetch();
    //api.addNews("c");
  },[])
  return (
    <div>test</div>
  )
}

export default Test;