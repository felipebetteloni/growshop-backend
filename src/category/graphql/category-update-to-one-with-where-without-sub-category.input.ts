import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutSubCategoryInput } from './category-update-without-sub-category.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutSubCategoryInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutSubCategoryInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutSubCategoryInput)
    data!: CategoryUpdateWithoutSubCategoryInput;
}
