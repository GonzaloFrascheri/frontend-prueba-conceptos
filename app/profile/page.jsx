'use client'

import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import Spinner from '../components/Spinner'

const page = () => {

  const {user} = UserAuth() 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className='p-4'>
      { loading ? (
        <Spinner/>
      ) : user ? (
        <p>Bienvenido, {user.displayName}</p>
      ) : (
        <p>Debes de iniciar sesión para ver esta página, es privada.</p>
      )}
        
    </div>
  )
}

export default page
