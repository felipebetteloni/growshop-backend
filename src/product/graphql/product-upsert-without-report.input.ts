import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutReportInput } from './product-update-without-report.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutReportInput } from './product-create-without-report.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutReportInput {

    @Field(() => ProductUpdateWithoutReportInput, {nullable:false})
    @Type(() => ProductUpdateWithoutReportInput)
    update!: ProductUpdateWithoutReportInput;

    @Field(() => ProductCreateWithoutReportInput, {nullable:false})
    @Type(() => ProductCreateWithoutReportInput)
    create!: ProductCreateWithoutReportInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
