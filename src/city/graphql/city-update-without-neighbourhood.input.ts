import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StateUpdateOneRequiredWithoutCitiesNestedInput } from '../../state/state-update-one-required-without-cities-nested.input';
import { ProductUpdateManyWithoutCityNestedInput } from '../../product/product-update-many-without-city-nested.input';

@InputType()
export class CityUpdateWithoutNeighbourhoodInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StateUpdateOneRequiredWithoutCitiesNestedInput, {nullable:true})
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput;

    @Field(() => ProductUpdateManyWithoutCityNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutCityNestedInput;
}
