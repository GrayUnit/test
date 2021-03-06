import { StateClient } from "../enums/state-client.enum";

export interface ClientI {
  state: StateClient;
  tva: number;
  name: string;
  ca: number;
  comment: string;
  id: number;
}
