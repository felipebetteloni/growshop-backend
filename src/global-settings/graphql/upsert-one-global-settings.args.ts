import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GlobalSettingsWhereUniqueInput } from './global-settings-where-unique.input';
import { Type } from 'class-transformer';
import { GlobalSettingsCreateInput } from './global-settings-create.input';
import { GlobalSettingsUpdateInput } from './global-settings-update.input';

@ArgsType()
export class UpsertOneGlobalSettingsArgs {

    @Field(() => GlobalSettingsWhereUniqueInput, {nullable:false})
    @Type(() => GlobalSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<GlobalSettingsWhereUniqueInput, 'id'>;

    @Field(() => GlobalSettingsCreateInput, {nullable:false})
    @Type(() => GlobalSettingsCreateInput)
    create!: GlobalSettingsCreateInput;

    @Field(() => GlobalSettingsUpdateInput, {nullable:false})
    @Type(() => GlobalSettingsUpdateInput)
    update!: GlobalSettingsUpdateInput;
}
