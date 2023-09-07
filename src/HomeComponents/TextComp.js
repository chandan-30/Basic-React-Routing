import React from 'react'
import { useContext } from 'react';
import myContext from '../context';
import './style.css';

export default function TextComp() {
    const value = useContext(myContext);
  return (
    <div className='contextDiv'>This is the text from context: {value}</div>
  )
}
