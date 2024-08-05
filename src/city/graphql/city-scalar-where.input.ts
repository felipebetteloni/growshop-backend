import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CityScalarWhereInput {

    @Field(() => [CityScalarWhereInput], {nullable:true})
    AND?: Array<CityScalarWhereInput>;

    @Field(() => [CityScalarWhereInput], {nullable:true})
    OR?: Array<CityScalarWhereInput>;

    @Field(() => [CityScalarWhereInput], {nullable:true})
    NOT?: Array<CityScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    stateId?: StringFilter;
}
