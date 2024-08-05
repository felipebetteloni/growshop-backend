import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutReviewInput } from './chat-create-without-review.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutReviewInput } from './chat-create-or-connect-without-review.input';
import { ChatUpsertWithoutReviewInput } from './chat-upsert-without-review.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateToOneWithWhereWithoutReviewInput } from './chat-update-to-one-with-where-without-review.input';

@InputType()
export class ChatUpdateOneRequiredWithoutReviewNestedInput {

    @Field(() => ChatCreateWithoutReviewInput, {nullable:true})
    @Type(() => ChatCreateWithoutReviewInput)
    create?: ChatCreateWithoutReviewInput;

    @Field(() => ChatCreateOrConnectWithoutReviewInput, {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutReviewInput)
    connectOrCreate?: ChatCreateOrConnectWithoutReviewInput;

    @Field(() => ChatUpsertWithoutReviewInput, {nullable:true})
    @Type(() => ChatUpsertWithoutReviewInput)
    upsert?: ChatUpsertWithoutReviewInput;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateToOneWithWhereWithoutReviewInput, {nullable:true})
    @Type(() => ChatUpdateToOneWithWhereWithoutReviewInput)
    update?: ChatUpdateToOneWithWhereWithoutReviewInput;
}
