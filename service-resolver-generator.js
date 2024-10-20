const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const parentFolderPath = './src';

const folders = fs.readdirSync(parentFolderPath);
const childFolders = folders.filter(
  (file) =>
    file !== 'prisma' &&
    file !== 'common' &&
    file !== 'config' &&
    file !== 'health' &&
    file !== 'user-old' &&
    fs.statSync(path.join(parentFolderPath, file)).isDirectory(),
);

function capitalizeWords(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function firstLetterToLowerCase(inputString) {
  if (typeof inputString !== 'string' || inputString.length === 0) {
    return inputString; // Return unchanged if input is not a non-empty string
  }

  return inputString.charAt(0).toLowerCase() + inputString.slice(1);
}

function generateClassName(str) {
  const fileNames = str.split('.');

  if (fileNames[0] === "index") 
    return;

  const n = ["args", "input", "enum"];
  const e = fileNames[1]?.toLowerCase();

  if (n.includes(e)) {
    fileNames.splice(2, 1);

    if (e === "input" && fileNames[0].indexOf("filter") > 0) {
      fileNames.splice(1, 1);
    }

    return capitalizeWords(fileNames.join('-'))
  } else {
    return capitalizeWords(fileNames[0])
  }
}

// Generate indexes
console.log('=========indexes=====');

for (let folder of childFolders) {
  const graphqlFolderPath = path.join(parentFolderPath, `${folder}/graphql`)
  const files = fs.readdirSync(graphqlFolderPath);
  let typescriptCode = ``;

  for (let file of files) {
    const className = generateClassName(file);
    if (className)
      typescriptCode = typescriptCode + `export { ${className} } from './${file.substring(0, file.length - 3)}';`;
  }

  const formattedCode = prettier.format(typescriptCode, {
    parser: 'typescript',
  });

  fs.writeFileSync(`./src/${folder}/graphql/index.ts`, formattedCode);
}

// Generate services
console.log('=========Services=====');

for (let folder of childFolders) {
  const serviceName = capitalizeWords(folder);
  console.log(`${serviceName}Service,`);

  const typescriptCode = `
    import { Injectable } from '@nestjs/common';
    import { PrismaService } from '../prisma/prisma.service';
    import { ${serviceName}, Prisma } from "@prisma/client";
    import { BaseCrudService } from 'src/common/base-crud.service';

    @Injectable()
    export class ${serviceName}Service extends BaseCrudService<
      ${serviceName},
      Prisma.${serviceName}FindFirstArgs,
      Prisma.${serviceName}FindUniqueArgs,
      Prisma.${serviceName}FindManyArgs,
      Prisma.${serviceName}GroupByArgs,
      Prisma.${serviceName}AggregateArgs,
      Prisma.${serviceName}CreateArgs,
      Prisma.${serviceName}CreateManyArgs,
      Prisma.${serviceName}UpdateArgs,
      Prisma.${serviceName}UpdateManyArgs,
      Prisma.${serviceName}DeleteArgs,
      Prisma.${serviceName}DeleteManyArgs
    > {
      constructor(prisma: PrismaService) {
        super(prisma);
      }
    }
    `;

  const formattedCode = prettier.format(typescriptCode, {
    parser: 'typescript',
  });

  fs.writeFileSync(`./src/${folder}/${folder}.service.ts`, formattedCode);
}

// Generate Resolvers
console.log('=========Resolvers=====');
for (let folder of childFolders) {
  const serviceName = capitalizeWords(folder);
  console.log(`${serviceName}Resolver,`);
  const service = firstLetterToLowerCase(serviceName);
  const typescriptCode = `
      import { ${serviceName}Service } from "src/${folder}/${folder}.service";
       import {
         ${serviceName},
         FindFirst${serviceName}Args,
         FindUnique${serviceName}Args,
         FindMany${serviceName}Args,
         ${serviceName}GroupBy,
         ${serviceName}GroupByArgs,
         Aggregate${serviceName},
         ${serviceName}AggregateArgs,
         CreateOne${serviceName}Args,
         CreateMany${serviceName}Args,
         UpdateOne${serviceName}Args,
         UpdateMany${serviceName}Args,
         DeleteOne${serviceName}Args,
         DeleteMany${serviceName}Args,
       } from "./graphql";
       import { AffectedRows } from "src/common/prisma/affected-rows.output";
       import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

       @Resolver(() => ${serviceName})
       export class ${serviceName}Resolver {
         constructor(private readonly ${service}Service: ${serviceName}Service) {}
       
         @Query(() => ${serviceName}, { nullable: false })
         findFirst${serviceName}(@Args() args: FindFirst${serviceName}Args) {
           this.${service}Service.findFirst(args);
         }
       
         @Query(() => ${serviceName}, { nullable: false })
         findUnique${serviceName}(@Args() args: FindUnique${serviceName}Args) {
           return this.${service}Service.findUnique(args);
         }
       
         @Query(() => [${serviceName}], { nullable: false })
         list${serviceName}s(@Args() args: FindMany${serviceName}Args) {
           return this.${service}Service.findMany(args);
         }
       
         @Query(() => [${serviceName}GroupBy], { nullable: false })
         groupBy${serviceName}(@Args() args: ${serviceName}GroupByArgs) {
           return this.${service}Service.groupBy(args);
         }
       
         @Query(() => Aggregate${serviceName}, { nullable: false })
         aggregate${serviceName}(@Args() args: ${serviceName}AggregateArgs) {
           return this.${service}Service.aggregate(args);
         }
       
         @Mutation(() => ${serviceName}, { nullable: true })
         create${serviceName}(@Args() args: CreateOne${serviceName}Args) {
           return this.${service}Service.create(args);
         }
       
         @Mutation(() => AffectedRows, { nullable: true })
         createMany${serviceName}(@Args() args: CreateMany${serviceName}Args) {
           return this.${service}Service.createMany(args);
         }
       
         @Mutation(() => ${serviceName}, { nullable: true })
         update${serviceName}(@Args() args: UpdateOne${serviceName}Args) {
           return this.${service}Service.update(args);
         }
       
         @Mutation(() => AffectedRows, { nullable: true })
         updateMany${serviceName}(@Args() args: UpdateMany${serviceName}Args) {
           return this.${service}Service.updateMany(args);
         }
       
         @Mutation(() => ${serviceName}, { nullable: true })
         delete${serviceName}(@Args() args: DeleteOne${serviceName}Args) {
           return this.${service}Service.delete(args);
         }
       
         @Mutation(() => AffectedRows, { nullable: true })
         deleteMany${serviceName}(@Args() args: DeleteMany${serviceName}Args) {
           return this.${service}Service.deleteMany(args);
         }
       }
      `;

  const formattedCode = prettier.format(typescriptCode, {
    parser: 'typescript',
  });

  fs.writeFileSync(
    `./src/${folder}/${folder}.resolver.ts`,
    formattedCode,
  );
}

// Generate Modules
console.log('=========Modules=====');

for (let folder of childFolders) {
  const serviceName = capitalizeWords(folder);
  console.log(`${serviceName}Module,`);

  const typescriptCode = `
    import { Module } from '@nestjs/common';
    import { PrismaModule } from '../prisma/prisma.module';
    import { ${serviceName}Resolver } from './${folder}.resolver';
    import { ${serviceName}Service } from './${folder}.service';

    @Module({
      imports: [PrismaModule],
      providers: [${serviceName}Resolver, ${serviceName}Service],
    })
    export class ${serviceName}Module {}

    `;

  const formattedCode = prettier.format(typescriptCode, {
    parser: 'typescript',
  });

  console.log(`import { ${serviceName}Module } from './${folder}/${folder}.module.ts';`);
  fs.writeFileSync(`./src/${folder}/${folder}.module.ts`, formattedCode);
}
