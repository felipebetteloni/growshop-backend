import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StateUncheckedUpdateManyWithoutCountryNestedInput } from '../state/state-unchecked-update-many-without-country-nested.input';

@InputType()
export class CountryUncheckedUpdateWithoutProductsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StateUncheckedUpdateManyWithoutCountryNestedInput, {nullable:true})
    states?: StateUncheckedUpdateManyWithoutCountryNestedInput;
}
