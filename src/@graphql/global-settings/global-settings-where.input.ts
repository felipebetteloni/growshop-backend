import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class GlobalSettingsWhereInput {

    @Field(() => [GlobalSettingsWhereInput], {nullable:true})
    AND?: Array<GlobalSettingsWhereInput>;

    @Field(() => [GlobalSettingsWhereInput], {nullable:true})
    OR?: Array<GlobalSettingsWhereInput>;

    @Field(() => [GlobalSettingsWhereInput], {nullable:true})
    NOT?: Array<GlobalSettingsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;
}
