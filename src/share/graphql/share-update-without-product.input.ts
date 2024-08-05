import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutSharesNestedInput } from '../user/user-update-one-required-without-shares-nested.input';

@InputType()
export class ShareUpdateWithoutProductInput {

    @Field(() => UserUpdateOneRequiredWithoutSharesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSharesNestedInput;
}
