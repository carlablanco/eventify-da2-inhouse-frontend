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
      url: 'https://eventify-sales.deliver.ar/health'
    },
    {
      name: 'Blockchain',
      url: 'https://blockchainback.deliver.ar/blockchain/health'
    },
    {
      name: 'Analitica',
      url: 'https://analyticsapi.deliver.ar/api/health/'
    },
    {
      name: 'Wallet',
      url: 'https://wallet-backend.deliver.ar/health'
    },
    {
      name: 'Ventas',
      url: 'https://api.artists.deliver.ar/health'
    }
  ];

  const fetchWithTimeout = async (url: string, timeout: number) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return null;
    }
  };

  return Promise.all(
    modules.map(async (module) => {
      const response = await fetchWithTimeout(module.url, 1500);
      if (!response) {
        return {
          name: module.name,
          isHealthy: false,
          healthHistory: Array.from({ length: 10 }, () => false)
        };
      }

      const data = await response.json().catch(() => ({}));
      return {
        name: module.name,
        isHealthy:
          data?.ok ||
          data?.message?.includes('up and running') ||
          data?.message?.includes('healthy'),
        healthHistory: Array.from({ length: 10 }, () => Math.random() > 0.2)
      };
    })
  );
}

export async function getUserLoginLogs(): Promise<any> {
  try {
    const response = await fetch(
      'https://back.intranet.deliver.ar:3001/api/v1/logs',
      {
        credentials: 'include'
      }
    );
    if (!response.ok) {
      throw new Error('Error fetching logs');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching logs:', error);
    return [];
  }
}
