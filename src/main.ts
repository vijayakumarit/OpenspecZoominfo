import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CatsModule } from './cats/cats.module';
import { AuthorsModule } from './authors/author.module';
import { BooksModule} from './books/book.module';
import {PetsModule } from './pets/pets.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cats
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options,{
    include: [CatsModule],
  });
  SwaggerModule.setup('api', app, document);


  //Authors 
  const secondOptions = new DocumentBuilder()
  .setTitle('Authors example')
  .setDescription('The Authors API description')
  .setVersion('1.0')
  .addTag('authors')
  .build();

const authorDocument = SwaggerModule.createDocument(app, secondOptions,{
  include: [AuthorsModule],
});
SwaggerModule.setup('api/authors', app, authorDocument);

  //Books
  const secondOptionsBook = new DocumentBuilder()
  .setTitle('Books example')
  .setDescription('The Books API description')
  .setVersion('1.0')
  .addTag('books')
  .build();

const bookDocument = SwaggerModule.createDocument(app, secondOptionsBook,{
  include: [BooksModule],
});
SwaggerModule.setup('api/books', app, bookDocument);

//Pets
  const secondOptionsPets = new DocumentBuilder()
  .setTitle('Pets example')
  .setDescription('The Pets API description')
  .setVersion('1.0')
  .addTag('Userpets')
  .build();

const petsDocument = SwaggerModule.createDocument(app, secondOptionsPets,{
  include: [PetsModule],
});
SwaggerModule.setup('api/Userpets', app, petsDocument);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
