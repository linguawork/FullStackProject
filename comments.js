/*

Jade и Pug — это одно и то же!

Jade — старое имя для шаблонизатора, 
который позволяет генерировать HTML с помощью 
простого синтаксиса.

В 2016 году Jade был переименован в Pug.
Они оба делают одно и то же: помогают на сервере 
(например, в Node.js/Express) динамически создавать HTML,
 вставляя данные в шаблоны.

Отличия:
Jade — старое название.
Pug — актуальное название, с улучшениями и поддержкой.
Ты можешь использовать оба названия в 
зависимости от версии, но лучше использовать Pug,
 так как это актуальная версия

 Pug (ранее Jade) — это шаблонизатор для серверной части, 
 который помогает динамически генерировать HTML. 
 Он используется для упрощения написания HTML, 
 вставляя данные с сервера (например, из базы данных) 
 в шаблоны, и позволяет создавать страницы, которые изменяются
  в зависимости от данных.


в файле views/index.pug:

pug
Copy
doctype html
html
  head
    title Привет, мир!
  body
    h1 Пр

*/

//folder views deleted


//https://github.com/brian7346/express-threads-api
//Link to express and DB with Docker already made
//The link has the instruction for downloading the image of MongoDB
/*
  docker run --name mongo \
       -p 27017:27017 \
       -e MONGO_INITDB_ROOT_USERNAME="monty" \
       -e MONGO_INITDB_ROOT_PASSWORD="pass" \
       -d prismagraphql/mongo-single-replica:5.0.3
*/