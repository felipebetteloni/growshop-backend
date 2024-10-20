import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutCityNestedInput } from '../product/product-unchecked-update-many-without-city-nested.input';

@InputType()
export class CityUncheckedUpdateWithoutNeighbourhoodInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    stateId?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutCityNestedInput;
}
