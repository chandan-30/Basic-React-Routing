import React from 'react'
import { useState } from 'react';
import postData from './utils/post';

function Express() {

    const [data, setData] = useState(null);
    const [formData, setFormData] = useState('');
    const [result, setResult] = useState('');

    const clickHandler = async () => {
        const res = await fetch('http://localhost:8080/cities');
        const _data = await res.json();
        if ( res.ok ) {
            setData( _data );
        }
    }

    const changeHandler = (e) => {
        setFormData( e.target.value );
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if ( postData(formData) ) {
            setResult("Data Saved Succesfully");
            console.log(formData);
        }
    }
  return (
    <div>
        <button onClick={clickHandler} >Click me to get API data</button>
        { data && (
            <h2> Citites: </h2>
        )}
        <ul>
            {
                data && data.map( ( item, index) => <li key={index}> {item.name} </li>)
            }
        </ul>

        <h1> Post A Form Data to api</h1>
        <form>
            <input type="text" onChange={changeHandler} />
            <button type="submit" onClick={submitHandler}>Submit</button>
        </form>
        { result && <p> {result }</p>}
    </div>
  )
}

export default Express