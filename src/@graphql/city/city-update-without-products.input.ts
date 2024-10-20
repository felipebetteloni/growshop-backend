import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StateUpdateOneRequiredWithoutCitiesNestedInput } from '../state/state-update-one-required-without-cities-nested.input';
import { NeighbourhoodUpdateManyWithoutCityNestedInput } from '../neighbourhood/neighbourhood-update-many-without-city-nested.input';

@InputType()
export class CityUpdateWithoutProductsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StateUpdateOneRequiredWithoutCitiesNestedInput, {nullable:true})
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput;

    @Field(() => NeighbourhoodUpdateManyWithoutCityNestedInput, {nullable:true})
    neighbourhood?: NeighbourhoodUpdateManyWithoutCityNestedInput;
}
