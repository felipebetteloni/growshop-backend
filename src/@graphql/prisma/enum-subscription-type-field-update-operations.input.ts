import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionType } from './subscription-type.enum';

@InputType()
export class EnumSubscriptionTypeFieldUpdateOperationsInput {

    @Field(() => SubscriptionType, {nullable:true})
    set?: keyof typeof SubscriptionType;
}
