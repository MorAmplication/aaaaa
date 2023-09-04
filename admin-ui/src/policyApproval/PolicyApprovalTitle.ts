import { PolicyApproval as TPolicyApproval } from "../api/policyApproval/PolicyApproval";

export const POLICYAPPROVAL_TITLE_FIELD = "eeee";

export const PolicyApprovalTitle = (record: TPolicyApproval): string => {
  return record.eeee || String(record.id);
};
