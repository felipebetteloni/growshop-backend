import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutProductInput } from './comment-create-without-product.input';

@InputType()
export class CommentCreateOrConnectWithoutProductInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutProductInput, {nullable:false})
    @Type(() => CommentCreateWithoutProductInput)
    create!: CommentCreateWithoutProductInput;
}
