import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionCreateInput } from './condition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneConditionArgs {

    @Field(() => ConditionCreateInput, {nullable:false})
    @Type(() => ConditionCreateInput)
    data!: ConditionCreateInput;
}
