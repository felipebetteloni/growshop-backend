import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUpdateWithoutNeighbourhoodInput } from './city-update-without-neighbourhood.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutNeighbourhoodInput } from './city-create-without-neighbourhood.input';
import { CityWhereInput } from './city-where.input';

@InputType()
export class CityUpsertWithoutNeighbourhoodInput {

    @Field(() => CityUpdateWithoutNeighbourhoodInput, {nullable:false})
    @Type(() => CityUpdateWithoutNeighbourhoodInput)
    update!: CityUpdateWithoutNeighbourhoodInput;

    @Field(() => CityCreateWithoutNeighbourhoodInput, {nullable:false})
    @Type(() => CityCreateWithoutNeighbourhoodInput)
    create!: CityCreateWithoutNeighbourhoodInput;

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;
}
