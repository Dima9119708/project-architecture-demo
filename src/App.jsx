import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from './M.module.css'

function App() {
  const [elements, setElements] = useState(false)

  return (
      <>
         <div className={style.elem_1}>
            <div className={style.elem_2}>
                <div className={style.elem_3}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores aut, distinctio eveniet fugit hic molestias officiis optio praesentium
                    quaerat repellat reprehenderit repudiandae soluta sunt, tempora veniam voluptatem voluptatum?
                </div>
            </div>
         </div>


          <button onClick={() => {
              document.body.parentNode.setAttribute('data-theme', 'dark')
              document.documentElement.style.setProperty('--theme', 'dark')
          }}>
              Dark
          </button>
          <button onClick={() => {
              document.body.parentNode.setAttribute('data-theme', 'white')
              document.documentElement.style.setProperty('--theme', 'white')
          }}>
              white
          </button>
          <button onClick={() => {
              document.body.parentNode.setAttribute('data-theme', 'purple')
              document.documentElement.style.setProperty('--theme', 'purple')
          }}>
              purple
          </button>
      </>
  )
}

export default App
