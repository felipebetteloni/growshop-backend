import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';
import { Type } from 'class-transformer';
import { ConditionCreateInput } from './condition-create.input';
import { ConditionUpdateInput } from './condition-update.input';

@ArgsType()
export class UpsertOneConditionArgs {

    @Field(() => ConditionWhereUniqueInput, {nullable:false})
    @Type(() => ConditionWhereUniqueInput)
    where!: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;

    @Field(() => ConditionCreateInput, {nullable:false})
    @Type(() => ConditionCreateInput)
    create!: ConditionCreateInput;

    @Field(() => ConditionUpdateInput, {nullable:false})
    @Type(() => ConditionUpdateInput)
    update!: ConditionUpdateInput;
}
