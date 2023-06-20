import React from 'react'


interface HeadlineProps {
  text: string;
  Component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}


function Headline({ text, Component = 'h2' } : HeadlineProps) {
  return (
    <>
      <Component>
        {text}
      </Component>
    </>
  )
}


export default Headline