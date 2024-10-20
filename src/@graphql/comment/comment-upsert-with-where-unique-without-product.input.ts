import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutProductInput } from './comment-update-without-product.input';
import { CommentCreateWithoutProductInput } from './comment-create-without-product.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutProductInput, {nullable:false})
    @Type(() => CommentUpdateWithoutProductInput)
    update!: CommentUpdateWithoutProductInput;

    @Field(() => CommentCreateWithoutProductInput, {nullable:false})
    @Type(() => CommentCreateWithoutProductInput)
    create!: CommentCreateWithoutProductInput;
}
