import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutProductInput } from './category-create-without-product.input';

@InputType()
export class CategoryCreateOrConnectWithoutProductInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutProductInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductInput)
    create!: CategoryCreateWithoutProductInput;
}
