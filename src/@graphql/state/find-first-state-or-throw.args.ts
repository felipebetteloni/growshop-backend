import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StateWhereInput } from './state-where.input';
import { Type } from 'class-transformer';
import { StateOrderByWithRelationInput } from './state-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StateWhereUniqueInput } from './state-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StateScalarFieldEnum } from './state-scalar-field.enum';

@ArgsType()
export class FindFirstStateOrThrowArgs {

    @Field(() => StateWhereInput, {nullable:true})
    @Type(() => StateWhereInput)
    where?: StateWhereInput;

    @Field(() => [StateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StateOrderByWithRelationInput>;

    @Field(() => StateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StateWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StateScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StateScalarFieldEnum>;
}
