/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PolicyApprovalWhereInput } from "./PolicyApprovalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PolicyApprovalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PolicyApprovalWhereInput,
  })
  @ValidateNested()
  @Type(() => PolicyApprovalWhereInput)
  @IsOptional()
  @Field(() => PolicyApprovalWhereInput, {
    nullable: true,
  })
  every?: PolicyApprovalWhereInput;

  @ApiProperty({
    required: false,
    type: () => PolicyApprovalWhereInput,
  })
  @ValidateNested()
  @Type(() => PolicyApprovalWhereInput)
  @IsOptional()
  @Field(() => PolicyApprovalWhereInput, {
    nullable: true,
  })
  some?: PolicyApprovalWhereInput;

  @ApiProperty({
    required: false,
    type: () => PolicyApprovalWhereInput,
  })
  @ValidateNested()
  @Type(() => PolicyApprovalWhereInput)
  @IsOptional()
  @Field(() => PolicyApprovalWhereInput, {
    nullable: true,
  })
  none?: PolicyApprovalWhereInput;
}
export { PolicyApprovalListRelationFilter as PolicyApprovalListRelationFilter };