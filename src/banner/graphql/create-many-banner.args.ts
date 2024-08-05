import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerCreateManyInput } from './banner-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBannerArgs {

    @Field(() => [BannerCreateManyInput], {nullable:false})
    @Type(() => BannerCreateManyInput)
    data!: Array<BannerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
