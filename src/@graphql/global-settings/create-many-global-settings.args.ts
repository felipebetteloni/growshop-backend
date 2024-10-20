import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GlobalSettingsCreateManyInput } from './global-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGlobalSettingsArgs {

    @Field(() => [GlobalSettingsCreateManyInput], {nullable:false})
    @Type(() => GlobalSettingsCreateManyInput)
    data!: Array<GlobalSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
