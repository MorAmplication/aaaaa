import { JsonValue } from "type-fest";

export type Mor = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
