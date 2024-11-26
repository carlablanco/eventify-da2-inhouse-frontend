export interface LoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
  redirectUrl?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export async function loginUser(
  credentials: LoginRequest
): Promise<LoginResponse> {
  const response = await fetch(
    'https://back.intranet.deliver.ar:3001/api/v1/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(credentials)
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Invalid credentials');
  }

  return data;
}

//TBC
export async function getUser(id: string) {
  return await fetch(
    `https://back.intranet.deliver.ar:3001/api/v1/users/${id}`
  );
}

export async function getUsers(page?: number) {
  const response = await fetch(
    `https://back.intranet.deliver.ar:3001/api/v1/users?page=1`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Invalid credentials');
  }

  return data;
}

export async function getModulesHealthStatus() {
  const modules = [
    {
      name: 'EDA',
      url: 'https://edaapi.deliver.ar/v1/health'
    },
    {
      name: 'Ventas',
      url: 'https://eventify-sales.deliver.ar:3000/health'
    },
    {
      name: 'Artistas',
      url: 'https://artistasapi.deliver.ar/v1/health'
    },
    {
      name: 'Crypto',
      url: 'https://blockchainback.deliver.ar/blockchain/health'
    },
    {
      name: 'Analitica',
      url: 'https://analiticaapi.deliver.ar/v1/health'
    },
    {
      name: 'Wallet',
      url: 'https://walletapi.deliver.ar/v1/health'
    },
    {
      name: 'Intranet',
      url: 'https://back.intranet.deliver.ar:3001/api/v1/health'
    }
  ];

  return await Promise.all(
    modules.map(async (module) => {
      const response = await fetch(module.url).catch(() => ({
        json: () => ({ ok: false })
      }));
      const data = await response.json();
      return {
        name: module.name,
        isHealthy: data.ok,
        healthHistory: Array.from({ length: 10 }, () => Math.random() > 0.2)
      };
    })
  );
}
