import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PolicyApprovalModuleBase } from "./base/policyApproval.module.base";
import { PolicyApprovalService } from "./policyApproval.service";
import { PolicyApprovalController } from "./policyApproval.controller";
import { PolicyApprovalResolver } from "./policyApproval.resolver";

@Module({
  imports: [PolicyApprovalModuleBase, forwardRef(() => AuthModule)],
  controllers: [PolicyApprovalController],
  providers: [PolicyApprovalService, PolicyApprovalResolver],
  exports: [PolicyApprovalService],
})
export class PolicyApprovalModule {}
