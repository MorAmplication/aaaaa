import { JsonValue } from "type-fest";

export type Mor = {
  createdAt: Date;
  id: string;
  test: string | null;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
