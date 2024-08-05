import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerUpdateInput } from './banner-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BannerWhereUniqueInput } from './banner-where-unique.input';

@ArgsType()
export class UpdateOneBannerArgs {

    @Field(() => BannerUpdateInput, {nullable:false})
    @Type(() => BannerUpdateInput)
    data!: BannerUpdateInput;

    @Field(() => BannerWhereUniqueInput, {nullable:false})
    @Type(() => BannerWhereUniqueInput)
    where!: Prisma.AtLeast<BannerWhereUniqueInput, 'id' | 'activeSorting'>;
}
