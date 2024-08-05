import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GlobalSettingsCreateInput } from './global-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGlobalSettingsArgs {

    @Field(() => GlobalSettingsCreateInput, {nullable:false})
    @Type(() => GlobalSettingsCreateInput)
    data!: GlobalSettingsCreateInput;
}
