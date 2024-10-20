import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StateUpdateManyMutationInput } from './state-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StateWhereInput } from './state-where.input';

@ArgsType()
export class UpdateManyStateArgs {

    @Field(() => StateUpdateManyMutationInput, {nullable:false})
    @Type(() => StateUpdateManyMutationInput)
    data!: StateUpdateManyMutationInput;

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;
}
