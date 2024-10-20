import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutStateNestedInput } from '../product/product-unchecked-update-many-without-state-nested.input';

@InputType()
export class StateUncheckedUpdateWithoutCitiesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryId?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUncheckedUpdateManyWithoutStateNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutStateNestedInput;
}
