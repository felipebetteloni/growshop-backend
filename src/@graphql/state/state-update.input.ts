import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CountryUpdateOneRequiredWithoutStatesNestedInput } from '../country/country-update-one-required-without-states-nested.input';
import { CityUpdateManyWithoutStateNestedInput } from '../city/city-update-many-without-state-nested.input';
import { ProductUpdateManyWithoutStateNestedInput } from '../product/product-update-many-without-state-nested.input';

@InputType()
export class StateUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CountryUpdateOneRequiredWithoutStatesNestedInput, {nullable:true})
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput;

    @Field(() => CityUpdateManyWithoutStateNestedInput, {nullable:true})
    cities?: CityUpdateManyWithoutStateNestedInput;

    @Field(() => ProductUpdateManyWithoutStateNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutStateNestedInput;
}
