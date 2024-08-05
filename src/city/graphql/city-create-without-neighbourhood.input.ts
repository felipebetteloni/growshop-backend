import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateNestedOneWithoutCitiesInput } from '../../state/state-create-nested-one-without-cities.input';
import { ProductCreateNestedManyWithoutCityInput } from '../../product/product-create-nested-many-without-city.input';

@InputType()
export class CityCreateWithoutNeighbourhoodInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => StateCreateNestedOneWithoutCitiesInput, {nullable:false})
    state!: StateCreateNestedOneWithoutCitiesInput;

    @Field(() => ProductCreateNestedManyWithoutCityInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutCityInput;
}
