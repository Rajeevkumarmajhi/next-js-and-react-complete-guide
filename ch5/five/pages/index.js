import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function Home(props) {

  const { products } = props;


  return (
    <ul>
      { products.map( product => <li key={product.id} >{product.title}</li>)}
    </ul>
  )
}

export async function getStaticProps(){
  return {
    props:{
      products: [{id:"p1", title:"Product 1"}],
    },
  };
}

export default Home;