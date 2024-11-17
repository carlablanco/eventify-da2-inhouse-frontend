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
      credentials: "include",
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
