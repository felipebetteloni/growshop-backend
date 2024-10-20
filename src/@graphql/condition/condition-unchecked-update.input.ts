import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutConditionNestedInput } from '../product/product-unchecked-update-many-without-condition-nested.input';

@InputType()
export class ConditionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductUncheckedUpdateManyWithoutConditionNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutConditionNestedInput;
}
