import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubCategoryWhereUniqueInput } from './sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { SubCategoryCreateWithoutCategoryInput } from './sub-category-create-without-category.input';

@InputType()
export class SubCategoryCreateOrConnectWithoutCategoryInput {

    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id'>;

    @Field(() => SubCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create!: SubCategoryCreateWithoutCategoryInput;
}
