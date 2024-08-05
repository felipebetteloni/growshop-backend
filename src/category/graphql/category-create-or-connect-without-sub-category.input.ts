import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutSubCategoryInput } from './category-create-without-sub-category.input';

@InputType()
export class CategoryCreateOrConnectWithoutSubCategoryInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutSubCategoryInput, {nullable:false})
    @Type(() => CategoryCreateWithoutSubCategoryInput)
    create!: CategoryCreateWithoutSubCategoryInput;
}
