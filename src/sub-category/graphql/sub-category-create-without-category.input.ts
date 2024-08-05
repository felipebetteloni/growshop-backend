import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutSub_categoryInput } from '../product/product-create-nested-many-without-sub-category.input';

@InputType()
export class SubCategoryCreateWithoutCategoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedManyWithoutSub_categoryInput, {nullable:true})
    Product?: ProductCreateNestedManyWithoutSub_categoryInput;
}
