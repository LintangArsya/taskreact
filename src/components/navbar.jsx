import React from 'react'; 

const Navbar = () => {
  return (
    <div className=" flex justify-center w-full bg-green-400 p-2">
      <div className="container flex justify-between gap">
        <div className="flex items-center gap-5">
          <img src="kesa.png" alt="" width='70px' />
          <h1 className='text-4xl font-bold'>HealtyNews</h1>
        </div>
        <div className=" flex text-black items-center gap-8 text-2xl ">
          <a href="" className='hover:text-white '>Home</a>
          <a href="" className='hover:text-white   '>Breaking News</a> 
          <a href="" className='hover:text-white'>Services</a>
          <a href="" className='hover:text-white'>Contact</a>
          {/* <div className=" flex bg-lime-500 rounded-full w-28 h-12 items-center justify-center hover:bg-gray-600 transition ease-in-out duration-300 ">
            <a href="">Log In</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
