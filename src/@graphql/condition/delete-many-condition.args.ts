import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionWhereInput } from './condition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyConditionArgs {

    @Field(() => ConditionWhereInput, {nullable:true})
    @Type(() => ConditionWhereInput)
    where?: ConditionWhereInput;
}
