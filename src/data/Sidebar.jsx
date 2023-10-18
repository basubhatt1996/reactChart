import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {FaBasketShopping, FaMoneyBillTrendUp,FaAirbnb} from 'react-icons/fa6'
import {FaHandsHelping} from 'react-icons/fa'
import {BsPersonCheck} from 'react-icons/bs'
import {HiReceiptPercent} from 'react-icons/hi2'
import { Link } from 'react-router-dom'

//import {links} from './dummy'
const Sidebar = () => {
    const activeMenu=true
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10">
        {activeMenu && (
            
            <>
            <div className='flex justify-between item-center'>
                <div className='items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold text-white'>
                <FiShoppingCart/><span>Dashboard </span>
              </div>  
              </div>
              <div className='mt-10'>
                <div className='items-center gap-3 ml-6 mt-6 flex text-sm  text-white '>
                <FaAirbnb/><span>Dashboard </span>
                </div>
                <div className='items-center gap-3 ml-6 mt-6 flex text-sm  text-white'>
                <FaBasketShopping/><span>Product</span>
                </div>
                <div className='items-center gap-3 ml-6 mt-6 flex text-sm  text-white'>
                <BsPersonCheck/><span>Customers</span>
                </div>
                <div className='items-center gap-3 ml-6 mt-6 flex text-sm  text-white'>
                <FaMoneyBillTrendUp/><span>Income</span>
                </div>
                <div className='items-center gap-3 ml-6 mt-6 flex text-sm  text-white'>
                <HiReceiptPercent/><span>Promote</span>
                </div>
                <div className='items-center gap-3 ml-6 mt-6 flex text-sm  text-white'>
                <FaHandsHelping/><span>Help</span>
                </div>
                </div>
            </>
        )}
    </div>
    
  )
}

export default Sidebar