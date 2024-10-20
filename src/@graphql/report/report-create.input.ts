import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReportsInput } from '../user/user-create-nested-one-without-reports.input';
import { ProductCreateNestedOneWithoutReportInput } from '../product/product-create-nested-one-without-report.input';

@InputType()
export class ReportCreateInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => UserCreateNestedOneWithoutReportsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReportsInput;

    @Field(() => ProductCreateNestedOneWithoutReportInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutReportInput;
}
