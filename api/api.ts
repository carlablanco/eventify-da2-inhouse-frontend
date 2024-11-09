export interface LoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export async function loginUser(
  credentials: LoginRequest
): Promise<LoginResponse> {
  const response = await fetch('http://backend.eventify:3001/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Invalid credentials');
  }

  return data;
}

//TBC
export async function getUser(id: string) {
  return await fetch(`http://backend.eventify:3001/api/v1/users/${id}`);
}

export async function getUsers(page?: number) {
  const response = await fetch(
    `http://backend.eventify:3001/api/v1/users?page=1`
  ); //${(page)?page:1}
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Invalid credentials');
  }

  return data;
}
