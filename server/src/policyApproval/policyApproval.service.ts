import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PolicyApprovalServiceBase } from "./base/policyApproval.service.base";

@Injectable()
export class PolicyApprovalService extends PolicyApprovalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
