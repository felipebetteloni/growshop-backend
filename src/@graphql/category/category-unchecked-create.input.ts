import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutCategoryInput } from '../product/product-unchecked-create-nested-many-without-category.input';
import { SubCategoryUncheckedCreateNestedManyWithoutCategoryInput } from '../sub-category/sub-category-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput;

    @Field(() => SubCategoryUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    SubCategory?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput;
}
