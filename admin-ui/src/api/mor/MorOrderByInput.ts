import { SortOrder } from "../../util/SortOrder";

export type MorOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  test?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
};
