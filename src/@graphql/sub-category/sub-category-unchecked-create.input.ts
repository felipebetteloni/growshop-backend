import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutSub_categoryInput } from '../product/product-unchecked-create-nested-many-without-sub-category.input';

@InputType()
export class SubCategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutSub_categoryInput, {nullable:true})
    Product?: ProductUncheckedCreateNestedManyWithoutSub_categoryInput;
}
