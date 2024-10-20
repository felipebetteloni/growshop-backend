import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Type } from 'class-transformer';
import { ShareUpdateWithoutUserInput } from './share-update-without-user.input';
import { ShareCreateWithoutUserInput } from './share-create-without-user.input';

@InputType()
export class ShareUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;

    @Field(() => ShareUpdateWithoutUserInput, {nullable:false})
    @Type(() => ShareUpdateWithoutUserInput)
    update!: ShareUpdateWithoutUserInput;

    @Field(() => ShareCreateWithoutUserInput, {nullable:false})
    @Type(() => ShareCreateWithoutUserInput)
    create!: ShareCreateWithoutUserInput;
}
