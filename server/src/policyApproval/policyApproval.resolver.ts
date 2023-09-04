import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PolicyApprovalResolverBase } from "./base/policyApproval.resolver.base";
import { PolicyApproval } from "./base/PolicyApproval";
import { PolicyApprovalService } from "./policyApproval.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PolicyApproval)
export class PolicyApprovalResolver extends PolicyApprovalResolverBase {
  constructor(
    protected readonly service: PolicyApprovalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
