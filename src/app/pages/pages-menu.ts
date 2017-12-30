import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
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
    icon: '',
    link: '/pages/complaints/add',
  },
  {
    title: 'Complaints',
    icon: '',
    link: '',
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
