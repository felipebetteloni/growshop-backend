import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutProductInput } from './comment-create-without-product.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutProductInput } from './comment-create-or-connect-without-product.input';
import { CommentCreateManyProductInputEnvelope } from './comment-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutProductInput {

    @Field(() => [CommentCreateWithoutProductInput], {nullable:true})
    @Type(() => CommentCreateWithoutProductInput)
    create?: Array<CommentCreateWithoutProductInput>;

    @Field(() => [CommentCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutProductInput>;

    @Field(() => CommentCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyProductInputEnvelope)
    createMany?: CommentCreateManyProductInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
