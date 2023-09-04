import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const PolicyApprovalCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="eeee" source="eeee" />
        <TextInput label="New field" source="newField" />
        <SelectInput
          source="test"
          label="test"
          choices={[
            { label: "Red", value: "red" },
            { label: "Green", value: "green" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
