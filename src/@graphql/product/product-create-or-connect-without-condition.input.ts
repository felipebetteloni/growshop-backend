import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutConditionInput } from './product-create-without-condition.input';

@InputType()
export class ProductCreateOrConnectWithoutConditionInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutConditionInput, {nullable:false})
    @Type(() => ProductCreateWithoutConditionInput)
    create!: ProductCreateWithoutConditionInput;
}
