import React from 'react';
import './Section.css'

function Section (props) {
  return (
    <section className={`section ${props.sectionName}`}>
      <h2 className={`section__title ${props.sectionNameTitle}`}>{props.content}</h2>
      {props.children}
  </section>
  )
}

export default Section