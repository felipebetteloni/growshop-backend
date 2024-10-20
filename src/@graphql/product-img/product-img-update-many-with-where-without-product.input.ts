import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImgScalarWhereInput } from './product-img-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductImgUpdateManyMutationInput } from './product-img-update-many-mutation.input';

@InputType()
export class ProductImgUpdateManyWithWhereWithoutProductInput {

    @Field(() => ProductImgScalarWhereInput, {nullable:false})
    @Type(() => ProductImgScalarWhereInput)
    where!: ProductImgScalarWhereInput;

    @Field(() => ProductImgUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductImgUpdateManyMutationInput)
    data!: ProductImgUpdateManyMutationInput;
}
