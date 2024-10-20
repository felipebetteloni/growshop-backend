import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NeighbourhoodUncheckedUpdateManyWithoutCityNestedInput } from '../neighbourhood/neighbourhood-unchecked-update-many-without-city-nested.input';

@InputType()
export class CityUncheckedUpdateWithoutProductsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    stateId?: StringFieldUpdateOperationsInput;

    @Field(() => NeighbourhoodUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    neighbourhood?: NeighbourhoodUncheckedUpdateManyWithoutCityNestedInput;
}
