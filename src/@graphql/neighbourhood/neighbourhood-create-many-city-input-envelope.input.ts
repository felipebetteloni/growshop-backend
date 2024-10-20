import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodCreateManyCityInput } from './neighbourhood-create-many-city.input';
import { Type } from 'class-transformer';

@InputType()
export class NeighbourhoodCreateManyCityInputEnvelope {

    @Field(() => [NeighbourhoodCreateManyCityInput], {nullable:false})
    @Type(() => NeighbourhoodCreateManyCityInput)
    data!: Array<NeighbourhoodCreateManyCityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
