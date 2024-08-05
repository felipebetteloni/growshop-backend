import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GlobalSettingsWhereUniqueInput } from './global-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGlobalSettingsOrThrowArgs {

    @Field(() => GlobalSettingsWhereUniqueInput, {nullable:false})
    @Type(() => GlobalSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<GlobalSettingsWhereUniqueInput, 'id'>;
}
