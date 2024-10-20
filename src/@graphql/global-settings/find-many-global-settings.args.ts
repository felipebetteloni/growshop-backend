import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GlobalSettingsWhereInput } from './global-settings-where.input';
import { Type } from 'class-transformer';
import { GlobalSettingsOrderByWithRelationInput } from './global-settings-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GlobalSettingsWhereUniqueInput } from './global-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GlobalSettingsScalarFieldEnum } from './global-settings-scalar-field.enum';

@ArgsType()
export class FindManyGlobalSettingsArgs {

    @Field(() => GlobalSettingsWhereInput, {nullable:true})
    @Type(() => GlobalSettingsWhereInput)
    where?: GlobalSettingsWhereInput;

    @Field(() => [GlobalSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GlobalSettingsOrderByWithRelationInput>;

    @Field(() => GlobalSettingsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GlobalSettingsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GlobalSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GlobalSettingsScalarFieldEnum>;
}
