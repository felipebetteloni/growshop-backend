import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutCountryNestedInput } from '../product/product-unchecked-update-many-without-country-nested.input';

@InputType()
export class CountryUncheckedUpdateWithoutStatesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUncheckedUpdateManyWithoutCountryNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutCountryNestedInput;
}
