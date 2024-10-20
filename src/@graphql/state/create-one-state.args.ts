import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StateCreateInput } from './state-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStateArgs {

    @Field(() => StateCreateInput, {nullable:false})
    @Type(() => StateCreateInput)
    data!: StateCreateInput;
}
