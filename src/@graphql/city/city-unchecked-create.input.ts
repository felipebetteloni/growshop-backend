import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodUncheckedCreateNestedManyWithoutCityInput } from '../neighbourhood/neighbourhood-unchecked-create-nested-many-without-city.input';
import { ProductUncheckedCreateNestedManyWithoutCityInput } from '../product/product-unchecked-create-nested-many-without-city.input';

@InputType()
export class CityUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    stateId!: string;

    @Field(() => NeighbourhoodUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    neighbourhood?: NeighbourhoodUncheckedCreateNestedManyWithoutCityInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCityInput;
}
