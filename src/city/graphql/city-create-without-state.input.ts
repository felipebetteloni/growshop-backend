import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodCreateNestedManyWithoutCityInput } from '../../neighbourhood/neighbourhood-create-nested-many-without-city.input';
import { ProductCreateNestedManyWithoutCityInput } from '../../product/product-create-nested-many-without-city.input';

@InputType()
export class CityCreateWithoutStateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => NeighbourhoodCreateNestedManyWithoutCityInput, {nullable:true})
    neighbourhood?: NeighbourhoodCreateNestedManyWithoutCityInput;

    @Field(() => ProductCreateNestedManyWithoutCityInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutCityInput;
}
