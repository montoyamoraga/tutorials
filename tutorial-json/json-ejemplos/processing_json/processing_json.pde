//processing loading json file
//by aaron montoya-moraga
//march 2018

//the loaded json file should be inside a directory called 'data'

//this is the file
//{
//  "examples": {
//    "example-0": {
//      "example-string": "a-string",
//      "example-number": 0
//    },
//    "example-1": {
//      "example-string": "a-string",
//      "example-number": 0
//    }
//  }
//}

//declare json object
JSONObject json;

//example numbers inside of the json object
String[] exampleNumbers = {"example0", "example1"};

void setup() {

  //load the json file
  json = loadJSONObject("example.json");

  //retrieve the examples json object
  JSONObject examples = json.getJSONObject("examples");

  //retrieve each example inside of examples
  JSONObject example0 = examples.getJSONObject("example0");
  JSONObject example1 = examples.getJSONObject("example1");

  //retrieve strings inside of examples
  String exampleString0 = example0.getString("exampleString");
  String exampleString1 = example1.getString("exampleString");

  //retrieve integers inside of examples
  int exampleInt0 = example0.getInt("exampleInt");
  int exampleInt1 = example1.getInt("exampleInt");

  //print to console
  println("example0: " +  exampleString0 + ", " + exampleInt0);
  println("example1: " +  exampleString1 + ", " + exampleInt1);
}
