import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateWithoutProductInput } from './sub-category-create-without-product.input';

@InputType()
export class SubCategoryCreateOrConnectWithoutProductInput {

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryCreateWithoutProductInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutProductInput)
    create!: SubCategoryCreateWithoutProductInput;
}
