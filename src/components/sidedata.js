import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookIcon from '@mui/icons-material/Book';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <DashboardIcon />,
    cName: 'nav-text'
  },
  {
    title: 'User',
    path: '/reports',
    icon: <SupervisedUserCircleIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <ProductionQuantityLimitsIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <BookIcon />,
    cName: 'nav-text'
  },
 
  {
    title: 'Login',
    path: '/login',
    icon: <LoginIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <AppRegistrationIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Not Found',
    path: '/error',
    icon: <DoNotDisturbIcon />,
    cName: 'nav-text'
  }
];