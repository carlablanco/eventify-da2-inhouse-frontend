import { NavItem } from '@/types';

export type User = {
  mail: string;
  modules: {
    eda: string[];
    hr: string[];
    marketing: string[];
  };
  dn: string;
  sn: string;
  l: string;
  st: string;
  street: string;
  givenName: string;
  telephoneNumber: string;
  uid: string;
  isActive: boolean;
};

export const navItems: NavItem[] = [
  {
    title: 'Panel',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Panel'
  },
  {
    title: 'Usuarios',
    href: '/users',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Perfil',
    href: '/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Beneficios',
    href: '/benefits',
    icon: 'billing',
    label: 'billing'
  }
];

export const actualUsersMocked = [
  {
    mail: 'Kerrin.Casimir@gmail.com',
    modules: {
      eda: ['admin'],
      hr: ['admin'],
      marketing: ['admin']
    },
    dn: 'cn=Kerrin.Casimir@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Casimir',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Kerrin',
    telephoneNumber: '261310711',
    uid: '631',
    isActive: true
  },
  {
    mail: 'Alyda.Euridice@gmail.com',
    modules: {
      eda: ['admin']
    },
    dn: 'cn=Alyda.Euridice@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Euridice',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Alyda',
    telephoneNumber: '6201807',
    uid: '547',
    isActive: true
  },
  {
    mail: 'Rhoda.Garbe@gmail.com',
    modules: {
      eda: ['admin'],
      hr: ['admin'],
      marketing: ['admin']
    },
    dn: 'cn=Rhoda.Garbe@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Garbe',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Rhoda',
    telephoneNumber: '597955719',
    uid: '182',
    isActive: true
  },
  {
    mail: 'Larine.Vorster@gmail.com',
    modules: {
      eda: ['admin']
    },
    dn: 'cn=Larine.Vorster@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Vorster',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Larine',
    telephoneNumber: '870364701',
    uid: '636',
    isActive: true
  },
  {
    mail: 'Concettina.Kaja@gmail.com',
    modules: {
      marketing: ['user']
    },
    dn: 'cn=Concettina.Kaja@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Kaja',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Concettina',
    telephoneNumber: '230810472',
    uid: '735',
    isActive: true
  },
  {
    mail: 'Sharlene.Andrel@gmail.com',
    modules: {
      marketing: ['user']
    },
    dn: 'cn=Sharlene.Andrel@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Andrel',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Sharlene',
    telephoneNumber: '148554129',
    uid: '814',
    isActive: true
  },
  {
    mail: 'Genovera.Barbey@gmail.com',
    modules: {
      eda: ['admin']
    },
    dn: 'cn=Genovera.Barbey@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Barbey',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Genovera',
    telephoneNumber: '952539873',
    uid: '751',
    isActive: true
  },
  {
    mail: 'Annabela.Germann@gmail.com',
    modules: {
      artistas: ['manager']
    },
    dn: 'cn=Annabela.Germann@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Germann',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Annabela',
    telephoneNumber: '952293222',
    uid: '837',
    isActive: true
  },
  {
    mail: 'Kate.Goode@gmail.com',
    modules: {
      eda: ['admin']
    },
    dn: 'cn=Kate.Goode@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Goode',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Kate',
    telephoneNumber: '588904993',
    uid: '79',
    isActive: true
  },
  {
    mail: 'Cristabel.Helfand@gmail.com',
    modules: {
      eda: ['admin']
    },
    dn: 'cn=Cristabel.Helfand@gmail.com,ou=usuarios,ou=eventify_sa,dc=ec2,dc=internal',
    sn: 'Helfand',
    l: 'Banfield',
    st: 'Buenos Aires',
    street: 'Godoy Cruz 2502',
    givenName: 'Cristabel',
    telephoneNumber: '927689760',
    uid: '931',
    isActive: true
  }
];

export const actualLogsData = [
  {
    _id: '6717ed0676b6e55b84e7a8ad',
    username: 'tomas01ariel@gmail.com',
    modules: {
      analitica: ['artista']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-22T18:20:54.924Z'
  },
  {
    _id: '6717ed6d11869062d1788a75',
    username: 'tomas01ariel@gmail.com',
    modules: {
      analitica: ['artista']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-22T18:22:37.384Z'
  },
  {
    _id: '6717ed7c1245a09e934282e7',
    username: 'tomas01ariel@gmail.com',
    modules: {
      analitica: ['artista']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-22T18:22:52.502Z'
  },
  {
    _id: '67197eceaf9174a2a0d22b3d',
    username: 'Chrystel.Raama@gmail.com',
    modules: {
      wallet: ['usuario']
    },
    action: 'login',
    timestamp: '2024-10-23T22:55:10.085Z'
  },
  {
    _id: '671abe7df3043e3a1cf9aecc',
    username: 'tomas01ariel@gmail.com',
    modules: {
      analitica: ['artista']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-24T21:39:09.566Z'
  },
  {
    _id: '671ac4dcda7a54025f8c6353',
    username: 'tomas01ariel@gmail.com',
    modules: {
      analitica: ['artista']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-24T22:06:20.459Z'
  },
  {
    _id: '671ac5311e6d6cab4671e76e',
    username: 'tomas01ariel@gmail.com',
    modules: {
      artistas: ['admin']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-24T22:07:45.044Z'
  },
  {
    _id: '671ac53e1e6d6cab4671e770',
    username: 'tomas01ariel@gmail.com',
    modules: {
      artistas: ['admin']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-24T22:07:58.010Z'
  },
  {
    _id: '671ac5d81e6d6cab4671e772',
    username: 'Sue.Azeria@gmail.com',
    modules: {
      wallet: ['usuario']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-24T22:10:32.127Z'
  },
  {
    _id: '671b06c79daa67f2040ab877',
    username: 'tomas01ariel@gmail.com',
    modules: {
      artistas: ['admin']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-25T02:47:35.704Z'
  },
  {
    _id: '671b17179daa67f2040ab879',
    username: 'tomas01ariel@gmail.com',
    modules: {
      artistas: ['admin']
    },
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-10-25T03:57:11.209Z'
  }
];
