import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandUpdateManyMutationInput } from './brand-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BrandWhereInput } from './brand-where.input';

@ArgsType()
export class UpdateManyBrandArgs {

    @Field(() => BrandUpdateManyMutationInput, {nullable:false})
    @Type(() => BrandUpdateManyMutationInput)
    data!: BrandUpdateManyMutationInput;

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;
}
