import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MorWhereInput = {
  id?: StringFilter;
  test?: StringNullableFilter;
};
