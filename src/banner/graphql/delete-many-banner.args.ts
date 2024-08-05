import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBannerArgs {

    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: BannerWhereInput;
}
