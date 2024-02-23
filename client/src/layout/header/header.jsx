import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useModal } from '../../hook/useModal';
import { Register } from './components/register';
import { Login } from './components/login';
import { loadState } from '../../lib/storage';
import { Modal } from '../../components/ui/modal';

export const Header = () => {

  const { isOpen, close, open } = useModal();
  const { isOpen: isOpen2, toggle } = useModal();
  const user = loadState("user");
  console.log(user);

  return (
    <header className='border-b'>
      <div className="container">
        <div className='flex py-5 items-center justify-between'>
          <a className=' text-[28px] font-bold ' href="#">
            LOGO
          </a>
          <nav className='flex items-center gap-[38px]'>
            <ul className='flex items-center gap-[38px] '>
              <li className=' text-[18px] text-[#299efe]'>
                <NavLink to='/'>
                  Home
                </NavLink>
              </li>
              <li className=' text-[18px] text-[#299efe]'>
                <NavLink to="/about">
                  About
                </NavLink>
              </li>
              <li className=' text-[18px] text-[#299efe]'>
                <NavLink to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className=' text-[18px] text-[#299efe]'>
                <NavLink to='/services'>
                  Services
                </NavLink>
              </li>
              <li className=' text-[18px] text-[#299efe]'>
                <NavLink to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div>
              <Modal isOpen={isOpen} close={close}>
                {!isOpen2 ? (
                  <Login close={close} />
                  ) : (
                  <Register changeModal={toggle} closeModal={close} />
                )}

                <button className=" text-[#299efe] w-[100%]" onClick={toggle}>
                  {!isOpen2 ? "Create Account" : "Already Have an Account"}
                </button>
              </Modal>
              {!user ? (
                <button onClick={open} className=" bg-[#299efe] text-[18px] text-white py-[12px] border border-[#299efe] transition-all duration-300 hover:bg-transparent hover:text-[#299efe] px-[30px] rounded-full ">
                  Login
                </button>
              ) : (
                <Link to="/user">
                  <div className='flex flex-col'>
                    <p className='text-[18px]'>{user.user.name}</p>
                    <p className='text-[16px]'>{user.user.email}</p>
                  </div>
                </Link>
              )}
            </div>

          </nav>
        </div>
      </div>
    </header>
  )
}
