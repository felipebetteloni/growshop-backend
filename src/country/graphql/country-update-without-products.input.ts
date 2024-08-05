import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StateUpdateManyWithoutCountryNestedInput } from '../state/state-update-many-without-country-nested.input';

@InputType()
export class CountryUpdateWithoutProductsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StateUpdateManyWithoutCountryNestedInput, {nullable:true})
    states?: StateUpdateManyWithoutCountryNestedInput;
}
