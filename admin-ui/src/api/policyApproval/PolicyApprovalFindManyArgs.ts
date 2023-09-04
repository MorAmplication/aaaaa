import { PolicyApprovalWhereInput } from "./PolicyApprovalWhereInput";
import { PolicyApprovalOrderByInput } from "./PolicyApprovalOrderByInput";

export type PolicyApprovalFindManyArgs = {
  where?: PolicyApprovalWhereInput;
  orderBy?: Array<PolicyApprovalOrderByInput>;
  skip?: number;
  take?: number;
};
