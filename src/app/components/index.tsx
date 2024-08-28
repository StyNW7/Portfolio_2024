import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio Website" />
      </Head>
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </header>
      {/* Tambahkan konten di sini */}
    </div>
  );
};

export default Home;