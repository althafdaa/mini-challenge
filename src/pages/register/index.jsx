import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { registerUser } from '../../services/AuthService';
import Link from 'next/link';
import { SET_USER } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const { username, password } = form;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
      name: {
        firstname: 'random',
        lastname: 'stuff',
      },
      address: {
        city: 'bogor',
        street: 'xxx',
        number: 20,
        zipcode: '16111',
        geolocation: {
          lat: '222',
          long: '222',
        },
      },
      phone: '6888888343',
    };

    try {
      const { data } = await registerUser(axios, payload);

      dispatch(SET_USER(data));
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center">
      <form className="p-4 flex flex-col bg-orange-200" onSubmit={handleSubmit}>
        <h1 className="font-bold">REGISTER</h1>

        <label htmlFor="">username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="">password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <button className="mt-4 px-2 py-1 bg-green-600 text-white">
          Register
        </button>
        <Link href="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
