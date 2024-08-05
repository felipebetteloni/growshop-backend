import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutBrandInput } from '../product/product-create-nested-many-without-brand.input';

@InputType()
export class BrandCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedManyWithoutBrandInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutBrandInput;
}
