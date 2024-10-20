import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutStateInput } from './product-update-without-state.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutStateInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutStateInput, {nullable:false})
    @Type(() => ProductUpdateWithoutStateInput)
    data!: ProductUpdateWithoutStateInput;
}
