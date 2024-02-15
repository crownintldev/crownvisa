"use client"
import React, { useState, useEffect } from 'react';
import Logo from '../Logo';
import Container from '../Container';
import Navlink from '../Navlink';
import { IoIosArrowUp } from 'react-icons/io';
import { TbMenu2 } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import { Modal } from 'antd';
import Button from '../Button';
import TopHeader from '../TopHeader';
import SearchData from '../SearchData';



const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const onChangeTab = (key) => {
    console.log(key);
  };
 
  const handleCloseDrawer = () => {
    onClose();
  };
  const handleScroll = () => {
    if (window.scrollY < 200) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
 
  return (
    <>
  
  <nav
        className={` bg-white text-black sticky top-0  z-20 shadow-xl drop-shadow ${scrollingUp ? 'show' : 'hide'}`}
      >

      <Container className="flex justify-between py-4 pt-2 pb-2 ">
        <div className="relative z-10">
          <Logo />
        </div>
        <div className="lg:flex  lg:gap-10 items-center hidden ">
          <Navlink onClose={() => setMobileMenuOpen(false)} />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Button onClick={() => toggleModal(0, true)} className={'border-none'} text={<AiOutlineSearch size={25}/>} />
            <Modal
              open={isModalOpen[0]}
              width={700}
              onOk={() => toggleModal(0, false)}
              onCancel={() => toggleModal(0, false)}
              maskStyle={{ backdropFilter: 'blur(10px)'  }} 
              className='searchmodal focus:outline-none'
              footer=""
             
            >
            <SearchData/>
            </Modal>
            
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center bg-yellow100  rounded-lg p-2 hover:bg-yellow100 transition duration-300"
              >
              {mobileMenuOpen ? (
                <IoIosArrowUp className="text-2xl mt-[5px]" />
                ) : (
                  <TbMenu2 className="text-2xl mt-[5px]" />
                  )}
            </button>
            {mobileMenuOpen && (
              <div className={`absolute -z-10 inset-x-0  h-screen   origin-top rounded-b-2xl px-6 pb-6 pt-10 bg-white text-black`}>
                <div className="space-y-4  flex-col flex z-50">
                  <Navlink onClose={() => setMobileMenuOpen(false)} />

                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
     
    
    </>
  );
};

export default Header;
