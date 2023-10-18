import React, { useEffect } from 'react';
import {FaHandSparkles} from 'react-icons/fa'
import {MdWavingHand} from 'react-icons/md'

const Navbar = () => {


  return (
   
    <div>
       <div className='items-center ml-72 pt-5 pl-12 flex text-xl font-extrabold text-gray-700'>
       &nbsp;&nbsp;&nbsp;&nbsp; <MdWavingHand/>&nbsp;&nbsp;<h1> Hello User,</h1>
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input  className="text-sm search_bar" type="text"  placeholder='Search'/>
        </div>
        
    </div>
  );
};

export default Navbar;