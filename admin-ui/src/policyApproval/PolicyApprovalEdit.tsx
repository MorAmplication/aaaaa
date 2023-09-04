import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const PolicyApprovalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
