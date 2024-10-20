import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyNeighbourhoodInput } from './product-create-many-neighbourhood.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyNeighbourhoodInputEnvelope {

    @Field(() => [ProductCreateManyNeighbourhoodInput], {nullable:false})
    @Type(() => ProductCreateManyNeighbourhoodInput)
    data!: Array<ProductCreateManyNeighbourhoodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
