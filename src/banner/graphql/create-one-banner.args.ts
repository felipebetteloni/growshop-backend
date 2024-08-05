import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerCreateInput } from './banner-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBannerArgs {

    @Field(() => BannerCreateInput, {nullable:false})
    @Type(() => BannerCreateInput)
    data!: BannerCreateInput;
}
