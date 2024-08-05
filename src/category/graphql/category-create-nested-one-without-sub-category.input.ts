import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutSubCategoryInput } from './category-create-without-sub-category.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutSubCategoryInput } from './category-create-or-connect-without-sub-category.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutSubCategoryInput {

    @Field(() => CategoryCreateWithoutSubCategoryInput, {nullable:true})
    @Type(() => CategoryCreateWithoutSubCategoryInput)
    create?: CategoryCreateWithoutSubCategoryInput;

    @Field(() => CategoryCreateOrConnectWithoutSubCategoryInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutSubCategoryInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoryInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
