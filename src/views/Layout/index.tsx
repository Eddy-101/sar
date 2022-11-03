import { Link, Outlet } from "react-router-dom";
import {AiOutlineHome, AiOutlineLogin, AiOutlineTable} from 'react-icons/ai'
import { useState } from "react";
import {motion} from 'framer-motion';

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navVariants = {
    'hidden': {
      width: 54,
    },
    'visible': {
      width: 400,
      opacity: 1
    }
  }

  const textVariants = {
    'open': {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: 'easeIn'
      }
    }, 
    'close': {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log('click');
  }

  return (
    <div className="flex">
      <motion.nav 
        animate={isOpen ? 'visible':'hidden'}
        transition={{duration: 0.8, ease: 'anticipate'}}
        variants = {navVariants}
        className="w-[3.4rem] text-white min-h-screen items-center justify-center bg-blue flex flex-col gap-5" 
        onClick={handleOpen}
      >
        <Link to="/" className="flex items-center flex-col gap-2">
          <AiOutlineHome size={28}/>
          <motion.span
            className={`text-white text-xl uppercase`}
            initial = {{opacity: 0}}
            animate={isOpen ? 'open':'close'}
            variants={textVariants}
          >
            Home
          </motion.span>
        </Link>
        <Link to="/" className="flex items-center flex-col gap-2">
          <AiOutlineLogin size={28}/>
          <motion.span
            className={`text-white text-xl uppercase`}
            initial = {{opacity: 0}}
            animate={isOpen ? 'open':'close'}
            variants={textVariants}
          >
            Login
          </motion.span>
        </Link>
        <Link to="/" className="flex flex-col items-center gap-2">
          <AiOutlineTable size={28}/>
          <motion.span
            className={`text-white text-xl uppercase`}
            initial = {{opacity: 0}}
            animate={isOpen ? 'open':'close'}
            variants={textVariants}
          >
            User Information
          </motion.span>
        </Link>
      </motion.nav>

      <div className="p-5 w-full">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout;
