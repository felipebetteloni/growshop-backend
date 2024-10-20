import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutReportInput } from '../product/product-create-nested-one-without-report.input';

@InputType()
export class ReportCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => ProductCreateNestedOneWithoutReportInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutReportInput;
}
