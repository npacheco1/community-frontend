
export interface Zones {
    id: number;
    name: string;
    description: string;
    grou_id : string;
    created_at: string;
    updated_at: string;
    statusText: string;
    
    groups:{[0]};
    namegroup : string;
    idzone : number;
   // roles: Roles[];
  }