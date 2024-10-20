import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSharesInput } from '../user/user-create-nested-one-without-shares.input';

@InputType()
export class ShareCreateWithoutProductInput {

    @Field(() => UserCreateNestedOneWithoutSharesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSharesInput;
}
