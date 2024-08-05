import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneConditionArgs {

    @Field(() => ConditionWhereUniqueInput, {nullable:false})
    @Type(() => ConditionWhereUniqueInput)
    where!: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;
}
