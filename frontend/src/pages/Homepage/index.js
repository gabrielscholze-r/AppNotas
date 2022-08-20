import React, { useContext } from 'react'
import Header from '../../components/Header'
import MyNotes from '../../components/MyNotes.js'
import NewNote from '../../components/NewNote'
import Content from '../../config/context/Content'
import './index.css'
export default function Homepage() {
  const [content, setContent] = useContext(Content)
  return (
    <div className="Homepage">
        <Header/>
        {{
          0: <MyNotes/>,
          1: <NewNote/>

        }[content]}
    </div>
  )
}
