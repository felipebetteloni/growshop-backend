import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StateUpdateInput } from './state-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';

@ArgsType()
export class UpdateOneStateArgs {

    @Field(() => StateUpdateInput, {nullable:false})
    @Type(() => StateUpdateInput)
    data!: StateUpdateInput;

    @Field(() => StateWhereUniqueInput, {nullable:false})
    @Type(() => StateWhereUniqueInput)
    where!: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;
}
