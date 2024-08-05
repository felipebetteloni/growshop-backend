import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';
import { Type } from 'class-transformer';
import { ReplyOrderByWithRelationInput } from './reply-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReplyCountAggregateInput } from './reply-count-aggregate.input';
import { ReplyMinAggregateInput } from './reply-min-aggregate.input';
import { ReplyMaxAggregateInput } from './reply-max-aggregate.input';

@ArgsType()
export class ReplyAggregateArgs {

    @Field(() => ReplyWhereInput, {nullable:true})
    @Type(() => ReplyWhereInput)
    where?: ReplyWhereInput;

    @Field(() => [ReplyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReplyOrderByWithRelationInput>;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReplyCountAggregateInput, {nullable:true})
    _count?: ReplyCountAggregateInput;

    @Field(() => ReplyMinAggregateInput, {nullable:true})
    _min?: ReplyMinAggregateInput;

    @Field(() => ReplyMaxAggregateInput, {nullable:true})
    _max?: ReplyMaxAggregateInput;
}
