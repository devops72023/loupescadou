import React from 'react'

import icon1 from './../../assets/Livraison/icon-1.png';
import icon2 from './../../assets/Livraison/icon-2.png';
import icon3 from './../../assets/Livraison/icon-3.png';
import icon4 from './../../assets/Livraison/icon-4.png';
import chronoLogo from './../../assets/Livraison/chrono-fresh-logo.png';
import './Home.css'

const Icon = ({icon, title, text}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 @[440px]/icons:-mt-[67px] max-w-[220px]'>
        <div className="w-[90px] h-[90px] bg-white rounded-full flex justify-center items-center overflow-hidden shadow-xl">
            <img src={icon} className="w-[50px] h-[50px]" />
        </div>
        <div className="flex flex-col text-center text-white">
            <div className="font-bold">
                {title}
            </div>
            <div className="text-sm">
                {text}
            </div>
        </div>
    </div>
  )
}


function Livraison() {
  return (
    <div className='max-w-[1434px] w-[90%] mx-auto glass p-[24px] flex  justify-center gap-[80px] rounded-xl my-10 @container/livraison'>
        <div className="w-full flex flex-col justify-center items-center gap-3 @[516px]/livraison:flex-row">
            <div className="flex w-full justify-center items-center @container/icons">
                <div className="flex flex-col @[440px]/icons:flex-row  gap-3">
                    <Icon icon={icon1} title='Offres flexibles' text='Commandes au détail ou abonnement' />
                    <Icon icon={icon2} title='Poisson ultra frais' text='Variété de poisson selon arrivages' />
                </div>
            </div>
            <div className="flex mx-auto relative w-full max-w-[280px]">
                <div className="flex justify-center items-center w-full aspect-[1/1] @[516px]/livraison:absolute top-[50%] @[516px]/livraison:translate-y-[-50%] @[1233px]/livraison:translate-y-0 @[1233px]/livraison:-mt-[142px] rounded-full glass my-shadow">
                    <img src={chronoLogo} className='w-[80%] aspect-[1/1] rounded-full overflow-hidden shadow-xl' />
                </div>
            </div>
            <div className="flex w-full justify-center items-center @container/icons">
                <div className="flex flex-col @[440px]/icons:flex-row  gap-3">
                    <Icon icon={icon3} title='Respect de la chaîne du froid' text='Livraison sous 48h par Chronofresh' />
                    <Icon icon={icon4} title='Pêche principalement française' text='Pêche Atlantique Nord-Est' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Livraison