import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const User = () =>{
    const [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3006')
        .then((res)=>{
            setUser(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

    const deleteHandle = (id)=>{
        axios.delete('http://localhost:3006/deleteUser/'+id)
        .then(result=>{
            console.log('User is deleted');
            window.location.reload();
        });
    };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success mb-3'>Add +</Link>
            <table className='table '>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                      user &&  user.map((item)=>(
                            <tr>
                                <td className=''>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>
                                    <Link to={`/update/${item._id}`} className='btn btn-success'>Edit</Link> &nbsp;
                                    <Link className='btn btn-danger' onClick={(e)=>deleteHandle(item._id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default User;