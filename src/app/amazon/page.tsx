import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Cards from '../../components/Cards'
import Carousel from '../../components/Carousel/Carousel'

const Page: NextPage = () => {

    const images = [
        "https://placehold.co/480x300?font=roboto&text=Slide+1",
        "https://placehold.co/480x300?font=roboto&text=Slide+2",
        "https://placehold.co/480x300?font=roboto&text=Slide+3",
        "https://placehold.co/480x300?font=roboto&text=Slide+4",

    ]

    return (
        <div className="page-container">
            <div className="flex w-full min-h-96 flex-col items-center  justify-between">
                <header className="bg-gray-900 w-full h-20 items-center justify-center">
                    <nav className="flex h-20 items-center px-4 shadow-md">
                        <Link href="/" className="text-lg font-bold">
                            <Image src="/amazon.svg" alt="Amazon" width={150} height={40} className="w-24" />
                        </Link>
                        <form className="mx-auto hidden w-full justify-center md:flex">
                            <input type="text" className="w-1/2 tr-none rounded-br-none h-10 px-4 rounded-l-md border-0 outline-none" placeholder="Search" />
                            <button className="bg-yellow-400 h-10 px-4 rounded-r-md border-0 outline-none">Pesquisar Produtos</button>
                        </form>
                    </nav>

                </header>
                <section>
                    <div className="flex w-full h-[600px] items-center justify-center">
                        <Cards key={1} pathImage="123-apple-watch.png" titleProduct="" description="" price="" />
                        <Cards key={2} pathImage="51IxCp-f3tL._AC_SX679_.jpg" titleProduct="Apple Watch Series 7 " description="" price="" />
                        <Cards key={3} pathImage="" titleProduct="" description="" price="" />
                        <Cards key={4} pathImage="123-apple-watch.png" titleProduct="" description="" price="" />
                    </div>
                </section>
                <section className="lg:w-3/4 mx-auto my-2">
                    <Carousel loop>
                        {images.map((src, i) => {
                            return (
                                <div className="relative  h-64 flex-[0_0_100%]" key={i}>
                                    <Image src={src} fill className="object-cover" alt="alternate text" />
                                </div>
                            )
                        })}
                    </Carousel>
                </section>
            </div>

        </div>
    )
}

export default Page