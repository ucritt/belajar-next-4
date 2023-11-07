import Image from "next/image";
import Navbar from "./Components/Navbar";
import Head from "next/head";

function contact() {
  return (
    <>
      <Head>
        <title>contact | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/vercel.svg" alt="Logo Vercel" width={300} height={200} />
      <h1>Ini halaman contact</h1>
    </>
  );
}

export default contact;