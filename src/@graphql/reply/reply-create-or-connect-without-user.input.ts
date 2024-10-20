import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';

@InputType()
export class ReplyCreateOrConnectWithoutUserInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => ReplyCreateWithoutUserInput, {nullable:false})
    @Type(() => ReplyCreateWithoutUserInput)
    create!: ReplyCreateWithoutUserInput;
}
