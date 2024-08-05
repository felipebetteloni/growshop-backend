import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { Type } from 'class-transformer';
import { ReplyUpdateWithoutUserInput } from './reply-update-without-user.input';

@InputType()
export class ReplyUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    @Type(() => ReplyWhereUniqueInput)
    where!: Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>;

    @Field(() => ReplyUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReplyUpdateWithoutUserInput)
    data!: ReplyUpdateWithoutUserInput;
}
