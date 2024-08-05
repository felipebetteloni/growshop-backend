import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyCountryInput } from './product-create-many-country.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyCountryInputEnvelope {

    @Field(() => [ProductCreateManyCountryInput], {nullable:false})
    @Type(() => ProductCreateManyCountryInput)
    data!: Array<ProductCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
