import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutProductInput } from './category-create-without-product.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutProductInput } from './category-create-or-connect-without-product.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutProductInput {

    @Field(() => CategoryCreateWithoutProductInput, {nullable:true})
    @Type(() => CategoryCreateWithoutProductInput)
    create?: CategoryCreateWithoutProductInput;

    @Field(() => CategoryCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
