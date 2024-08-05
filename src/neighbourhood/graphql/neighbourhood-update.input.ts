import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CityUpdateOneRequiredWithoutNeighbourhoodNestedInput } from '../city/city-update-one-required-without-neighbourhood-nested.input';
import { ProductUpdateManyWithoutNeighbourhoodNestedInput } from '../product/product-update-many-without-neighbourhood-nested.input';

@InputType()
export class NeighbourhoodUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CityUpdateOneRequiredWithoutNeighbourhoodNestedInput, {nullable:true})
    city?: CityUpdateOneRequiredWithoutNeighbourhoodNestedInput;

    @Field(() => ProductUpdateManyWithoutNeighbourhoodNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutNeighbourhoodNestedInput;
}
