import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <div className="card-head">
            <div>{props.title}</div>
            <div className={props.categ}>{props.categ}</div>
        </div>
        <div className="card-body">
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Card