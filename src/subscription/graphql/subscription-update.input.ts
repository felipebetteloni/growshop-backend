import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from '../prisma/enum-subscription-type-field-update-operations.input';
import { UserUpdateOneRequiredWithoutSubscriptionsNestedInput } from '../user/user-update-one-required-without-subscriptions-nested.input';

@InputType()
export class SubscriptionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumSubscriptionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutSubscriptionsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput;
}
