import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutStateInput } from './product-create-without-state.input';

@InputType()
export class ProductCreateOrConnectWithoutStateInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutStateInput, {nullable:false})
    @Type(() => ProductCreateWithoutStateInput)
    create!: ProductCreateWithoutStateInput;
}
