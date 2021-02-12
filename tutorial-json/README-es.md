# tutorial-json

[Inglés](README.md) / [Español](README-es.md)

## Acerca de

tutorial-json es un tutorial sobre cómo escribir y leer archivos JSON, para así escribir tus propias bases de datos y acceder a otras.

Este tutorial fue escrito por [Aarón Montoya-Moraga](http://montoyamoraga.io/). Para revisar otros tutoriales, visita [http://montoyamoraga.io/tutorials](http://montoyamoraga.io/tutorials).

También está disponible en [inglés](README.md). Fue escrito usando  [Markdown](https://en.wikipedia.org/wiki/Markdown) y está alojado en [GitHub](https://github.com/).

## Introducción

JSON is a syntax for storing data.



It can be easily parsed by JavaScript, and it is heavily used in databases for this same reason.

The syntax of a JSON object can be summarized as follows:

* Data is organized in key/value pairs.
* Keys are Strings, written inside double quotes ""
* Values can be a String, a number, a JSON Object, an array, a boolean, null.
* Data is separated by commas.
* Curly braces {} store objects
* Square brackets [] store arrays
* The file extension is .json

## Writing your own JSON file

### example0.json

This is the simplest JSON object. It has one key/value between curly braces {}.

```json
{
  "key": "value"
}
```

### example1.json

Let's add more key/value pairs to this JSON object, making sure to add commas, and not using one after the last pair.

```json
{
  "key": "value",
  "otherKey": "otherValue",
  "lastKey": "lastValue"
}
```
### example2.json

Let's add now other types of values to the JSON object.

```json
{
  "key": "value",
  "otherKey": "otherValue",
  "aNumber": 38.0,
  "aBoolean": false,
  "null": null,
  "lastKey": "lastValue"
}
```

### example3.json

Now let's take this first JSON object inside of curly braces{}, and put it inside of an array, using square brackets []. After this first an array of JSON objects, write a second pair of curly brackets {} to create a second JSON object on the array, separating them with commas. Remember that the last key/value pair inside of each JSON object should not followed by a comma.

  ```json
[
  {
    "key": "value",
    "otherKey": "otherValue",
    "aNumber": 38.0,
    "aBoolean": false,
    "null": null,
    "lastKey": "lastValue"
  },
  {
    "testing": "value",
    "other-test": "otherValue"
  }
]
```

### example4.json

Now let's use a JSON object as a value

```json
[
  {
    "key": "value",
    "otherKey": "otherValue",
    "aNumber": 38.0,
    "aBoolean": false,
    "null": null,
    "lastKey": "lastValue"
  },
  {
    "testing": "value",
    "other-test": "otherValue",
    "jsonObjectAsValue": {
      "year": 2018,
      "month": "March"
    }
  }
]
```

## Typical mistakes

* Using keys that are not strings.
* Using single quotes instead of double quotes.
* Unmatched curly braces or square brackets.
* Missing a comma after each key/value pair.
* Using a comma after the last key/value pair.

## JSON and JavaScript

```javascript
//this returns a JavaScript object
JSON.parse()
```

## JSON in projects

* [transparency](http://montoyamoraga.io/transparency/): a project by [Aarón Montoya-Moraga](http://montoyamoraga.io/). A self-portrait as a database written in JSON format and programmed using p5.js.

## Contents of this repository:

* [json-files]()
* [examples](Examples in different languages)

This repository contains examples in:

* Processing
* p5.js
* Python
* JavaScript

## References

* [JSON syntax](https://www.w3schools.com/js/js_json_syntax.asp)
* [JSON validator](https://jsonlint.com/)

## Thanks

* Jen Kagan, for inspiring me to learn JSON in the first place with her beautiful work [https://whatisit.tech/](https://whatisit.tech/).
