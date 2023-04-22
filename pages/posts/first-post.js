import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";

const FirstPost = () =>{
  return(
    <Layout>
      <Head>
        <title>My First Post</title>
        {/* <Script 
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={()=>console.log("Script loaded successfully....")}
        /> */}
      </Head>
      <div>
        <h1>This is first Post</h1>
        <h3>Go to <Link href="/" >Home</Link> </h3>
        <Image src="/images/unnamed.jpg" height={450} width={500} alt="Traffic Lights by Sara Kays"/>
      </div>
    </Layout>
  )
}

export default FirstPost;