import React from 'react'
interface typeCard {
    id : Number
    title : String
    content : String
    number : String
}

const TypeCard = ({id, title, content, number} : typeCard) => {
  return (
    <div>TypeCard</div>
  )
}

export default TypeCard