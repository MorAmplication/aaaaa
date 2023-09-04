import { InputJsonValue } from "../../types";

export type MorUpdateInput = {
  test?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
};
