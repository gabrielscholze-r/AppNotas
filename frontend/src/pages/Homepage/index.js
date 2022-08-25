import React, { useContext } from 'react'
import Header from '../../components/Header'
import MyNotes from '../../components/MyNotes.js'
import NewNote from '../../components/NewNote'
import Note from '../../components/Note'
import Content from '../../config/context/Content'
import './index.css'
export default function Homepage() {
  const [content, setContent] = useContext(Content)
  return (
    <div className="Homepage">
        <Header/>
        {{
          0: <MyNotes/>,
          1: <NewNote/>,
          2: <Note/>

        }[content]}
    </div>
  )
}
