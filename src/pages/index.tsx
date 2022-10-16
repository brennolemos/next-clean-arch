import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Ecommerce</h1>

      <ul>
        <li>
          <label>Name: </label> Product 1
          <a href="">Ver detalhes</a>
        </li>
      </ul>
    </div>
  )
}

export default Home
