import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateManyStateInput } from './city-create-many-state.input';
import { Type } from 'class-transformer';

@InputType()
export class CityCreateManyStateInputEnvelope {

    @Field(() => [CityCreateManyStateInput], {nullable:false})
    @Type(() => CityCreateManyStateInput)
    data!: Array<CityCreateManyStateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
