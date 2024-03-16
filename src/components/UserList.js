



import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser';
import { useSelector } from "react-redux";
import "../style/userlist.css";

const UserList = () => {
  const [user , setUser] = useState();
  const {userCount} = useSelector((state) => state.count);
  console.log(userCount);

  useEffect(() => {
      const getUser = async() => {
        try{
            const response = await axios.get(`https://randomuser.me/api?results=${userCount}`);
            setUser(response?.data.results);
            console.log(response.data.results);
            console.log(user);
        }catch(err){
               console.log(err);
        }
      }
      getUser();
    }, [userCount])


  return (
    <div className='userList'>
      {user && user.map((user, index) => <SingleUser key={index} user={user} />)}
    </div>
  )
}

export default UserList
