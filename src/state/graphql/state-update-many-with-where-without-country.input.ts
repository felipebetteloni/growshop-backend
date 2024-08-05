import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateScalarWhereInput } from './state-scalar-where.input';
import { Type } from 'class-transformer';
import { StateUpdateManyMutationInput } from './state-update-many-mutation.input';

@InputType()
export class StateUpdateManyWithWhereWithoutCountryInput {

    @Field(() => StateScalarWhereInput, {nullable:false})
    @Type(() => StateScalarWhereInput)
    where!: StateScalarWhereInput;

    @Field(() => StateUpdateManyMutationInput, {nullable:false})
    @Type(() => StateUpdateManyMutationInput)
    data!: StateUpdateManyMutationInput;
}
