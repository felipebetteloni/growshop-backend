import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodUncheckedCreateNestedManyWithoutCityInput } from '../../neighbourhood/neighbourhood-unchecked-create-nested-many-without-city.input';
import { ProductUncheckedCreateNestedManyWithoutCityInput } from '../../product/product-unchecked-create-nested-many-without-city.input';

@InputType()
export class CityUncheckedCreateWithoutStateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => NeighbourhoodUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    neighbourhood?: NeighbourhoodUncheckedCreateNestedManyWithoutCityInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCityInput;
}
