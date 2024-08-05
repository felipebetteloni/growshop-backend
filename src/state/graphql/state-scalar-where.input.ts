import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class StateScalarWhereInput {

    @Field(() => [StateScalarWhereInput], {nullable:true})
    AND?: Array<StateScalarWhereInput>;

    @Field(() => [StateScalarWhereInput], {nullable:true})
    OR?: Array<StateScalarWhereInput>;

    @Field(() => [StateScalarWhereInput], {nullable:true})
    NOT?: Array<StateScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryId?: StringFilter;
}
