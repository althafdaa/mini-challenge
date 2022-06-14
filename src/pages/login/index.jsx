import axios from 'axios';
import React, { useState } from 'react';
import { loginUser } from '../../services/AuthService';
// import { useDispatch } from 'react-redux/es/exports';
import Link from 'next/link';
import { setLocalStorageValue } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { SET_TOKEN } from '../../store/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { username, password } = form;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };

    try {
      const response = await loginUser(axios, payload);

      console.log(response);

      setLocalStorageValue('fetchAPI-Token', response?.token);
      dispatch(SET_TOKEN(response?.token));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center">
      <form className="p-4 flex flex-col bg-orange-200" onSubmit={handleSubmit}>
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
          Login
        </button>
        <Link href="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
