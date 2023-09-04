import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PolicyApprovalWhereInput = {
  eeee?: StringNullableFilter;
  id?: StringFilter;
  newField?: StringNullableFilter;
  test?: "red" | "green";
};
