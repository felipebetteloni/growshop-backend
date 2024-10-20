import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodUncheckedCreateNestedManyWithoutCityInput } from '../neighbourhood/neighbourhood-unchecked-create-nested-many-without-city.input';

@InputType()
export class CityUncheckedCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    stateId!: string;

    @Field(() => NeighbourhoodUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    neighbourhood?: NeighbourhoodUncheckedCreateNestedManyWithoutCityInput;
}
