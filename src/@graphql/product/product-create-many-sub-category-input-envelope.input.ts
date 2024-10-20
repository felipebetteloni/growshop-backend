import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManySub_categoryInput } from './product-create-many-sub-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManySub_categoryInputEnvelope {

    @Field(() => [ProductCreateManySub_categoryInput], {nullable:false})
    @Type(() => ProductCreateManySub_categoryInput)
    data!: Array<ProductCreateManySub_categoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
