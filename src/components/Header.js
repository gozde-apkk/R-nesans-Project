import React, {  useState } from 'react'
import { useDispatch } from "react-redux";
import {number} from "../redux/countSlice"

const Header = () => {

  
  const [count, setCount] = useState();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCount(value);
    dispatch(number(value));
    console.log(count);
  };
  return (
    <div className='header'>
      <h1>KULLANICILAR</h1>
      <form>
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        placeholder="Enter number "
      />
      </form>
    </div>
  )
}

export default Header
