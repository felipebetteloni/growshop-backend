import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutReportInput } from './product-update-without-report.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutReportInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutReportInput, {nullable:false})
    @Type(() => ProductUpdateWithoutReportInput)
    data!: ProductUpdateWithoutReportInput;
}
