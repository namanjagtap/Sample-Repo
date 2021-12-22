import React, {useState, useEffect} from 'react'
import CharData from './charData'
import './style.css'

export default function App(){
  const [info, setInfo] = useState([]);

  const getData = () => {
    fetch('data.json'
    ,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response=>response.json())
    .then(myJson => setInfo(myJson.articles))
  }
  useEffect(() => {
    getData();
  }, [])
  console.log(info)

  return(
    <div>
      <h1>News Shorts</h1>
      {info.map(item => <CharData item={item} />)}
    </div>
  )
}