import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedOneWithoutNeighbourhoodInput } from '../city/city-create-nested-one-without-neighbourhood.input';
import { ProductCreateNestedManyWithoutNeighbourhoodInput } from '../product/product-create-nested-many-without-neighbourhood.input';

@InputType()
export class NeighbourhoodCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CityCreateNestedOneWithoutNeighbourhoodInput, {nullable:false})
    city!: CityCreateNestedOneWithoutNeighbourhoodInput;

    @Field(() => ProductCreateNestedManyWithoutNeighbourhoodInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutNeighbourhoodInput;
}
