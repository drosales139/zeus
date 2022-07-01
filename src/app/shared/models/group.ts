import { Employee } from "./employee";

export interface Group {
  id: number;
  name: string;
  list?: Employee[];
  allComplete: boolean
}
