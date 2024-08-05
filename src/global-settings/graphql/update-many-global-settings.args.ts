import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GlobalSettingsUpdateManyMutationInput } from './global-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GlobalSettingsWhereInput } from './global-settings-where.input';

@ArgsType()
export class UpdateManyGlobalSettingsArgs {

    @Field(() => GlobalSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => GlobalSettingsUpdateManyMutationInput)
    data!: GlobalSettingsUpdateManyMutationInput;

    @Field(() => GlobalSettingsWhereInput, {nullable:true})
    @Type(() => GlobalSettingsWhereInput)
    where?: GlobalSettingsWhereInput;
}
