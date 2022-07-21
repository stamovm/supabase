import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
function BlurImage() {
  return (
    <a href="#" className="group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src="https://bit.ly/placeholder-img"
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Lee Robinson</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
    </a>
  )
}

const Home: NextPage = () => {
  return (
    <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <BlurImage />
      </div>
    </div>
  )
}

export default Home
