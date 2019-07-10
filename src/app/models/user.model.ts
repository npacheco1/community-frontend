

export interface Users {
  id: number;
  name: string;
  address: string;
  phone: string;
  rut: string;
  email: string;
  created_at: string;
  updated_at: string;
  role_id : number;
  password : string;
  roles: Roles[];
  role_name: string;
  statusText: string;
  zone_id : number;
 
}

export interface Roles {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}


