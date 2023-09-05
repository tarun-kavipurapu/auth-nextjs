"use client"
import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  async function handleLogout(){
    try {
      const res = await axios.post('/api/users/logout');
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      Profile
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
