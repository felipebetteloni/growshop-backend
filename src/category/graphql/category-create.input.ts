import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutCategoryInput } from '../../@generated/product/product-create-nested-many-without-category.input';
import { SubCategoryCreateNestedManyWithoutCategoryInput } from '../../@generated/sub-category/sub-category-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    Product?: ProductCreateNestedManyWithoutCategoryInput;

    @Field(() => SubCategoryCreateNestedManyWithoutCategoryInput, {nullable:true})
    SubCategory?: SubCategoryCreateNestedManyWithoutCategoryInput;
}
