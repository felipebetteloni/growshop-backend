import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImgUpdateManyMutationInput } from './product-img-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductImgWhereInput } from './product-img-where.input';

@ArgsType()
export class UpdateManyProductImgArgs {

    @Field(() => ProductImgUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductImgUpdateManyMutationInput)
    data!: ProductImgUpdateManyMutationInput;

    @Field(() => ProductImgWhereInput, {nullable:true})
    @Type(() => ProductImgWhereInput)
    where?: ProductImgWhereInput;
}
