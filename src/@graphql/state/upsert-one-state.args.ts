import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { Type } from 'class-transformer';
import { StateCreateInput } from './state-create.input';
import { StateUpdateInput } from './state-update.input';

@ArgsType()
export class UpsertOneStateArgs {

    @Field(() => StateWhereUniqueInput, {nullable:false})
    @Type(() => StateWhereUniqueInput)
    where!: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;

    @Field(() => StateCreateInput, {nullable:false})
    @Type(() => StateCreateInput)
    create!: StateCreateInput;

    @Field(() => StateUpdateInput, {nullable:false})
    @Type(() => StateUpdateInput)
    update!: StateUpdateInput;
}
