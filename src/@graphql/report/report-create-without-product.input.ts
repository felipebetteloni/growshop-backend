import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReportsInput } from '../user/user-create-nested-one-without-reports.input';

@InputType()
export class ReportCreateWithoutProductInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReportsInput;
}
