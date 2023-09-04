import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PolicyApprovalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PolicyApprovals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="eeee" source="eeee" />
        <TextField label="ID" source="id" />
        <TextField label="New field" source="newField" />
        <TextField label="test" source="test" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
