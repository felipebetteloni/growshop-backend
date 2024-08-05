import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutSubCategoryInput } from './category-create-without-sub-category.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutSubCategoryInput } from './category-create-or-connect-without-sub-category.input';
import { CategoryUpsertWithoutSubCategoryInput } from './category-upsert-without-sub-category.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutSubCategoryInput } from './category-update-to-one-with-where-without-sub-category.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutSubCategoryNestedInput {

    @Field(() => CategoryCreateWithoutSubCategoryInput, {nullable:true})
    @Type(() => CategoryCreateWithoutSubCategoryInput)
    create?: CategoryCreateWithoutSubCategoryInput;

    @Field(() => CategoryCreateOrConnectWithoutSubCategoryInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutSubCategoryInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoryInput;

    @Field(() => CategoryUpsertWithoutSubCategoryInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutSubCategoryInput)
    upsert?: CategoryUpsertWithoutSubCategoryInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutSubCategoryInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutSubCategoryInput)
    update?: CategoryUpdateToOneWithWhereWithoutSubCategoryInput;
}
