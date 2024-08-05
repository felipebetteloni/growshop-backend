import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutNeighbourhoodNestedInput } from '../product/product-unchecked-update-many-without-neighbourhood-nested.input';

@InputType()
export class NeighbourhoodUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUncheckedUpdateManyWithoutNeighbourhoodNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutNeighbourhoodNestedInput;
}
