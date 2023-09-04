import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PolicyApprovalService } from "./policyApproval.service";
import { PolicyApprovalControllerBase } from "./base/policyApproval.controller.base";

@swagger.ApiTags("policyApprovals")
@common.Controller("policyApprovals")
export class PolicyApprovalController extends PolicyApprovalControllerBase {
  constructor(
    protected readonly service: PolicyApprovalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
