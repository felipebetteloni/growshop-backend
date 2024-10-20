import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConditionWhereInput } from './condition-where.input';
import { Type } from 'class-transformer';
import { ConditionOrderByWithRelationInput } from './condition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInput } from './condition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConditionScalarFieldEnum } from './condition-scalar-field.enum';

@ArgsType()
export class FindFirstConditionOrThrowArgs {

    @Field(() => ConditionWhereInput, {nullable:true})
    @Type(() => ConditionWhereInput)
    where?: ConditionWhereInput;

    @Field(() => [ConditionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConditionOrderByWithRelationInput>;

    @Field(() => ConditionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ConditionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ConditionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ConditionScalarFieldEnum>;
}
