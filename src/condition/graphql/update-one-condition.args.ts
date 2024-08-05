import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionUpdateInput } from './condition-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';

@ArgsType()
export class UpdateOneConditionArgs {

    @Field(() => ConditionUpdateInput, {nullable:false})
    @Type(() => ConditionUpdateInput)
    data!: ConditionUpdateInput;

    @Field(() => ConditionWhereUniqueInput, {nullable:false})
    @Type(() => ConditionWhereUniqueInput)
    where!: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;
}
