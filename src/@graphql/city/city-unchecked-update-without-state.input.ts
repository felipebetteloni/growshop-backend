import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NeighbourhoodUncheckedUpdateManyWithoutCityNestedInput } from '../neighbourhood/neighbourhood-unchecked-update-many-without-city-nested.input';
import { ProductUncheckedUpdateManyWithoutCityNestedInput } from '../product/product-unchecked-update-many-without-city-nested.input';

@InputType()
export class CityUncheckedUpdateWithoutStateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NeighbourhoodUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    neighbourhood?: NeighbourhoodUncheckedUpdateManyWithoutCityNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutCityNestedInput;
}
