import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GlobalSettingsWhereInput } from './global-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGlobalSettingsArgs {

    @Field(() => GlobalSettingsWhereInput, {nullable:true})
    @Type(() => GlobalSettingsWhereInput)
    where?: GlobalSettingsWhereInput;
}
