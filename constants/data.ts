import { NavItem } from '@/types';

export type User = {
  mail: string;
  modules: {
    eda: string[];
    analitica: string[];
    crypto: string[];
    intranet: string[];
    wallet: string[];
    ventas: string[];
    artistas: string[];
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
    title: 'Panel de Administrador',
    href: '/dashboard/admin',
    icon: 'kanban',
    label: 'settings'
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
      artistas: ['admin']
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
      artistas: ['admin']
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
      artistas: ['user']
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
      artistas: ['user']
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

export const actualLogsDataRevamp = [
  {
    _id: '673b9312ae35e6349ecc7e5f',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:18:42.335Z'
  },
  {
    _id: '673b9339ae35e6349ecc7e62',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:19:21.734Z'
  },
  {
    _id: '673b94a0ae35e6349ecc7e65',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:25:20.767Z'
  },
  {
    _id: '673b953cae35e6349ecc7e68',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:27:56.057Z'
  },
  {
    _id: '673b9c36ae35e6349ecc7e6b',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:57:42.451Z'
  },
  {
    _id: '673b9c54ae35e6349ecc7e6e',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:58:12.659Z'
  },
  {
    _id: '673b9c9bae35e6349ecc7e71',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:59:23.895Z'
  },
  {
    _id: '673b9caeae35e6349ecc7e74',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T19:59:42.636Z'
  },
  {
    _id: '673b9f24ae35e6349ecc7e77',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:10:12.771Z'
  },
  {
    _id: '673b9f79ae35e6349ecc7e7a',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:11:37.859Z'
  },
  {
    _id: '673b9ff1ae35e6349ecc7e7d',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:13:37.545Z'
  },
  {
    _id: '673ba082ae35e6349ecc7e80',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:16:02.233Z'
  },
  {
    _id: '673ba11cae35e6349ecc7e83',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:18:36.227Z'
  },
  {
    _id: '673ba30bae35e6349ecc7e86',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:26:51.892Z'
  },
  {
    _id: '673ba3ddae35e6349ecc7e89',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:30:21.654Z'
  },
  {
    _id: '673ba579ae35e6349ecc7e8c',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T20:37:13.937Z'
  },
  {
    _id: '673baf2cae35e6349ecc7e8f',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T21:18:36.312Z'
  },
  {
    _id: '673bafa0ae35e6349ecc7e92',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T21:20:32.901Z'
  },
  {
    _id: '673bb020ae35e6349ecc7e95',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T21:22:40.757Z'
  },
  {
    _id: '673bb16cae35e6349ecc7e98',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T21:28:12.256Z'
  },
  {
    _id: '673bbffedef417ebd6aebaeb',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-18T22:30:22.702Z'
  },
  {
    _id: '673d34349b5959327f2c59cb',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-20T00:58:28.440Z'
  },
  {
    _id: '673d34769b5959327f2c59ce',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-20T00:59:34.210Z'
  },
  {
    _id: '673d34959b5959327f2c59d1',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-20T01:00:05.753Z'
  },
  {
    _id: '673fbd35f2ad9d7c2219c69e',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-21T23:07:33.485Z'
  },
  {
    _id: '673fbd9af2ad9d7c2219c6a1',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-21T23:09:14.753Z'
  },
  {
    _id: '673fbec1f2ad9d7c2219c6a4',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-21T23:14:09.242Z'
  },
  {
    _id: '673fde1ef2ad9d7c2219c6a7',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T01:27:58.143Z'
  },
  {
    _id: '673fe082f2ad9d7c2219c6aa',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T01:38:10.452Z'
  },
  {
    _id: '673fef5df2ad9d7c2219c6ad',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T02:41:33.763Z'
  },
  {
    _id: '673fefb3f2ad9d7c2219c6b0',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T02:42:59.932Z'
  },
  {
    _id: '673ff0daf2ad9d7c2219c6b3',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T02:47:54.534Z'
  },
  {
    _id: '673ff10bf2ad9d7c2219c6b6',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T02:48:43.004Z'
  },
  {
    _id: '67410cac611b085432ac75a4',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T22:58:52.050Z'
  },
  {
    _id: '67411073611b085432ac75a7',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T23:14:59.394Z'
  },
  {
    _id: '67411114611b085432ac75aa',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T23:17:40.538Z'
  },
  {
    _id: '674112b5611b085432ac75ad',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T23:24:37.832Z'
  },
  {
    _id: '6741131c611b085432ac75b0',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T23:26:20.805Z'
  },
  {
    _id: '67411330611b085432ac75b3',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T23:26:40.475Z'
  },
  {
    _id: '67411360611b085432ac75b6',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T23:27:28.655Z'
  },
  {
    _id: '674116e3611b085432ac75b9',
    username: 'admineventos@eventify.com',
    modules: [
      {
        module: 'eda',
        roles: ['admin']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-22T23:42:27.500Z'
  },
  {
    _id: '67411fbc611b085432ac75bc',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:20:12.351Z'
  },
  {
    _id: '6741247f611b085432ac75bf',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:40:31.061Z'
  },
  {
    _id: '6741249f611b085432ac75c2',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:41:03.538Z'
  },
  {
    _id: '674124b9611b085432ac75c5',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:41:29.607Z'
  },
  {
    _id: '67412509611b085432ac75c8',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:42:49.655Z'
  },
  {
    _id: '6741256a611b085432ac75cb',
    username: 'marcosrodriguez@uade.edu.ar',
    modules: [
      {
        module: 'eda',
        roles: ['admin']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:44:26.412Z'
  },
  {
    _id: '6741265b611b085432ac75ce',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:48:27.576Z'
  },
  {
    _id: '674126ba611b085432ac75d1',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login'
  },
  {
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T00:51:31.904Z'
  },
  {
    _id: '67413415611b085432ac75dd',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T01:47:01.885Z'
  },
  {
    _id: '6742060455a476e363432181',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T16:42:44.195Z'
  },
  {
    _id: '6742060455a476e363432183',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T16:42:44.207Z'
  },
  {
    _id: '6742115955a476e363432186',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T17:31:05.452Z'
  },
  {
    _id: '6742117955a476e363432189',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T17:31:37.988Z'
  },
  {
    _id: '674212dc55a476e36343218c',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T17:37:32.183Z'
  },
  {
    _id: '6742149355a476e363432195',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T17:44:51.406Z'
  },
  {
    _id: '6742178e55a476e363432198',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T17:57:34.750Z'
  },
  {
    _id: '6742180255a476e36343219b',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T17:59:30.396Z'
  },
  {
    _id: '674218ac55a476e36343219e',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:02:20.643Z'
  },
  {
    _id: '674218cb55a476e3634321a1',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:02:51.244Z'
  },
  {
    _id: '6742194a55a476e3634321a4',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:04:58.958Z'
  },
  {
    _id: '6742197d55a476e3634321a7',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:05:49.611Z'
  },
  {
    _id: '67421a9255a476e3634321aa',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:10:26.137Z'
  },
  {
    _id: '67421aa155a476e3634321ad',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:10:41.711Z'
  },
  {
    _id: '67421b9c55a476e3634321b0',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:14:52.745Z'
  },
  {
    _id: '67421bab55a476e3634321b3',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:15:07.749Z'
  },
  {
    _id: '67421cb455a476e3634321b6',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:19:32.113Z'
  },
  {
    _id: '67421cc955a476e3634321b9',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:19:53.265Z'
  },
  {
    _id: '67421d6655a476e3634321bc',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:22:30.046Z'
  },
  {
    _id: '67421d8e55a476e3634321bf',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:23:10.507Z'
  },
  {
    _id: '67421e3155a476e3634321c2',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:25:53.771Z'
  },
  {
    _id: '67421e3455a476e3634321c5',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:25:56.794Z'
  },
  {
    _id: '67421eaf55a476e3634321c8',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:27:59.481Z'
  },
  {
    _id: '67421efa55a476e3634321cb',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:29:14.975Z'
  },
  {
    _id: '67421f0255a476e3634321ce',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:29:22.888Z'
  },
  {
    _id: '67421f0355a476e3634321d1',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:29:23.358Z'
  },
  {
    _id: '67421f0a55a476e3634321d4',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:29:30.544Z'
  },
  {
    _id: '67421f1f55a476e3634321d7',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:29:51.366Z'
  },
  {
    _id: '67421f4355a476e3634321da',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:30:27.592Z'
  },
  {
    _id: '67421f6555a476e3634321dd',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:31:01.770Z'
  },
  {
    _id: '67421f6755a476e3634321e0',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:31:03.805Z'
  },
  {
    _id: '67421f8855a476e3634321e3',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:31:36.605Z'
  },
  {
    _id: '67421faf55a476e3634321e6',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:32:15.632Z'
  },
  {
    _id: '67421fd655a476e3634321e9',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:32:54.935Z'
  },
  {
    _id: '674223b255a476e3634321ec',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:49:22.742Z'
  },
  {
    _id: '674225d255a476e3634321ef',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:58:26.471Z'
  },
  {
    _id: '674225fd55a476e3634321f2',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T18:59:09.146Z'
  },
  {
    _id: '6742275255a476e3634321f5',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T19:04:50.578Z'
  },
  {
    _id: '674227ba55a476e3634321f8',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T19:06:34.245Z'
  },
  {
    _id: '67422a7855a476e3634321fb',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T19:18:16.971Z'
  },
  {
    _id: '67422ab155a476e3634321fe',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T19:19:13.365Z'
  },
  {
    _id: '67422acf55a476e363432201',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T19:19:43.896Z'
  },
  {
    _id: '67422cb055a476e363432204',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T19:27:44.460Z'
  },
  {
    _id: '67422ce055a476e363432207',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-23T19:28:32.815Z'
  },
  {
    _id: '674363a5d5936c1e475ff07c',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T17:34:29.202Z'
  },
  {
    _id: '6743685ed5936c1e475ff07f',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T17:54:38.736Z'
  },
  {
    _id: '67436a03d5936c1e475ff082',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:01:39.703Z'
  },
  {
    _id: '67436e88b0930878b5e2a626',
    username: 'admineventos@eventify.com',
    modules: [
      {
        module: 'eda',
        roles: ['admin']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:20:56.087Z'
  },
  {
    _id: '67436e9cb0930878b5e2a629',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:21:16.571Z'
  },
  {
    _id: '67436ea0b0930878b5e2a62c',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:21:20.161Z'
  },
  {
    _id: '67436ea2b0930878b5e2a62f',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:21:22.365Z'
  },
  {
    _id: '67436ea7b0930878b5e2a632',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:21:27.695Z'
  },
  {
    _id: '67436f12b0930878b5e2a635',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:23:14.514Z'
  },
  {
    _id: '67436f27b0930878b5e2a638',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T18:23:35.435Z'
  },
  {
    _id: '67437ad8e6085bb566487c26',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:13:28.267Z'
  },
  {
    _id: '67437ed0e6085bb566487c29',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:30:24.781Z'
  },
  {
    _id: '67437ed9e6085bb566487c2c',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:30:33.530Z'
  },
  {
    _id: '67437ee6e6085bb566487c2f',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:30:46.116Z'
  },
  {
    _id: '67437f07e6085bb566487c32',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:31:19.199Z'
  },
  {
    _id: '67437f0ce6085bb566487c35',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:31:24.098Z'
  },
  {
    _id: '67437f34e6085bb566487c38',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:32:04.621Z'
  },
  {
    _id: '67437f85e6085bb566487c3b',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:33:25.623Z'
  },
  {
    _id: '67437f96e6085bb566487c3e',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:33:42.019Z'
  },
  {
    _id: '6743800be6085bb566487c41',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:35:39.864Z'
  },
  {
    _id: '6743801ae6085bb566487c44',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:35:54.149Z'
  },
  {
    _id: '6743803ee6085bb566487c47',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:36:30.813Z'
  },
  {
    _id: '67438056e6085bb566487c4a',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:36:54.858Z'
  },
  {
    _id: '67438078e6085bb566487c4d',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:37:28.716Z'
  },
  {
    _id: '674380a8e6085bb566487c50',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:38:16.949Z'
  },
  {
    _id: '67438141e6085bb566487c53',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:40:49.987Z'
  },
  {
    _id: '67438225e6085bb566487c56',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:44:37.747Z'
  },
  {
    _id: '6743826fe6085bb566487c59',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:45:51.979Z'
  },
  {
    _id: '674382c8e6085bb566487c5c',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:47:20.965Z'
  },
  {
    _id: '67438373e6085bb566487c5f',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:50:11.690Z'
  },
  {
    _id: '674383d0e6085bb566487c62',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T19:51:44.758Z'
  },
  {
    _id: '67438718e6085bb566487c65',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T20:05:44.316Z'
  },
  {
    _id: '67438762e6085bb566487c68',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T20:06:58.981Z'
  },
  {
    _id: '67438777e6085bb566487c6b',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T20:07:19.141Z'
  },
  {
    _id: '67439511e6085bb566487c6e',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-24T21:05:21.835Z'
  },
  {
    _id: '6743c3c3f355209b0ae7eee3',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:24:35.842Z'
  },
  {
    _id: '6743c450f355209b0ae7eee6',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:26:56.670Z'
  },
  {
    _id: '6743c45ef355209b0ae7eee9',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:27:10.881Z'
  },
  {
    _id: '6743c762f355209b0ae7eeec',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:40:02.887Z'
  },
  {
    _id: '6743c891f355209b0ae7eeef',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:45:05.261Z'
  },
  {
    _id: '6743c8ddf355209b0ae7eef2',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:46:21.250Z'
  },
  {
    _id: '6743c9b6f355209b0ae7eef5',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:49:58.961Z'
  },
  {
    _id: '6743cbfaf355209b0ae7eef8',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T00:59:38.484Z'
  },
  {
    _id: '6743ce3bf355209b0ae7eefb',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T01:09:15.560Z'
  },
  {
    _id: '6743ce8df355209b0ae7eefe',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T01:10:37.111Z'
  },
  {
    _id: '6743d04bf355209b0ae7ef01',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T01:18:03.754Z'
  },
  {
    _id: '6743d0e6f355209b0ae7ef04',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T01:20:38.965Z'
  },
  {
    _id: '6743d1b0f355209b0ae7ef07',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T01:24:00.816Z'
  },
  {
    _id: '6743d26ff355209b0ae7ef0a',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T01:27:11.688Z'
  },
  {
    _id: '6743e927f355209b0ae7ef0d',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T03:04:07.312Z'
  },
  {
    _id: '6743f8bff355209b0ae7ef10',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T04:10:39.526Z'
  },
  {
    _id: '6743f96bf355209b0ae7ef13',
    username: 'kun@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T04:13:31.062Z'
  },
  {
    _id: '6743f98df355209b0ae7ef16',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T04:14:05.285Z'
  },
  {
    _id: '6743f9bff355209b0ae7ef19',
    username: 'monolink@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['artista']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T04:14:55.995Z'
  },
  {
    _id: '6743f9def355209b0ae7ef1c',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T04:15:26.585Z'
  },
  {
    _id: '6743f9f9f355209b0ae7ef1f',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T04:15:53.690Z'
  },
  {
    _id: '6744fac54a6fced3a82069af',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T22:31:33.613Z'
  },
  {
    _id: '6744fae84a6fced3a82069b2',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T22:32:08.416Z'
  },
  {
    _id: '6744faf64a6fced3a82069b5',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T22:32:22.534Z'
  },
  {
    _id: '6745008a4a6fced3a82069b8',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T22:56:10.049Z'
  },
  {
    _id: '6745016f4a6fced3a82069bb',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T22:59:59.363Z'
  },
  {
    _id: '6745078b4a6fced3a82069be',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T23:26:03.152Z'
  },
  {
    _id: '674507ee4a6fced3a82069c1',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T23:27:42.259Z'
  },
  {
    _id: '67450d034a6fced3a82069c4',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T23:49:23.901Z'
  },
  {
    _id: '67450e234a6fced3a82069c7',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-25T23:54:11.423Z'
  },
  {
    _id: '67451c404a6fced3a82069ca',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T00:54:24.563Z'
  },
  {
    _id: '6745388b5b3af3b14e703e4c',
    username: 'fernando@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['usuario']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T02:55:07.679Z'
  },
  {
    _id: '674539015b3af3b14e703e4f',
    username: 'fernando@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['usuario']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T02:57:05.188Z'
  },
  {
    _id: '674539ed5b3af3b14e703e52',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerencia']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T03:01:01.572Z'
  },
  {
    _id: '67464c75fb947b9d8f1345fc',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T22:32:21.542Z'
  },
  {
    _id: '67464e76fb947b9d8f1345ff',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T22:40:54.600Z'
  },
  {
    _id: '67465010fb947b9d8f134602',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T22:47:44.392Z'
  },
  {
    _id: '67465467fb947b9d8f134605',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:06:15.874Z'
  },
  {
    _id: '67465486fb947b9d8f134608',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:06:46.773Z'
  },
  {
    _id: '674654a0fb947b9d8f13460b',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:07:12.283Z'
  },
  {
    _id: '674654e8fb947b9d8f13460e',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:24.889Z'
  },
  {
    _id: '674654eafb947b9d8f134611',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:26.171Z'
  },
  {
    _id: '674654ebfb947b9d8f134614',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:27.857Z'
  },
  {
    _id: '674654ebfb947b9d8f134617',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:27.911Z'
  },
  {
    _id: '674654ecfb947b9d8f13461a',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:28.607Z'
  },
  {
    _id: '674654edfb947b9d8f13461d',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:29.457Z'
  },
  {
    _id: '674654effb947b9d8f134620',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:31.386Z'
  },
  {
    _id: '674654f0fb947b9d8f134623',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:32.634Z'
  },
  {
    _id: '674654f9fb947b9d8f134626',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:41.966Z'
  },
  {
    _id: '674654fefb947b9d8f134629',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:08:46.536Z'
  },
  {
    _id: '67465689fb947b9d8f13462c',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:21.454Z'
  },
  {
    _id: '67465696fb947b9d8f13462f',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:34.718Z'
  },
  {
    _id: '674656aafb947b9d8f134632',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:54.094Z'
  },
  {
    _id: '674656abfb947b9d8f134635',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:55.508Z'
  },
  {
    _id: '674656acfb947b9d8f134638',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:56.286Z'
  },
  {
    _id: '674656acfb947b9d8f13463b',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:56.812Z'
  },
  {
    _id: '674656adfb947b9d8f13463e',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:57.206Z'
  },
  {
    _id: '674656adfb947b9d8f134641',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:15:57.793Z'
  },
  {
    _id: '674656d9fb947b9d8f134644',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:16:41.386Z'
  },
  {
    _id: '6746572ffb947b9d8f134647',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:18:07.509Z'
  },
  {
    _id: '67465779fb947b9d8f13464a',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:19:21.086Z'
  },
  {
    _id: '6746597bfb947b9d8f13464d',
    username: 'jeffbezos@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['gerente']
      },
      {
        module: 'blockchain',
        roles: ['gerente']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-26T23:27:55.702Z'
  },
  {
    _id: '67466216fb947b9d8f134650',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T00:04:38.717Z'
  },
  {
    _id: '67466234fb947b9d8f134653',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T00:05:08.152Z'
  },
  {
    _id: '67466261fb947b9d8f134656',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T00:05:53.262Z'
  },
  {
    _id: '6747a7030fb1e494abd5c149',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:10:59.590Z'
  },
  {
    _id: '6747a75e0fb1e494abd5c14c',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:12:30.646Z'
  },
  {
    _id: '6747a8010fb1e494abd5c14f',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:15:13.510Z'
  },
  {
    _id: '6747a90d0fb1e494abd5c152',
    username: 'ibai@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['inversor']
      },
      {
        module: 'artistas',
        roles: ['artista']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:19:41.635Z'
  },
  {
    _id: '6747a91e0fb1e494abd5c155',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:19:58.539Z'
  },
  {
    _id: '6747a98c0fb1e494abd5c158',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:21:48.790Z'
  },
  {
    _id: '6747af260fb1e494abd5c15c',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:45:42.975Z'
  },
  {
    _id: '6747af820fb1e494abd5c15f',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:47:14.806Z'
  },
  {
    _id: '6747b1650fb1e494abd5c162',
    username: 'danabramov@eventify.com',
    modules: [
      {
        module: 'analitica',
        roles: ['consultor']
      },
      {
        module: 'artistas',
        roles: ['consultor']
      },
      {
        module: 'crypto',
        roles: ['consultor']
      },
      {
        module: 'eda',
        roles: ['consultor']
      },
      {
        module: 'ventas',
        roles: ['consultor']
      },
      {
        module: 'wallet',
        roles: ['consultor']
      },
      {
        module: 'blockchain',
        roles: ['consultor']
      }
    ],
    action: 'login',
    isSuspicious: true,
    timestamp: '2024-11-27T23:55:17.549Z'
  }
];
