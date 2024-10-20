import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { StateResolver } from "./state.resolver";
import { StateService } from "./state.service";

@Module({
  imports: [PrismaModule],
  providers: [StateResolver, StateService],
})
export class StateModule {}
