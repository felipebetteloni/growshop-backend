import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StateUpdateManyWithoutCountryNestedInput } from '../state/state-update-many-without-country-nested.input';
import { ProductUpdateManyWithoutCountryNestedInput } from '../product/product-update-many-without-country-nested.input';

@InputType()
export class CountryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StateUpdateManyWithoutCountryNestedInput, {nullable:true})
    states?: StateUpdateManyWithoutCountryNestedInput;

    @Field(() => ProductUpdateManyWithoutCountryNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutCountryNestedInput;
}
