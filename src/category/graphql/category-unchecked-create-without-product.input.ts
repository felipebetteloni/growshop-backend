import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubCategoryUncheckedCreateNestedManyWithoutCategoryInput } from '../sub-category/sub-category-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SubCategoryUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    SubCategory?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput;
}
