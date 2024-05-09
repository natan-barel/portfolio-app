import React from "react"

const Card = (props) => {
  return (
    <div className='box'>
      <div className='title_content'>
        <img src={props.logo} className="card-logo"></img>
        <div className='title'>
          <h2>{props.role}</h2>
          <h3>{props.title}</h3>
          <h3>{props.description}</h3>
          <span>{props.year}</span>
        </div>
      </div>
      <hr />
      {props?.desc &&
        <p>{props.desc}</p>
      }
      {props.list?.length > 0 &&
        <ul className="resume-list">
          {props.list?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Card
