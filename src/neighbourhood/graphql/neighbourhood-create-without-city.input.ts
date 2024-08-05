import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutNeighbourhoodInput } from '../product/product-create-nested-many-without-neighbourhood.input';

@InputType()
export class NeighbourhoodCreateWithoutCityInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductCreateNestedManyWithoutNeighbourhoodInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutNeighbourhoodInput;
}
