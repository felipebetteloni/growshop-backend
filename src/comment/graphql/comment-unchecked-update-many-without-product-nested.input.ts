import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutProductInput } from './comment-create-without-product.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutProductInput } from './comment-create-or-connect-without-product.input';
import { CommentUpsertWithWhereUniqueWithoutProductInput } from './comment-upsert-with-where-unique-without-product.input';
import { CommentCreateManyProductInputEnvelope } from './comment-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutProductInput } from './comment-update-with-where-unique-without-product.input';
import { CommentUpdateManyWithWhereWithoutProductInput } from './comment-update-many-with-where-without-product.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [CommentCreateWithoutProductInput], {nullable:true})
    @Type(() => CommentCreateWithoutProductInput)
    create?: Array<CommentCreateWithoutProductInput>;

    @Field(() => [CommentCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutProductInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => CommentCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyProductInputEnvelope)
    createMany?: CommentCreateManyProductInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
