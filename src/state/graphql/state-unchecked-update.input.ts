import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CityUncheckedUpdateManyWithoutStateNestedInput } from '../city/city-unchecked-update-many-without-state-nested.input';
import { ProductUncheckedUpdateManyWithoutStateNestedInput } from '../product/product-unchecked-update-many-without-state-nested.input';

@InputType()
export class StateUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryId?: StringFieldUpdateOperationsInput;

    @Field(() => CityUncheckedUpdateManyWithoutStateNestedInput, {nullable:true})
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutStateNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutStateNestedInput;
}
