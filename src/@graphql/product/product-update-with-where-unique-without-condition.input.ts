import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutConditionInput } from './product-update-without-condition.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutConditionInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutConditionInput, {nullable:false})
    @Type(() => ProductUpdateWithoutConditionInput)
    data!: ProductUpdateWithoutConditionInput;
}
