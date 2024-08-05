import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';
import { Type } from 'class-transformer';
import { ReplyCreateOrConnectWithoutUserInput } from './reply-create-or-connect-without-user.input';
import { ReplyUpsertWithWhereUniqueWithoutUserInput } from './reply-upsert-with-where-unique-without-user.input';
import { ReplyCreateManyUserInputEnvelope } from './reply-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutUserInput } from './reply-update-with-where-unique-without-user.input';
import { ReplyUpdateManyWithWhereWithoutUserInput } from './reply-update-many-with-where-without-user.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';

@InputType()
export class ReplyUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ReplyCreateWithoutUserInput], {nullable:true})
    @Type(() => ReplyCreateWithoutUserInput)
    create?: Array<ReplyCreateWithoutUserInput>;

    @Field(() => [ReplyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReplyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutUserInput>;

    @Field(() => [ReplyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReplyUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReplyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReplyCreateManyUserInputEnvelope)
    createMany?: ReplyCreateManyUserInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    @Type(() => ReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReplyWhereUniqueInput, 'id'>>;

    @Field(() => [ReplyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReplyUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReplyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReplyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReplyUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    @Type(() => ReplyScalarWhereInput)
    deleteMany?: Array<ReplyScalarWhereInput>;
}
