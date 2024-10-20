import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GlobalSettingsUpdateInput } from './global-settings-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GlobalSettingsWhereUniqueInput } from './global-settings-where-unique.input';

@ArgsType()
export class UpdateOneGlobalSettingsArgs {

    @Field(() => GlobalSettingsUpdateInput, {nullable:false})
    @Type(() => GlobalSettingsUpdateInput)
    data!: GlobalSettingsUpdateInput;

    @Field(() => GlobalSettingsWhereUniqueInput, {nullable:false})
    @Type(() => GlobalSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<GlobalSettingsWhereUniqueInput, 'id'>;
}
