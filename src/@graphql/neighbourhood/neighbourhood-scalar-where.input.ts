import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class NeighbourhoodScalarWhereInput {

    @Field(() => [NeighbourhoodScalarWhereInput], {nullable:true})
    AND?: Array<NeighbourhoodScalarWhereInput>;

    @Field(() => [NeighbourhoodScalarWhereInput], {nullable:true})
    OR?: Array<NeighbourhoodScalarWhereInput>;

    @Field(() => [NeighbourhoodScalarWhereInput], {nullable:true})
    NOT?: Array<NeighbourhoodScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cityId?: StringFilter;
}
