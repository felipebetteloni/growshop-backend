import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BannerWhereUniqueInput } from './banner-where-unique.input';
import { Type } from 'class-transformer';
import { BannerCreateInput } from './banner-create.input';
import { BannerUpdateInput } from './banner-update.input';

@ArgsType()
export class UpsertOneBannerArgs {

    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: Prisma.AtLeast<BannerWhereUniqueInput, 'id' | 'activeSorting'>;

    @Field(() => BannerCreateInput, {nullable:false})
    @Type(() => BannerCreateInput)
    create!: BannerCreateInput;

    @Field(() => BannerUpdateInput, {nullable:false})
    @Type(() => BannerUpdateInput)
    update!: BannerUpdateInput;
}
