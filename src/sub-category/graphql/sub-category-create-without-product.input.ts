import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutSubCategoryInput } from '../category/category-create-nested-one-without-sub-category.input';

@InputType()
export class SubCategoryCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CategoryCreateNestedOneWithoutSubCategoryInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutSubCategoryInput;
}
