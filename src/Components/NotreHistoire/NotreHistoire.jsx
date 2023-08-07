import React from 'react'
import SideText from './sideText'

function NotreHistoire() {
    let ServicesItems = [
        {
            title : 'Livraison Rapide',
            slug : 'promesse de livraison sous 30 min',
            icon : 'fa-solid fa-person-biking'
        },
        {
            title : 'Détecter',
            slug : 'livraison par ramassage à votre porte',
            icon : 'fa-sharp fa-solid fa-bag-shopping'
        },
        {
            title : 'Manger sur place',
            slug : 'dégustez vos plats frais et chauds',
            icon : 'fa-solid fa-utensils'
        },
    ];
  return (
    <div className='w-full flex justify-center items-center'>
        <div className="flex max-w-[1434px] w-[85%]">
        <div className="@container/histoire flex w-full h-fit gap-2">
            <div className='justify-evenly w-full md:px-8 flex flex-col gap-3 @[980px]/histoire:flex-row items-center' >
                <SideText />
                <div className='max-w-[400px] w-full hover:animate-spin relative bg-blue-100 rounded-full p-4 bg-opacity-10' >
                    <img src="/src/assets/notre-histoire/Ellipse 11.png" className=' max-w-[408px] w-full' alt="" />
                <div />
                </div>

                <ul className='font-poppins w-full gap-3 @[980px]/histoire:flex @[980px]/histoire:flex-col grid grid-cols-1 @[410px]/histoire:grid-cols-2 @[720px]/histoire:grid-cols-3' >
                    {
                        ServicesItems.map(item => (
                            <li key={item.title} className='flex flex-col justify-center items-center text-center @[980px]/histoire:text-left @[980px]/histoire:flex-row gap-3 w-full' >
                                <i className={`${item.icon} min-w-[70px] min-h-[70px] flex justify-center items-center text-center text-3xl bg-blue-500 rounded-full text-blue-200`} />
                                <div className=' w-full flex flex-col items-center @[980px]/histoire:items-start gap-2' >
                                    <h4 className='font-semibold text-lg text-gray-900 w-full ' >{ item.title }</h4>
                                    <p className='text-gray-300 text-sm w-full' >{ item.slug }</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NotreHistoire