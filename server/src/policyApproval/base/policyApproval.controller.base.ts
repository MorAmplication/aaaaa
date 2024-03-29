/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PolicyApprovalService } from "../policyApproval.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PolicyApprovalCreateInput } from "./PolicyApprovalCreateInput";
import { PolicyApprovalWhereInput } from "./PolicyApprovalWhereInput";
import { PolicyApprovalWhereUniqueInput } from "./PolicyApprovalWhereUniqueInput";
import { PolicyApprovalFindManyArgs } from "./PolicyApprovalFindManyArgs";
import { PolicyApprovalUpdateInput } from "./PolicyApprovalUpdateInput";
import { PolicyApproval } from "./PolicyApproval";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PolicyApprovalControllerBase {
  constructor(
    protected readonly service: PolicyApprovalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PolicyApproval })
  @nestAccessControl.UseRoles({
    resource: "PolicyApproval",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: PolicyApprovalCreateInput
  ): Promise<PolicyApproval> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        eeee: true,
        id: true,
        newField: true,
        test: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PolicyApproval] })
  @ApiNestedQuery(PolicyApprovalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PolicyApproval",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<PolicyApproval[]> {
    const args = plainToClass(PolicyApprovalFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        eeee: true,
        id: true,
        newField: true,
        test: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PolicyApproval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PolicyApproval",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PolicyApprovalWhereUniqueInput
  ): Promise<PolicyApproval | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        eeee: true,
        id: true,
        newField: true,
        test: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PolicyApproval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PolicyApproval",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PolicyApprovalWhereUniqueInput,
    @common.Body() data: PolicyApprovalUpdateInput
  ): Promise<PolicyApproval | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          eeee: true,
          id: true,
          newField: true,
          test: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PolicyApproval })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PolicyApproval",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PolicyApprovalWhereUniqueInput
  ): Promise<PolicyApproval | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          eeee: true,
          id: true,
          newField: true,
          test: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
