import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';
import { CityUpdateWithoutNeighbourhoodInput } from './city-update-without-neighbourhood.input';

@InputType()
export class CityUpdateToOneWithWhereWithoutNeighbourhoodInput {

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;

    @Field(() => CityUpdateWithoutNeighbourhoodInput, {nullable:false})
    @Type(() => CityUpdateWithoutNeighbourhoodInput)
    data!: CityUpdateWithoutNeighbourhoodInput;
}
