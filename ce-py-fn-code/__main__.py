import os

def main(params):
  name = params.get("name", "world")
  greeting = "Hello " + name + "!"

  return {
        "headers": {
            "Content-Type": "application/json",
        },
        "statusCode": 200,
        "body": params,
  }
