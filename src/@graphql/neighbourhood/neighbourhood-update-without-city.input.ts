import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUpdateManyWithoutNeighbourhoodNestedInput } from '../product/product-update-many-without-neighbourhood-nested.input';

@InputType()
export class NeighbourhoodUpdateWithoutCityInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutNeighbourhoodNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutNeighbourhoodNestedInput;
}
