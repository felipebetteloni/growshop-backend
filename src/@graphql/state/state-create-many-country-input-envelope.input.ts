import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateManyCountryInput } from './state-create-many-country.input';
import { Type } from 'class-transformer';

@InputType()
export class StateCreateManyCountryInputEnvelope {

    @Field(() => [StateCreateManyCountryInput], {nullable:false})
    @Type(() => StateCreateManyCountryInput)
    data!: Array<StateCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
