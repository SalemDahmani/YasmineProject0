import React from 'react'
import './Content.css'
function Content({ title, array }) {
  return (
    <div className='Container'>
      <h1 className='Title'>{title}</h1>
      <div className='Wrapper'>
        {array.map((product, index) => {
          return (
            <div className='Card' key={index}>
              <img className='Img' src={product.img} alt={product.alt} />
              <div className='Info'>
                <h2 className='jTitle'>{product.name}</h2>
                <p className='Desc'>{product.desc}</p>
                <p className='Price'>{product.price}</p>
                <button className='Button'>{product.button}</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content
