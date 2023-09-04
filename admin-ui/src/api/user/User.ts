import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  nlnb: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
