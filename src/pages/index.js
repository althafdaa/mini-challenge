import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import Card from '../components/Card';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const getServerSideProps = async () => {
  const response = await axios.get(`${BASE_URL}/products`);

  return { props: { data: response.data } };
};

const Home = ({ data }) => {
  const user = useSelector((state) => state.auth.data);

  console.log(user);

  return (
    <div className="w-full">
      {user && <h2>Welcome {user?.username}</h2>}

      <h1 className="mb-6"> List of Products</h1>
      <div className="flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data?.map((item, idx) => {
          return <Card data={item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Home;
