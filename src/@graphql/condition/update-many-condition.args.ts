import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionUpdateManyMutationInput } from './condition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ConditionWhereInput } from './condition-where.input';

@ArgsType()
export class UpdateManyConditionArgs {

    @Field(() => ConditionUpdateManyMutationInput, {nullable:false})
    @Type(() => ConditionUpdateManyMutationInput)
    data!: ConditionUpdateManyMutationInput;

    @Field(() => ConditionWhereInput, {nullable:true})
    @Type(() => ConditionWhereInput)
    where?: ConditionWhereInput;
}
