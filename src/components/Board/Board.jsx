import React, { useState, useEffect } from 'react'

import classes from './styles.module.css'

export const Board = (props) => {
  const { className, ...otherProps } = props
  const [newClass, setNewClass] = useState(`${classes.field}`)
  const [marked, setMarked] = useState([])
  const [info, setInfo] = useState('')
  const [flag, setFlag] = useState(true)
  const gameBoard = [...new Array(7 * 6)]
  // console.log(gameBoard)

  const changeClass = (e, index) => {
    if (e.target.className !== '_field_1raj2_11 _red_1raj2_24') {
      e.target.className = `${classes.field} ${classes.red}`
      setMarked([...marked, index])
    } else {
      null
    }

    console.log(marked)
  }

  

  useEffect(() => {
    marked.sort().map(
      (el, i, a) => {
        if (
          (a[i] === a[i + 1] - 1 &&
            a[i + 1] === a[i + 2] - 1 &&
            a[i + 2] === a[i + 3] - 1) ||
          (a[i] === a[i - 1] - 1 &&
            a[i - 1] === a[i - 2] - 1 &&
            a[i - 2] === a[i - 3] - 1)
        ) {
          setInfo('Wygrana')
          setFlag(false)
          setTimeout(()=>{
            window.location.reload();
          },1500)
        }
        
      },
      [marked]
    )
    
  })
  
  
 

  return (
    <>
     
      <h2>{info}</h2>
      <div
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        {...otherProps}
      >
        {flag
          ? gameBoard &&
            gameBoard.map((field, index) => {
              return (
                <div
                  className={newClass}
                  key={index}
                  onClick={(e) => changeClass(e, index)}
                >
                  {index}
                </div>
              )
            })
          : gameBoard.map((field, index) => {
              return (
                <div
                  className={classes.end}
                  key={index}
                ></div>
              )
            })}
      </div>
    </>
  )
}
export default Board
