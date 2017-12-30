import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'COMPLAINTS',
    group: true,
  },
  {
    title: 'Complaints',
    icon: 'nb-list',
    link: '/pages/complaints',
  },
  {
    title: 'USERS',
    group: true,
  },
  {
    title: 'Customers',
    link: '/pages/users/customers',
  },
  {
    title: 'Employees',
    link: '',
  },
  {
    title: 'Add Employee',
    link: '',
  }
];

export const MENU_ITEMS_CONSULTANT: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'COMPLAINTS',
    group: true,
  },
  {
    title: 'Complaints',
    icon: 'nb-list',
    link: '/pages/complaints',
  },
  {
    title: 'USERS',
    group: true,
  },
  {
    title: 'Customers',
    icon: '',
    link: '/pages/users/customers',
  },
  {
    title: 'Employees',
    icon: '',
    link: '',
  },
];

export const MENU_ITEMS_CUSTOMER: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'COMPLAINTS',
    group: true,
  },

  {
    title: 'Add Complaint',
    icon: 'nb-compose',
    link: '/pages/complaints/add',
  },
];

/*
 {
 title: 'My Complaints',
 icon: 'nb-list',
 link: '/pages/complaints',
 },
 */
