import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueStateOrThrowArgs {

    @Field(() => StateWhereUniqueInput, {nullable:false})
    @Type(() => StateWhereUniqueInput)
    where!: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;
}
