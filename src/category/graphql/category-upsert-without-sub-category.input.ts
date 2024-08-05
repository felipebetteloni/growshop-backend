import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutSubCategoryInput } from './category-update-without-sub-category.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutSubCategoryInput } from './category-create-without-sub-category.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutSubCategoryInput {

    @Field(() => CategoryUpdateWithoutSubCategoryInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutSubCategoryInput)
    update!: CategoryUpdateWithoutSubCategoryInput;

    @Field(() => CategoryCreateWithoutSubCategoryInput, {nullable:false})
    @Type(() => CategoryCreateWithoutSubCategoryInput)
    create!: CategoryCreateWithoutSubCategoryInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
