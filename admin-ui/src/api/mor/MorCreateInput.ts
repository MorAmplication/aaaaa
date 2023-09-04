import { InputJsonValue } from "../../types";

export type MorCreateInput = {
  test?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
