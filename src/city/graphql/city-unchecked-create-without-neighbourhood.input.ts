import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutCityInput } from '../../product/product-unchecked-create-nested-many-without-city.input';

@InputType()
export class CityUncheckedCreateWithoutNeighbourhoodInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    stateId!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCityInput;
}
