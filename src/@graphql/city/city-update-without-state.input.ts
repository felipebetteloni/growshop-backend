import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NeighbourhoodUpdateManyWithoutCityNestedInput } from '../neighbourhood/neighbourhood-update-many-without-city-nested.input';
import { ProductUpdateManyWithoutCityNestedInput } from '../product/product-update-many-without-city-nested.input';

@InputType()
export class CityUpdateWithoutStateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NeighbourhoodUpdateManyWithoutCityNestedInput, {nullable:true})
    neighbourhood?: NeighbourhoodUpdateManyWithoutCityNestedInput;

    @Field(() => ProductUpdateManyWithoutCityNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutCityNestedInput;
}
