import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import MenuBar from '../components/MenuBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <TopHeader />
      <MainHeader />
      <div className='relative z-50'>
        <MenuBar />
      </div>
      <div className='relative z-0'>
        <Outlet />
      </div>
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default MainLayout