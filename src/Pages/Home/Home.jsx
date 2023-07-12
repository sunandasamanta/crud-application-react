// import React from 'react'
import AnyButton from '../../components/Button/AnyButton'
import { createElement } from 'react';

export default function Home() {
  // useEffect(() => {

  // }, [])
  const changePage = () => {
    console.log('changePage');
    const elem = createElement('div', { className: "text-4xl text-black" }, 'createElement');
    return elem;
  }
  return (
    <div>
      <AnyButton
        buttonText="SignUp"
        changePage={changePage}
      />
    </div>
  )
}
