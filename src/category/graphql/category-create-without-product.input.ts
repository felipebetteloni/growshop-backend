import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryCreateNestedManyWithoutCategoryInput } from '../sub-category/sub-category-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SubCategoryCreateNestedManyWithoutCategoryInput, {nullable:true})
    SubCategory?: SubCategoryCreateNestedManyWithoutCategoryInput;
}
