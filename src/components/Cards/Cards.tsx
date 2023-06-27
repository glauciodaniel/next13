import Image from 'next/image'
import React from 'react'

type CardsProps = {
    titleProduct: string;
    description: string;
    price: string;
    pathImage?: string;
}


const Cards = (props: CardsProps) => {
  return (
    <div className="max-w-sm h-[500px] rounded overflow-hidden shadow-lg md:w-96 ">
        <div className="relative w-full min-h-48 p-4">
        <Image src={`/images/products/${props.pathImage}`} width={400} height={243} alt="Sunset in the mountains" />
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.titleProduct ? props.titleProduct : "Apple Watch Series 8"} </div>
            <p className="text-gray-700 text-base">Apple Watch Series 8 (GPS + Cellular), Caixa em alumínio meia-noite de 45 mm com Pulseira esportiva meia-noite</p>
            <h2 className="mt-8 text-center text-black text-4xl flex  justify-center"><small className="text-xs">R$</small> 4.799<small className=" text-xs">00</small></h2>            
        </div>
    </div>
  )
}

export default Cards