<div align="center">

# 🌲 ts2ast

*An experimental command line tool to parse TypeScript source file and output AST in JSON*

</div>

## Installation

Requires [Deno](https://deno.com), testing on v1.44.1.

```
deno --version 

▶ deno 1.44.1 (release, x86_64-unknown-linux-gnu)
v8 12.6.228.3
typescript 5.4.5
```

To compile this tool, run `deno task compile`.

## Usage

Specify TypeScript source file path in the first argument.

```
ts2ast path/to/example.ts
```


To try parse example source file, run `deno task example`.


<details>

<summary>Click to expand result ouput</summary>

```
▶ deno task example

{
  "pos": 0,
  "end": 456,
  "kind": 307,
  "id": 0,
  "flags": 0,
  "modifierFlagsCache": 0,
  "transformFlags": 268436609,
  "statements": [
    {
      "pos": 0,
      "end": 54,
      "kind": 265,
      "id": 0,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 1,
      "name": {
        "pos": 5,
        "end": 13,
        "kind": 80,
        "id": 0,
        "flags": 0,
        "transformFlags": 0,
        "escapedText": "Pattern"
      },
      "type": {
        "pos": 15,
        "end": 53,
        "kind": 192,
        "id": 0,
        "flags": 0,
        "modifierFlagsCache": 0,
        "transformFlags": 1,
        "types": [
          {
            "pos": 15,
            "end": 22,
            "kind": 201,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "literal": {
              "pos": 15,
              "end": 22,
              "kind": 11,
              "id": 0,
              "flags": 0,
              "modifierFlagsCache": 0,
              "transformFlags": 0,
              "text": "Fizz",
              "hasExtendedUnicodeEscape": false
            }
          },
          {
            "pos": 24,
            "end": 31,
            "kind": 201,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "literal": {
              "pos": 24,
              "end": 31,
              "kind": 11,
              "id": 0,
              "flags": 0,
              "modifierFlagsCache": 0,
              "transformFlags": 0,
              "text": "Buzz",
              "hasExtendedUnicodeEscape": false
            }
          },
          {
            "pos": 33,
            "end": 44,
            "kind": 201,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1,
            "literal": {
              "pos": 33,
              "end": 44,
              "kind": 11,
              "id": 0,
              "flags": 0,
              "modifierFlagsCache": 0,
              "transformFlags": 0,
              "text": "FizzBuzz",
              "hasExtendedUnicodeEscape": false
            }
          },
          {
            "pos": 46,
            "end": 53,
            "kind": 150,
            "id": 0,
            "flags": 0,
            "transformFlags": 1
          }
        ]
      }
    },
    {
      "pos": 54,
      "end": 411,
      "kind": 262,
      "id": 0,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 272893057,
      "name": {
        "pos": 64,
        "end": 73,
        "kind": 80,
        "id": 0,
        "flags": 0,
        "transformFlags": 0,
        "escapedText": "fizzBuzz"
      },
      "parameters": [
        {
          "pos": 74,
          "end": 83,
          "kind": 169,
          "id": 0,
          "flags": 0,
          "modifierFlagsCache": 0,
          "transformFlags": 1,
          "name": {
            "pos": 74,
            "end": 75,
            "kind": 80,
            "id": 0,
            "flags": 0,
            "transformFlags": 0,
            "escapedText": "n"
          },
          "type": {
            "pos": 76,
            "end": 83,
            "kind": 150,
            "id": 0,
            "flags": 0,
            "transformFlags": 1
          }
        }
      ],
      "type": {
        "pos": 85,
        "end": 95,
        "kind": 188,
        "id": 0,
        "flags": 0,
        "modifierFlagsCache": 0,
        "transformFlags": 1,
        "elementType": {
          "pos": 85,
          "end": 93,
          "kind": 183,
          "id": 0,
          "flags": 0,
          "modifierFlagsCache": 0,
          "transformFlags": 1,
          "typeName": {
            "pos": 85,
            "end": 93,
            "kind": 80,
            "id": 0,
            "flags": 0,
            "transformFlags": 0,
            "escapedText": "Pattern"
          }
        }
      },
      "body": {
        "pos": 95,
        "end": 411,
        "kind": 241,
        "id": 0,
        "flags": 0,
        "modifierFlagsCache": 0,
        "transformFlags": 272893057,
        "statements": [
          {
            "pos": 97,
            "end": 129,
            "kind": 243,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 4457473,
            "declarationList": {
              "pos": 97,
              "end": 128,
              "kind": 261,
              "id": 0,
              "flags": 2,
              "modifierFlagsCache": 0,
              "transformFlags": 4457473,
              "declarations": [
                {
                  "pos": 105,
                  "end": 128,
                  "kind": 260,
                  "id": 0,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 1,
                  "name": {
                    "pos": 105,
                    "end": 112,
                    "kind": 80,
                    "id": 0,
                    "flags": 0,
                    "transformFlags": 0,
                    "escapedText": "result"
                  },
                  "type": {
                    "pos": 113,
                    "end": 123,
                    "kind": 188,
                    "id": 0,
                    "flags": 0,
                    "modifierFlagsCache": 0,
                    "transformFlags": 1,
                    "elementType": {
                      "pos": 113,
                      "end": 121,
                      "kind": 183,
                      "id": 0,
                      "flags": 0,
                      "modifierFlagsCache": 0,
                      "transformFlags": 1,
                      "typeName": {
                        "pos": 113,
                        "end": 121,
                        "kind": 80,
                        "id": 0,
                        "flags": 0,
                        "transformFlags": 0,
                        "escapedText": "Pattern"
                      }
                    }
                  },
                  "initializer": {
                    "pos": 125,
                    "end": 128,
                    "kind": 209,
                    "id": 0,
                    "flags": 0,
                    "modifierFlagsCache": 0,
                    "transformFlags": 0,
                    "elements": [],
                    "multiLine": false
                  }
                }
              ]
            }
          },
          {
            "pos": 129,
            "end": 391,
            "kind": 248,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 272892928,
            "initializer": {
              "pos": 138,
              "end": 147,
              "kind": 261,
              "id": 0,
              "flags": 1,
              "modifierFlagsCache": 0,
              "transformFlags": 4457472,
              "declarations": [
                {
                  "pos": 141,
                  "end": 147,
                  "kind": 260,
                  "id": 0,
                  "flags": 8192,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "name": {
                    "pos": 141,
                    "end": 143,
                    "kind": 80,
                    "id": 0,
                    "flags": 8192,
                    "transformFlags": 0,
                    "escapedText": "i"
                  },
                  "initializer": {
                    "pos": 145,
                    "end": 147,
                    "kind": 9,
                    "id": 0,
                    "flags": 8192,
                    "modifierFlagsCache": 0,
                    "transformFlags": 0,
                    "text": "1",
                    "numericLiteralFlags": 0
                  }
                }
              ]
            },
            "condition": {
              "pos": 148,
              "end": 155,
              "kind": 226,
              "id": 0,
              "flags": 0,
              "modifierFlagsCache": 0,
              "transformFlags": 0,
              "left": {
                "pos": 148,
                "end": 150,
                "kind": 80,
                "id": 0,
                "flags": 0,
                "transformFlags": 0,
                "escapedText": "i"
              },
              "operatorToken": {
                "pos": 150,
                "end": 153,
                "kind": 33,
                "id": 0,
                "flags": 0,
                "transformFlags": 0
              },
              "right": {
                "pos": 153,
                "end": 155,
                "kind": 80,
                "id": 0,
                "flags": 0,
                "transformFlags": 0,
                "escapedText": "n"
              }
            },
            "incrementor": {
              "pos": 156,
              "end": 160,
              "kind": 225,
              "id": 0,
              "flags": 0,
              "modifierFlagsCache": 0,
              "transformFlags": 268435456,
              "operator": 46,
              "operand": {
                "pos": 156,
                "end": 158,
                "kind": 80,
                "id": 0,
                "flags": 0,
                "transformFlags": 0,
                "escapedText": "i"
              }
            },
            "statement": {
              "pos": 161,
              "end": 391,
              "kind": 241,
              "id": 0,
              "flags": 0,
              "modifierFlagsCache": 0,
              "transformFlags": 0,
              "statements": [
                {
                  "pos": 163,
                  "end": 387,
                  "kind": 245,
                  "id": 0,
                  "flags": 0,
                  "modifierFlagsCache": 0,
                  "transformFlags": 0,
                  "expression": {
                    "pos": 172,
                    "end": 198,
                    "kind": 226,
                    "id": 0,
                    "flags": 0,
                    "modifierFlagsCache": 0,
                    "transformFlags": 0,
                    "left": {
                      "pos": 172,
                      "end": 183,
                      "kind": 226,
                      "id": 0,
                      "flags": 0,
                      "modifierFlagsCache": 0,
                      "transformFlags": 0,
                      "left": {
                        "pos": 172,
                        "end": 177,
                        "kind": 226,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "left": {
                          "pos": 172,
                          "end": 173,
                          "kind": 80,
                          "id": 0,
                          "flags": 0,
                          "transformFlags": 0,
                          "escapedText": "i"
                        },
                        "operatorToken": {
                          "pos": 173,
                          "end": 175,
                          "kind": 45,
                          "id": 0,
                          "flags": 0,
                          "transformFlags": 0
                        },
                        "right": {
                          "pos": 175,
                          "end": 177,
                          "kind": 9,
                          "id": 0,
                          "flags": 0,
                          "modifierFlagsCache": 0,
                          "transformFlags": 0,
                          "text": "3",
                          "numericLiteralFlags": 0
                        }
                      },
                      "operatorToken": {
                        "pos": 177,
                        "end": 181,
                        "kind": 37,
                        "id": 0,
                        "flags": 0,
                        "transformFlags": 0
                      },
                      "right": {
                        "pos": 181,
                        "end": 183,
                        "kind": 9,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "text": "0",
                        "numericLiteralFlags": 0
                      }
                    },
                    "operatorToken": {
                      "pos": 183,
                      "end": 186,
                      "kind": 56,
                      "id": 0,
                      "flags": 0,
                      "transformFlags": 0
                    },
                    "right": {
                      "pos": 186,
                      "end": 198,
                      "kind": 226,
                      "id": 0,
                      "flags": 0,
                      "modifierFlagsCache": 0,
                      "transformFlags": 0,
                      "left": {
                        "pos": 186,
                        "end": 192,
                        "kind": 226,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "left": {
                          "pos": 186,
                          "end": 188,
                          "kind": 80,
                          "id": 0,
                          "flags": 0,
                          "transformFlags": 0,
                          "escapedText": "i"
                        },
                        "operatorToken": {
                          "pos": 188,
                          "end": 190,
                          "kind": 45,
                          "id": 0,
                          "flags": 0,
                          "transformFlags": 0
                        },
                        "right": {
                          "pos": 190,
                          "end": 192,
                          "kind": 9,
                          "id": 0,
                          "flags": 0,
                          "modifierFlagsCache": 0,
                          "transformFlags": 0,
                          "text": "5",
                          "numericLiteralFlags": 0
                        }
                      },
                      "operatorToken": {
                        "pos": 192,
                        "end": 196,
                        "kind": 37,
                        "id": 0,
                        "flags": 0,
                        "transformFlags": 0
                      },
                      "right": {
                        "pos": 196,
                        "end": 198,
                        "kind": 9,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "text": "0",
                        "numericLiteralFlags": 0
                      }
                    }
                  },
                  "thenStatement": {
                    "pos": 199,
                    "end": 238,
                    "kind": 241,
                    "id": 0,
                    "flags": 0,
                    "modifierFlagsCache": 0,
                    "transformFlags": 0,
                    "statements": [
                      {
                        "pos": 201,
                        "end": 232,
                        "kind": 244,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "expression": {
                          "pos": 201,
                          "end": 231,
                          "kind": 213,
                          "id": 0,
                          "flags": 0,
                          "modifierFlagsCache": 0,
                          "transformFlags": 0,
                          "expression": {
                            "pos": 201,
                            "end": 219,
                            "kind": 211,
                            "id": 0,
                            "flags": 0,
                            "modifierFlagsCache": 0,
                            "transformFlags": 0,
                            "expression": {
                              "pos": 201,
                              "end": 214,
                              "kind": 80,
                              "id": 0,
                              "flags": 0,
                              "transformFlags": 0,
                              "escapedText": "result"
                            },
                            "name": {
                              "pos": 215,
                              "end": 219,
                              "kind": 80,
                              "id": 0,
                              "flags": 0,
                              "transformFlags": 0,
                              "escapedText": "push"
                            }
                          },
                          "arguments": [
                            {
                              "pos": 220,
                              "end": 230,
                              "kind": 11,
                              "id": 0,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "text": "FizzBuzz",
                              "hasExtendedUnicodeEscape": false
                            }
                          ]
                        }
                      }
                    ],
                    "multiLine": true
                  },
                  "elseStatement": {
                    "pos": 243,
                    "end": 387,
                    "kind": 245,
                    "id": 0,
                    "flags": 0,
                    "modifierFlagsCache": 0,
                    "transformFlags": 0,
                    "expression": {
                      "pos": 248,
                      "end": 259,
                      "kind": 226,
                      "id": 0,
                      "flags": 0,
                      "modifierFlagsCache": 0,
                      "transformFlags": 0,
                      "left": {
                        "pos": 248,
                        "end": 253,
                        "kind": 226,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "left": {
                          "pos": 248,
                          "end": 249,
                          "kind": 80,
                          "id": 0,
                          "flags": 0,
                          "transformFlags": 0,
                          "escapedText": "i"
                        },
                        "operatorToken": {
                          "pos": 249,
                          "end": 251,
                          "kind": 45,
                          "id": 0,
                          "flags": 0,
                          "transformFlags": 0
                        },
                        "right": {
                          "pos": 251,
                          "end": 253,
                          "kind": 9,
                          "id": 0,
                          "flags": 0,
                          "modifierFlagsCache": 0,
                          "transformFlags": 0,
                          "text": "3",
                          "numericLiteralFlags": 0
                        }
                      },
                      "operatorToken": {
                        "pos": 253,
                        "end": 257,
                        "kind": 37,
                        "id": 0,
                        "flags": 0,
                        "transformFlags": 0
                      },
                      "right": {
                        "pos": 257,
                        "end": 259,
                        "kind": 9,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "text": "0",
                        "numericLiteralFlags": 0
                      }
                    },
                    "thenStatement": {
                      "pos": 260,
                      "end": 295,
                      "kind": 241,
                      "id": 0,
                      "flags": 0,
                      "modifierFlagsCache": 0,
                      "transformFlags": 0,
                      "statements": [
                        {
                          "pos": 262,
                          "end": 289,
                          "kind": 244,
                          "id": 0,
                          "flags": 0,
                          "modifierFlagsCache": 0,
                          "transformFlags": 0,
                          "expression": {
                            "pos": 262,
                            "end": 288,
                            "kind": 213,
                            "id": 0,
                            "flags": 0,
                            "modifierFlagsCache": 0,
                            "transformFlags": 0,
                            "expression": {
                              "pos": 262,
                              "end": 280,
                              "kind": 211,
                              "id": 0,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "expression": {
                                "pos": 262,
                                "end": 275,
                                "kind": 80,
                                "id": 0,
                                "flags": 0,
                                "transformFlags": 0,
                                "escapedText": "result"
                              },
                              "name": {
                                "pos": 276,
                                "end": 280,
                                "kind": 80,
                                "id": 0,
                                "flags": 0,
                                "transformFlags": 0,
                                "escapedText": "push"
                              }
                            },
                            "arguments": [
                              {
                                "pos": 281,
                                "end": 287,
                                "kind": 11,
                                "id": 0,
                                "flags": 0,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "text": "Fizz",
                                "hasExtendedUnicodeEscape": false
                              }
                            ]
                          }
                        }
                      ],
                      "multiLine": true
                    },
                    "elseStatement": {
                      "pos": 300,
                      "end": 387,
                      "kind": 245,
                      "id": 0,
                      "flags": 0,
                      "modifierFlagsCache": 0,
                      "transformFlags": 0,
                      "expression": {
                        "pos": 305,
                        "end": 316,
                        "kind": 226,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "left": {
                          "pos": 305,
                          "end": 310,
                          "kind": 226,
                          "id": 0,
                          "flags": 0,
                          "modifierFlagsCache": 0,
                          "transformFlags": 0,
                          "left": {
                            "pos": 305,
                            "end": 306,
                            "kind": 80,
                            "id": 0,
                            "flags": 0,
                            "transformFlags": 0,
                            "escapedText": "i"
                          },
                          "operatorToken": {
                            "pos": 306,
                            "end": 308,
                            "kind": 45,
                            "id": 0,
                            "flags": 0,
                            "transformFlags": 0
                          },
                          "right": {
                            "pos": 308,
                            "end": 310,
                            "kind": 9,
                            "id": 0,
                            "flags": 0,
                            "modifierFlagsCache": 0,
                            "transformFlags": 0,
                            "text": "5",
                            "numericLiteralFlags": 0
                          }
                        },
                        "operatorToken": {
                          "pos": 310,
                          "end": 314,
                          "kind": 37,
                          "id": 0,
                          "flags": 0,
                          "transformFlags": 0
                        },
                        "right": {
                          "pos": 314,
                          "end": 316,
                          "kind": 9,
                          "id": 0,
                          "flags": 0,
                          "modifierFlagsCache": 0,
                          "transformFlags": 0,
                          "text": "0",
                          "numericLiteralFlags": 0
                        }
                      },
                      "thenStatement": {
                        "pos": 317,
                        "end": 352,
                        "kind": 241,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "statements": [
                          {
                            "pos": 319,
                            "end": 346,
                            "kind": 244,
                            "id": 0,
                            "flags": 0,
                            "modifierFlagsCache": 0,
                            "transformFlags": 0,
                            "expression": {
                              "pos": 319,
                              "end": 345,
                              "kind": 213,
                              "id": 0,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "expression": {
                                "pos": 319,
                                "end": 337,
                                "kind": 211,
                                "id": 0,
                                "flags": 0,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "expression": {
                                  "pos": 319,
                                  "end": 332,
                                  "kind": 80,
                                  "id": 0,
                                  "flags": 0,
                                  "transformFlags": 0,
                                  "escapedText": "result"
                                },
                                "name": {
                                  "pos": 333,
                                  "end": 337,
                                  "kind": 80,
                                  "id": 0,
                                  "flags": 0,
                                  "transformFlags": 0,
                                  "escapedText": "push"
                                }
                              },
                              "arguments": [
                                {
                                  "pos": 338,
                                  "end": 344,
                                  "kind": 11,
                                  "id": 0,
                                  "flags": 0,
                                  "modifierFlagsCache": 0,
                                  "transformFlags": 0,
                                  "text": "Buzz",
                                  "hasExtendedUnicodeEscape": false
                                }
                              ]
                            }
                          }
                        ],
                        "multiLine": true
                      },
                      "elseStatement": {
                        "pos": 357,
                        "end": 387,
                        "kind": 241,
                        "id": 0,
                        "flags": 0,
                        "modifierFlagsCache": 0,
                        "transformFlags": 0,
                        "statements": [
                          {
                            "pos": 359,
                            "end": 381,
                            "kind": 244,
                            "id": 0,
                            "flags": 0,
                            "modifierFlagsCache": 0,
                            "transformFlags": 0,
                            "expression": {
                              "pos": 359,
                              "end": 380,
                              "kind": 213,
                              "id": 0,
                              "flags": 0,
                              "modifierFlagsCache": 0,
                              "transformFlags": 0,
                              "expression": {
                                "pos": 359,
                                "end": 377,
                                "kind": 211,
                                "id": 0,
                                "flags": 0,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "expression": {
                                  "pos": 359,
                                  "end": 372,
                                  "kind": 80,
                                  "id": 0,
                                  "flags": 0,
                                  "transformFlags": 0,
                                  "escapedText": "result"
                                },
                                "name": {
                                  "pos": 373,
                                  "end": 377,
                                  "kind": 80,
                                  "id": 0,
                                  "flags": 0,
                                  "transformFlags": 0,
                                  "escapedText": "push"
                                }
                              },
                              "arguments": [
                                {
                                  "pos": 378,
                                  "end": 379,
                                  "kind": 80,
                                  "id": 0,
                                  "flags": 0,
                                  "transformFlags": 0,
                                  "escapedText": "i"
                                }
                              ]
                            }
                          }
                        ],
                        "multiLine": true
                      }
                    }
                  }
                }
              ],
              "multiLine": true
            }
          },
          {
            "pos": 391,
            "end": 409,
            "kind": 253,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 4194432,
            "expression": {
              "pos": 401,
              "end": 408,
              "kind": 80,
              "id": 0,
              "flags": 0,
              "transformFlags": 0,
              "escapedText": "result"
            }
          }
        ],
        "multiLine": true
      }
    },
    {
      "pos": 411,
      "end": 455,
      "kind": 244,
      "id": 0,
      "flags": 0,
      "modifierFlagsCache": 0,
      "transformFlags": 1024,
      "expression": {
        "pos": 411,
        "end": 455,
        "kind": 213,
        "id": 0,
        "flags": 0,
        "modifierFlagsCache": 0,
        "transformFlags": 1024,
        "expression": {
          "pos": 411,
          "end": 434,
          "kind": 211,
          "id": 0,
          "flags": 0,
          "modifierFlagsCache": 0,
          "transformFlags": 0,
          "expression": {
            "pos": 411,
            "end": 426,
            "kind": 213,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 0,
            "expression": {
              "pos": 411,
              "end": 421,
              "kind": 80,
              "id": 0,
              "flags": 0,
              "transformFlags": 0,
              "escapedText": "fizzBuzz"
            },
            "arguments": [
              {
                "pos": 422,
                "end": 425,
                "kind": 9,
                "id": 0,
                "flags": 0,
                "modifierFlagsCache": 0,
                "transformFlags": 0,
                "text": "100",
                "numericLiteralFlags": 0
              }
            ]
          },
          "name": {
            "pos": 427,
            "end": 434,
            "kind": 80,
            "id": 0,
            "flags": 0,
            "transformFlags": 0,
            "escapedText": "forEach"
          }
        },
        "arguments": [
          {
            "pos": 435,
            "end": 454,
            "kind": 219,
            "id": 0,
            "flags": 0,
            "modifierFlagsCache": 0,
            "transformFlags": 1024,
            "parameters": [
              {
                "pos": 435,
                "end": 436,
                "kind": 169,
                "id": 0,
                "flags": 0,
                "modifierFlagsCache": 0,
                "transformFlags": 0,
                "name": {
                  "pos": 435,
                  "end": 436,
                  "kind": 80,
                  "id": 0,
                  "flags": 0,
                  "transformFlags": 0,
                  "escapedText": "s"
                }
              }
            ],
            "equalsGreaterThanToken": {
              "pos": 436,
              "end": 439,
              "kind": 39,
              "id": 0,
              "flags": 0,
              "transformFlags": 0
            },
            "body": {
              "pos": 439,
              "end": 454,
              "kind": 213,
              "id": 0,
              "flags": 0,
              "modifierFlagsCache": 0,
              "transformFlags": 0,
              "expression": {
                "pos": 439,
                "end": 451,
                "kind": 211,
                "id": 0,
                "flags": 0,
                "modifierFlagsCache": 0,
                "transformFlags": 0,
                "expression": {
                  "pos": 439,
                  "end": 447,
                  "kind": 80,
                  "id": 0,
                  "flags": 0,
                  "transformFlags": 0,
                  "escapedText": "console"
                },
                "name": {
                  "pos": 448,
                  "end": 451,
                  "kind": 80,
                  "id": 0,
                  "flags": 0,
                  "transformFlags": 0,
                  "escapedText": "log"
                }
              },
              "arguments": [
                {
                  "pos": 452,
                  "end": 453,
                  "kind": 80,
                  "id": 0,
                  "flags": 0,
                  "transformFlags": 0,
                  "escapedText": "s"
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "endOfFileToken": {
    "pos": 455,
    "end": 456,
    "kind": 1,
    "id": 0,
    "flags": 0,
    "transformFlags": 0
  },
  "text": "\ntype Pattern = \"Fizz\" | \"Buzz\" | \"FizzBuzz\" | number;\n\nfunction fizzBuzz(n: number): Pattern[] {\n  const result: Pattern[] = [];\n\n  for (let i = 1; i <= n; i++) {\n    if (i % 3 === 0 && i % 5 === 0) {\n      result.push(\"FizzBuzz\");\n    } else if (i % 3 === 0) {\n      result.push(\"Fizz\");\n    } else if (i % 5 === 0) {\n      result.push(\"Buzz\");\n    } else {\n      result.push(i);\n    }\n  }\n\n  return result;\n}\n\nfizzBuzz(100).forEach(s => console.log(s))\n",
  "fileName": "fizzbuzz.ts",
  "path": "",
  "resolvedPath": "",
  "originalFileName": "",
  "languageVersion": 99,
  "languageVariant": 0,
  "scriptKind": 3,
  "isDeclarationFile": false,
  "hasNoDefaultLib": false,
  "nodeCount": 121,
  "identifierCount": 31,
  "symbolCount": 0,
  "parseDiagnostics": [],
  "bindDiagnostics": [],
  "pragmas": {},
  "referencedFiles": [],
  "typeReferenceDirectives": [],
  "libReferenceDirectives": [],
  "amdDependencies": [],
  "identifiers": {},
  "jsDocParsingMode": 0
}
```

</details>

## License

The Unlicense

