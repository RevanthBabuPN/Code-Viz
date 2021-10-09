function LL(am, w, h) {
    this.init(am, w, h);
}

LL.prototype = new Algorithm();
LL.prototype.constructor = LL;
LL.superclass = Algorithm.prototype;

LL.RECT_WIDTH = 63;
LL.RECT_HEIGHT = 25;
LL.INSERT_X = 300;
LL.INSERT_Y = 50;
LL.STARTING_X = 30;
LL.STARTING_Y = 100;
LL.FOREGROUND_COLOR = "#000055";
LL.BACKGROUND_COLOR = "#AAAAFF";
LL.VERT_COUNT = 0; //used to get y coordinate for objects
LL.VERT_PADDING = 10; //verticle padding between objects
LL.HORI_PADDING = 30;

LL.prototype.init = function (am, w, h) {
    LL.superclass.init.call(this, am, w, h);
    this.addControls();
    this.commands = [];
    this.json = {
  "Structures": {
    "struct node": {
      "fields": [
        {
          "type": "var", 
          "name": "value", 
          "data_type": "int"
        }, 
        {
          "type": "ptr", 
          "name": "next", 
          "data_type": "struct node *"
        }
      ], 
      "datastructure": "linkedlist"
    }
  }, 
  "Lines_Data": [
    {
      "LineNum": 0, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 0, 
      "type": "Heap", 
      "Contents": []
    }, 
    {
      "LineNum": 0, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": "N", 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": "U", 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 35, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 35, 
      "type": "Heap", 
      "Contents": []
    }, 
    {
      "LineNum": 35, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": "N", 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": "U", 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 36, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 36, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "0"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 36, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": "U", 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 37, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 37, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 37, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": "U", 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 38, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 38, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 38, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": "U", 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 39, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 39, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "0"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 39, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": 6, 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 40, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 40, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 40, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": 6, 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 41, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 41, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 41, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": 6, 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 42, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 42, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 42, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": 6, 
          "name": "nhead"
        }
      ]
    }, 
    {
      "LineNum": 43, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 43, 
      "type": "Heap", 
      "Contents": [
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 43, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 6, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "U", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 43, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 13, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 13, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 13, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 6, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "U", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 13, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 14, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 14, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 14, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 6, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "U", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 14, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 15, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 15, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 15, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 6, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "U", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 15, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 16, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 16, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 16, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 6, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "U", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 16, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 21, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 21, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 21, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "U", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 21, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 22, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 22, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 22, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "N", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 22, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 23, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 23, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 23, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": "N", 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 23, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 25, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 25, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 25, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": 5, 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 5, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 25, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 26, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 26, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 26, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": 5, 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 6, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 26, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 23, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 23, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 23, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": 5, 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 6, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 23, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 28, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 28, 
      "type": "Heap", 
      "Contents": [
        {}, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "6"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 28, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": 5, 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 6, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 28, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 29, 
      "stackdepth": 2, 
      "nameid": 8, 
      "type": "Function", 
      "id": 7, 
      "name": "insertorder"
    }, 
    {
      "LineNum": 29, 
      "type": "Heap", 
      "Contents": [
        {
          "val": [
            {
              "value": "11"
            }, 
            {
              "next": "6"
            }
          ], 
          "type": "var", 
          "id": 13, 
          "data_type": "struct node"
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "13"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 29, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 9, 
          "val": 5, 
          "name": "tempi"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 10, 
          "val": 5, 
          "name": "parent"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 11, 
          "val": 6, 
          "name": "ptr"
        }
      ]
    }, 
    {
      "LineNum": 29, 
      "type": "Arguments", 
      "Contents": [
        {
          "data_type": "int", 
          "type": "var", 
          "id": 12, 
          "val": "11", 
          "name": "value"
        }
      ]
    }, 
    {
      "LineNum": 30, 
      "stackdepth": 1, 
      "nameid": 2, 
      "type": "Function", 
      "id": 1, 
      "name": "main"
    }, 
    {
      "LineNum": 30, 
      "type": "Heap", 
      "Contents": [
        {
          "val": [
            {
              "value": "11"
            }, 
            {
              "next": "6"
            }
          ], 
          "type": "var", 
          "id": 13, 
          "data_type": "struct node"
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "12"
            }, 
            {
              "next": "N"
            }
          ], 
          "data_type": "struct node", 
          "id": 6
        }, 
        {
          "type": "var", 
          "val": [
            {
              "value": "10"
            }, 
            {
              "next": "13"
            }
          ], 
          "data_type": "struct node", 
          "id": 5
        }
      ]
    }, 
    {
      "LineNum": 30, 
      "type": "StackFrame", 
      "Contents": [
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 3, 
          "val": 5, 
          "name": "head"
        }, 
        {
          "data_type": "struct node *", 
          "type": "ptr", 
          "id": 4, 
          "val": 6, 
          "name": "nhead"
        }
      ]
    }
  ]
}
    this.objectList = []; //list of all the objects on the screen
    // format of the objects that will be inserted in this list : {data_type, type, id, val, name}
    this.objectIdList = []; //list of object IDs. need this list in addition to objectList because
    //    we constantly keep searching if an object to be inserted is already inserted.
    // this search is done based on ID's of the objects,
    //    but checking if the id already exists in the objectList is slow.
    //therefore having a seperate list with just the IDs will be more efficient to search if an ID already exists
    this.ptrList = []; //list of ptr objects inserted.
    // format of the objects that will be inserted in this list : {id, pointeeId}
    this.colObjList = {}; //dict of key-value pairs which has info about the columns in the visualisation
    // format of the key-value that will be inserted in this dict : x : [maxWidth, objIdList]
    this.funcList = {}; //dict of key-value pairs which has info about the functions, dimensions of the frame and the object ids in that function
    // format of the key-value that will be inserted in this dict : id : {funcName, funcNameId, funcHeight, funcWidth, objIdList}
    this.structList = {}; //dict conatining the layout of the structs
    // format of the key-value pair that will be inserted in this dict : name : {structFields: [{type, data_type, name}], structPtr:[ptrs], width: , y:{0:y0, 1:y1, 2:y2,...;}}
    // structPtr is the name of the ptr which points to the other struct nodes
    // width is width of each struct variable
    // y: y coordinates for struct variables and struct pointers
    // ... 0 represents struct var, 1 represents pointer to struct var, 2 represents pointer to pointer to struct var and so on,

    this.storeStructInfo(); //store the layout of the different structs for later use
    this.setup(); //show the initial stack contents
};

LL.prototype.addControls = function () {
    this.controls = [];
    this.animateButton = addControlToAlgorithmBar("Button", "Visualise");
    this.animateButton.onclick = this.animateCallback.bind(this);
    this.controls.push(this.animateButton);
};

LL.prototype.reset = function () {
    console.log("reset");
};

LL.prototype.animateCallback = function () {
    this.implementAction(this.animate.bind(this), "");
};

LL.prototype.setup = function () {
    //this.animationManager.setAllLayers([-1, 0]); //layers to be visible
    let linesData = this.json.Lines_Data;
    for (let linesDataIdx = 0; linesDataIdx < linesData.length; ++linesDataIdx) {
        let type = linesData[linesDataIdx].type;
        let line_no = linesData[linesDataIdx].LineNum;
        if (line_no == 0) {
            this.visualiseLine(linesData, linesDataIdx, line_no);
        } else {
            break;
        }
    }
    this.animationManager.StartNewAnimation(this.commands);
    this.animationManager.skipForward();
    this.animationManager.clearHistory();
};

var structPtrGap = 0;
LL.prototype.storeStructInfo = function () {
    let structs = this.json.Structures;
    structNames = Object.keys(structs);
    //console.log(structNames);
    for (let structIdx = 0; structIdx < structNames.length; ++structIdx) {
        this.structList[structNames[structIdx]] = {};
        let structFields = structs[structNames[structIdx]].fields;
        this.structList[structNames[structIdx]].structFields = structFields;
        this.structList[structNames[structIdx]].structPtr = []
        for (let fieldIdx = 0; fieldIdx < structFields.length; ++fieldIdx) {
            if (structFields[fieldIdx]["data_type"].includes(structNames[structIdx])) {
                let ptrName = structFields[fieldIdx]["name"];
                this.structList[structNames[structIdx]].structPtr.push(ptrName);
            }
        }
        this.structList[structNames[structIdx]].width = this.computeWidthStructVar(structNames[structIdx]);
        structPtrGap = this.structList[structNames[structIdx]].width;
        this.structList[structNames[structIdx]].y = { 1: 0, };
    }
    //console.log(this.structList);
};

LL.prototype.computeWidthStructVar = function (structName) {
    let structInfo = this.structList[structName];
    //console.log(structInfo);
    let fields = structInfo.structFields;
    maxFieldNameLen = 0;
    maxFieldValLen = 0;
    for (let fieldIdx = 0; fieldIdx < fields.length; ++fieldIdx) {
        let fieldName = Object.keys(fields[fieldIdx])[0];
        let fieldVal = fields[fieldIdx][fieldName].toString();
        maxFieldValLen = Math.max(maxFieldValLen, fieldVal.length);
        maxFieldNameLen = Math.max(maxFieldNameLen, fieldName.length);
    }
    //let width = this.getWidthVar(maxFieldNameLen + 3 + maxFieldValLen); 
    let width = this.getWidthVar(maxFieldNameLen + 3 + 7)//+3 for " : "; +7 assuming the value can be max 7 chars long
    return width;
};

LL.prototype.getInsertY = function () {
    let insert_y =
        LL.INSERT_Y + LL.VERT_COUNT * (LL.RECT_HEIGHT + LL.VERT_PADDING);

    //height of the canvas is exceeded
    if (insert_y > 600 - 50) {
        LL.INSERT_X += 2 * LL.RECT_WIDTH + 2 * LL.HORI_PADDING;
        LL.VERT_COUNT = 0;
        insert_y = LL.INSERT_Y;
    }
    return insert_y;
};

LL.prototype.createVar = function (object, width, height, x, y, isDef) {
    this.cmd(
        "CreateLinkedList",
        object.id,
        object.data_type + " " + object.name,
        width,
        height,
        x,
        y,
        0,
        1,
        false,
        2
    );
    //let value = isDef === false ? "?" : object.val;
    //this.cmd("SetText", object.id, value, 1);
    this.cmd("SetText", object.id, object.val, 1);
    //console.log("inserted " + object.id);
};

LL.prototype.setPtrVal = function (object) {
    if (object.val === "U") {
        this.cmd(
            "SetText",
            object.id,
            object.data_type + " " + object.name + " (U)",
            0
        );
    } else {
        if (object.val === "N") {
            this.cmd(
                "SetText",
                object.id,
                object.data_type + " " + object.name + " (N)",
                0
            );
            this.cmd("SetNull", object.id, 1);
        } else {
            if (this.objectIdList.includes(object.val)) {
                this.cmd("Connect", object.id, object.val);
            }
        }
    }
};

LL.prototype.setStructPtrVal = function (object) {
    let [fieldVals, numVarFields] = this.extractStructVarFieldVals(object);
    let fieldNames = Object.keys(fieldVals);
    let numFields = fieldNames.length;

    let fields = object.val;
    let structName = object.data_type;
    let structPtrFieldNames = this.structList[structName].structPtr;

    for (let fieldIdx = 0; fieldIdx < numFields; ++fieldIdx) {
        let field = fields[fieldIdx];
        let fieldName = Object.keys(field)[0];
        if (structPtrFieldNames.includes(fieldName)) {
            let val = field[fieldName];
            if (val === "N") { this.cmd("SetNull", object.id, 1); }
            else if (val !== "U") {
                this.cmd("SetNull", object.id, 0);
                val = parseInt(val);
                if (this.objectIdList.includes(val)) {
                    this.cmd("Connect", object.id, val);
                }
            }
        }
    }
}

LL.prototype.createPtr = function (object, width, height, x, y) {
    this.cmd(
        "CreateLinkedList",
        object.id,
        object.data_type + " " + object.name,
        width,
        height,
        x,
        y,
        0.25,
        0,
        1,
        1
    );
    this.setPtrVal(object);
};

LL.prototype.extractStructVarFieldVals = function (object) {
    let structName = object.data_type;
    //console.log(structName);
    let structInfo = this.structList[object.data_type];
    let fields = object.val;
    let fieldVals = {};
    let structPtrs = {};

    //the user defined structure might have struct pointers anywhere in the object
    //we need non ptr values to be in the front of fieldVals (because the first of those values will be sent as label in cmd("CreateLinkedList"))
    //if the field is a struct ptr, store it in a separate list
    //add these to the end of fieldVals

    //console.log(structInfo, fields);
    for (let fieldIdx = 0; fieldIdx < fields.length; ++fieldIdx) {
        let fieldName = Object.keys(fields[fieldIdx])[0];
        let isPtr = structInfo.structPtr.includes(fieldName);
        if (isPtr) {
            structPtrs[fieldName] = fields[fieldIdx][fieldName];
        }
        else { fieldVals[fieldName] = fields[fieldIdx][fieldName]; }
    }

    let numVarFields = Object.keys(fieldVals).length;

    //add all structPtrs to the end
    let structPtrNames = Object.keys(structPtrs)
    for (let ptrIdx = 0; ptrIdx < structPtrNames.length; ++ptrIdx) {
        let ptrName = structPtrNames[ptrIdx];
        fieldVals[ptrName] = structPtrs[ptrName];
    }
    //console.log(fieldVals, structPtrs);
    return [fieldVals, numVarFields];
}

var structVarX = 0;
var structVarY = 0;
LL.prototype.createStructVar = function (object, width, height, x, y, isDef) {
    let [fieldVals, numVarFields] = this.extractStructVarFieldVals(object);

    //console.log(fieldVals, numVarFields);
    let fieldNames = Object.keys(fieldVals);
    let firstFieldName = fieldNames[0];
    let firstVal = firstFieldName + " : " + fieldVals[firstFieldName];
    //console.log(numVarFields);
    this.cmd(
        "CreateLinkedList",
        object.id,
        firstVal,
        width,
        height,
        x,
        y,
        0.2,
        0,
        1,
        numVarFields
    );
    for (let i = 1; i < numVarFields; ++i) {
        let val = fieldNames[i] + " : " + fieldVals[fieldNames[i]];
        this.cmd("SetText", object.id, val, i);
    }
    //console.log("inserted ", object);
    this.setStructPtrVal(object);
    //LL.VERT_COUNT += numVarFields;
    LL.VERT_COUNT--; //undo the increment done in createObj
    structVarX += this.getWidth(object) + LL.HORI_PADDING;
};

LL.prototype.createStructPointeeObj = function (ptrObj, isDef) {
    //attributes of an object : data_type, type, id, val, name(name not necessay for temporarily created struct objects), x, y
    let structObj = {};
    let dataType = ptrObj.data_type.slice(0, -1).trim(); //remove last character
    structObj.data_type = dataType;
    if (dataType.includes('*')) {
        structObj.type = "ptr";
    } else {
        structObj.type = "var";
    }
    structObj.id = parseInt(ptrObj.val);
    if (ptrObj.deref_val !== undefined) {
        structObj.val = ptrObj.deref_val;
    }
    structObj.x = ptrObj.x;
    structObj.y = ptrObj.y + LL.VERT_PADDING + this.getHeight(structObj);
    if (structObj.type === "var") {
        this.createStructVar(structObj, this.getWidth(structObj), this.getHeight(structObj), structObj.x, structObj.y, isDef);
        LL.VERT_COUNT++; //because it is decremented in createStructVar
    } else {
        this.createStructPtr(structObj, this.getWidth(structObj), this.getHeight(structObj), structObj.x, structObj.y, isDef);
    }
    //console.log(structObj);
    this.objectList.push(structObj);
    this.objectIdList.push(structObj.id);
    return structObj;
}

LL.prototype.setDynStructPtrVal = function (object) {
    let val = object.val;
    if (val === "N") { this.cmd("SetNull", object.id, 1); }
    else if (val !== "U") {
        val = parseInt(val);
        if (this.objectIdList.includes(val)) {
          this.cmd("SetNull", object.id, 0);
          this.cmd("SetBackgroundColor", object.id, "#FFFFFF")
            this.cmd("Connect", object.id, val);
        }
    }
}

var structPtrY = 0;
var structPtrX = 0;
LL.prototype.createStructPtr = function (object, width, height, x, y, isDef) {
    let pointeeObj;
    if (object.deref_val !== undefined) {
        pointeeObj = this.createStructPointeeObj(object, isDef);
    }
    let bgColor = "#FFFFFF";
    if(object.val === "N") {
      bgColor = "#f23535"
    }
    this.cmd(
        "CreateRectangle",
        object.id,
        object.name,
        width,
        height,
        x,
        y,
    );
    this.cmd("SetBackgroundColor", object.id, bgColor)
    
    this.setDynStructPtrVal(object);
    structPtrX += structPtrGap + LL.HORI_PADDING;
    //console.log(object);
}

LL.prototype.createObj = function (object, isDef) {
    let object_type = object.type;
    this.objectIdList.push(object.id);
    object.x = LL.INSERT_X;
    let insert_y = this.getInsertY();
    LL.VERT_COUNT++;
    object.y = insert_y;
    //console.log(object);
    switch (object_type) {
        case "var":
            if (object.data_type.includes("struct ")) {
                object.x -= 10;
                if (structVarY == 0) { structVarY = object.y; }
                if (structVarX == 0) { structVarX = object.x; }
                object.y = structVarY;
                object.x = structVarX;
                this.createStructVar(
                    object,
                    this.getWidth(object),
                    this.getHeight(object),
                    object.x,
                    object.y,
                    isDef
                );
            } else {
                this.createVar(
                    object,
                    this.getWidth(object),
                    this.getHeight(object),
                    object.x,
                    object.y,
                    isDef
                );
                LL.VERT_COUNT++; //because height is 2 times RECT_HEIGHT
            }

            break;
        case "ptr":
            object.x -= 10;
            let ptrObj = { id: object.id, pointeeId: object.val };
            if (object.data_type.includes("struct ")) {
              if (structPtrY == 0) { structPtrY = object.y; }
              if (structPtrX == 0) { structPtrX = object.x; }
              object.y = structPtrY;
              object.x = structPtrX;
                this.createStructPtr(
                    object,
                    this.getWidth(object),
                    this.getHeight(object),
                    object.x,
                    object.y,
                    isDef
                );
            } else {
                this.createPtr(
                    object,
                    this.getWidth(object),
                    this.getHeight(object),
                    object.x,
                    object.y
                );
            }
            ptrObj.pointeeId = object.val;
            this.ptrList.push(ptrObj);
            LL.VERT_COUNT++; //because height is 2 times RECT_HEIGHT
            //console.log("inserted " + object.id);
            break;
    }
    this.objectList.push(object);
    this.insertIntoCol(object);
};

LL.prototype.modifyStructFields = function (object) {
    let structName = object.data_type;
    let structInfo = this.structList[structName];
    let [fieldVals, numVarfields] = this.extractStructVarFieldVals(object);
    let fields = Object.keys(fieldVals);
    for (let fieldIdx = 0; fieldIdx < fields.length; ++fieldIdx) {
        let fieldName = fields[fieldIdx];
        let isPtr = structInfo.structPtr.includes(fieldName);
        if (isPtr) {
            this.setStructPtrVal(object);
        }
        this.cmd("SetText", object.id, fieldName + " : " + fieldVals[fieldName], fieldIdx);
    }
}

LL.prototype.compareFieldVals = function (val1, val2) {
    for (let fieldIdx = 0; fieldIdx < val1.length; ++fieldIdx) {
        let field1 = val1[fieldIdx];
        let field2 = val2[fieldIdx];
        let fieldName = Object.keys(field1)[0];
        if (field1[fieldName] !== field2[fieldName]) {
            return false;
        }
    }
    return true;
}

LL.prototype.modifyStructVar = function (object) {
    for (let objectIdx = 0; objectIdx < this.objectList.length; ++objectIdx) {
        let insertedObject = this.objectList[objectIdx];
        if (insertedObject.id === object.id) {
            // console.log(insertedObject.val, object.val);
            let fieldValsAreSame = this.compareFieldVals(insertedObject.val, object.val);
            if (!fieldValsAreSame) {
                //console.log(insertedObject.val, object.val);
                insertedObject.val = object.val;
                this.cmd("SetHighlight", object.id, 1);
                this.cmd("Step");

                //modify all the fields
                this.modifyStructFields(object);
                //this.cmd("Step");

                this.cmd("SetHighlight", object.id, 0);
            }
        }
    }

}

LL.prototype.modifyVar = function (object) {
    if (object.data_type.includes("struct ")) {
        this.modifyStructVar(object);
    }
    else {
        for (let objectIdx = 0; objectIdx < this.objectList.length; ++objectIdx) {
            let insertedObject = this.objectList[objectIdx];
            if (insertedObject.id === object.id) {
                if (insertedObject.val !== object.val) {
                    insertedObject.val = object.val;
                    this.cmd("SetHighlight", object.id, 1);
                    this.cmd("Step");
                    this.cmd("SetText", object.id, object.val, 1);
                    //this.cmd("Step");
                    this.cmd("SetHighlight", object.id, 0);
                }
            }
        }
    }
};

LL.prototype.getObj = function (id) {
    for (
        let insertedObjIdx = 0;
        insertedObjIdx < this.objectList.length;
        ++insertedObjIdx
    ) {
        if (this.objectList[insertedObjIdx].id === id) {
            return this.objectList[insertedObjIdx];
        }
    }
};

LL.prototype.movePtr = function (ptrObj, pointeeObj) {
    //returns new coordinates of the pointer object
    let new_x;
    //new_x = pointeeObj.x - this.colObjList[pointeeObj.x].maxWidth / 2 - Example2.RECT_WIDTH - Example2.HORI_PADDING;
    new_x = pointeeObj.x - this.getWidth(pointeeObj) / 2 - this.getWidth(ptrObj) / 2 - Example2.HORI_PADDING;
    this.cmd("Move", ptrObj.id, new_x - 10, pointeeObj.y); // -10 because pointer onjects are offset to the right by 10 pixels by default (don't know why)
    return [new_x, pointeeObj.y];
};

LL.prototype.modifyPtrCoords = function (ptrId, x, y) {
    for (
        let pointerObjIdx = 0;
        pointerObjIdx < this.objectList.length;
        ++pointerObjIdx
    ) {
        if (this.objectList[pointerObjIdx].id === ptrId) {
            this.objectList[pointerObjIdx].x = x;
            this.objectList[pointerObjIdx].y = y;
        }
    }
};

LL.prototype.changeObjCol = function (objId, new_col_x) {
    let colExists = Object.keys(this.colObjList).includes(new_col_x);
    if (!colExists) {
        //console.log("created new col", new_col_x);
        this.insertNewCol(new_col_x);
    }
    this.colObjList[new_col_x].objIds.push(objId);
    //console.log(this.colObjList);
};

LL.prototype.removeFromCol = function (col_x, objId) {
    let col = this.colObjList[col_x];
    //console.log(col);
    let objIds = col.objIds;
    objIds = objIds.filter((item) => item !== objId);
    col.objIds = objIds;
};

LL.prototype.resetCol = function (col_x) {
    this.colObjList[col_x].maxWidth = 0;
    this.colObjList[col_x].objIds = [];
};

LL.prototype.movePointeeCol = function (col_x, ptrObj) {
    //add the pointee obj ids to the new col
    //this should be done from the rightmost col to easily carry the maxWidth attribute of one col to the next col

    //ASSUMPTION : KEYS IN COLOBJLIST ARE IN ASCENDING ORDER

    let colKeys = Object.keys(this.colObjList);
    let col;

    //1. remove the objects from the old col
    //2. add them to the new col
    //3. move the object
    //4. delete the old col
    for (let keyIdx = colKeys.length - 1; keyIdx >= 0; --keyIdx) {
        if (colKeys[keyIdx] >= col_x) {
            col = this.colObjList[colKeys[keyIdx]];
            let oldMaxWidth = col.maxWidth;
            let objIds = col.objIds;
            for (let objIdx = 0; objIdx < objIds.length; ++objIdx) {
                let objId = objIds[objIdx];
                if (objId !== ptrObj.id) {
                    let obj = this.getObj(objId);
                    obj.x += oldMaxWidth;
                    this.removeFromCol(colKeys[keyIdx], objId); //1
                    this.changeObjCol(objId, obj.x); //2
                    this.cmd("Move", objId, obj.x, obj.y); //3
                }
            }
            let new_x = parseInt(colKeys[keyIdx]) + parseInt(oldMaxWidth);
            // console.log("newx", new_x);
            //delete the col - make its maxWidth = 0 and objIds = []. we are not actually deleting the key because that would break the ascending order of the keys
            this.resetCol(colKeys[keyIdx]); //4
            //change maxWidth of the new column
            this.colObjList[new_x].maxWidth = oldMaxWidth;
        }
    }
};

LL.prototype.modifyPtrVal = function (object) {
    //change the text inside the ptr
    this.setPtrVal(object);

    //get pointee object
    let pointeeObj;
    if (this.objectIdList.includes(object.val)) {
        pointeeObj = this.getObj(object.val);

        //this.movePointeeCol(pointeeObj.id);

        //move the ptr
        let new_x, new_y;
        [new_x, new_y] = this.movePtr(object, pointeeObj);

        //move the column of pointee and all the columns to the right of it
        // if (new_x !== object.x) {
        //   this.movePointeeCol(pointeeObj.id, object);
        // }

        //change the coordinates of the pointer object
        this.modifyPtrCoords(object.id, new_x, new_y);

        //remove any (U) or (N) in the name of the ptr object
        this.cmd("SetText", object.id, object.data_type + " " + object.name, 0);
        this.cmd("SetText", object.id, "", 1);
    }
};

LL.prototype.modifyStructPtr = function (object) {
    // let ptrObj = this.getObj(object.id);
    // let oldPointeeId = ptrObj.val;
    // let pointeeId = parseInt(object.val);
    // let oldDerefVal = ptrObj.deref_val;
    // let derefVal = object.deref_val;
    // ptrObj.deref_val = derefVal;
    // ptrObj.val = pointeeId;
    // if (derefVal !== undefined) {
    //     if (oldDerefVal === undefined) {
    //         this.cmd("SetHighlight", object.id, 1);
    //         this.cmd("Step");
    //         let pointeeObj = this.createStructPointeeObj(ptrObj);
    //         this.setDynStructPtrVal(object);
    //         //this.cmd("Step");
    //         this.cmd("SetHighlight", object.id, 0);
    //     }
    //     else {
    //         if (oldPointeeId === pointeeId) {
    //             let fieldValsAreSame = this.compareFieldVals(oldDerefVal, derefVal);
    //             if (!fieldValsAreSame) {
    //                 let pointeeObj = this.getObj(pointeeId);
    //                 pointeeObj.val = derefVal;
    //                 this.cmd("SetHighlight", pointeeId, 1);
    //                 this.cmd("Step");

    //                 //modify all the fields
    //                 this.modifyStructFields(pointeeObj);
    //                 //this.cmd("Step");

    //                 this.cmd("SetHighlight", pointeeId, 0);
    //             }
    //         }
    //     }
    // }
    this.setDynStructPtrVal(object)
}

LL.prototype.modifyPtr = function (object) {
    if (object.data_type.includes("struct ")) {
        this.modifyStructPtr(object);
    } else {
        for (let ptrIdx = 0; ptrIdx < this.ptrList.length; ++ptrIdx) {
            let insertedPtr = this.ptrList[ptrIdx];
            if (insertedPtr.id === object.id) {
                if (insertedPtr.pointeeId !== object.val) {
                    if (insertedPtr.pointeeId !== "U" && insertedPtr.pointeeId !== "N") {
                        this.cmd("Disconnect", object.id, insertedPtr.pointeeId);
                    }
                    insertedPtr.pointeeId = object.val;
                    this.cmd("SetHighlight", object.id, 1);
                    this.cmd("Step");
                    this.modifyPtrVal(object);
                    //this.cmd("Step");
                    this.cmd("SetHighlight", object.id, 0);
                }
            }
        }
    }
};

LL.prototype.modifyWidth = function (object) {
    let newWidth = this.getWidth(object);
    //console.log("modifying width", object.val, newWidth);
    this.cmd("SetWidth", object.id, newWidth);
};

LL.prototype.modifyObject = function (object) {
    switch (object.type) {
        case "var":
            this.modifyVar(object);
            break;
        case "ptr":
            this.modifyPtr(object);
            break;
    }
    this.modifyWidth(object);
};

LL.prototype.getWidthVar = function (length) {
    if (length < 18) return 10 * length;
    if (length < 30) return 7 * length;
    return 10 * length;
};

LL.prototype.getWidthPtr = function (length) {
    return 17 * (length + 4); //4 extra chars for " (U)" or " (N)"
};
LL.prototype.getWidthStructPtr = function (length) {
    if (length < 10)
        return 9 * 10;
    if (length < 20)
        return 10 * 20;
    return 8 * 40;
}

LL.prototype.getWidthStructVar = function (object) {
    let structName = object.data_type;
    return this.structList[structName].width;
}

LL.prototype.getWidth = function (object) {
    switch (object.type) {
        case "var":
            if (object.data_type.includes("struct ")) {
                return this.getWidthStructVar(object);
            }
            return this.getWidthVar(
                Math.max((object.type + " " + object.name).length, object.val.toString(10).length)
            );
            break;
        case "ptr":
            if (object.data_type.includes("struct ")) {
                return this.getWidthStructPtr((object.name).length);
            }
            return this.getWidthPtr((object.type + " " + object.name).length);
            break;
    }
};

LL.prototype.getHeight = function (object) {
    switch (object.type) {
        case "var":
            return 2 * LL.RECT_HEIGHT;
            break;
        case "ptr":
            return LL.RECT_HEIGHT;
            break;
    }
};

LL.prototype.insertNewCol = function (x) {
    this.colObjList[x] = { maxWidth: 0, objIds: [] };
};

LL.prototype.insertIntoCol = function (object) {
    let x = LL.INSERT_X;
    let colExists = x in this.colObjList;

    //new column
    if (!colExists) {
        this.insertNewCol(LL.INSERT_X);
    }

    let colEntry = this.colObjList[x];

    //add the obj id
    colEntry.objIds.push(object.id);

    //change maxWidth if needed
    let objWidth = this.getWidth(object);
    let widthIsGreater = objWidth > colEntry.maxWidth;
    colEntry.maxWidth = widthIsGreater ? objWidth : colEntry.maxWidth;
};

LL.prototype.visualizeObj = function (object, isDef) {
    //isDef : is the object defined or undefined
    if (!this.objectIdList.includes(object.id)) {
      // console.log("creating ", object.id)
        this.createObj(object, isDef);
        this.addObjToFunc(func, object);
    } else {
        this.modifyObject(object);
        this.modifyFunc(func, object);
    }
};

LL.prototype.modifyFunc = function (func, object) {
    let obj = this.getObj(object.id);
    let xDiff = Math.abs(func.x - obj.x);
    //this.increaseFuncWidth(func, this.funcList[func.id].funcWidth + xDiff);
    //console.log(xDiff);
};

LL.prototype.addObjIdToFunc = function (objId, func) {
    let funcInList = this.funcList[func.id];
    let objExistsInFunc = funcInList.objIdList.includes(objId);
    if (!objExistsInFunc) {
        this.funcList[func.id].objIdList.push(objId);
        //console.log(objId, id);
    }
};

LL.prototype.createFunc = function (func) {
    this.funcList[func.id] = func;
    //console.log("added func", currFunc);

    //create rectangle frame for function
    let x = LL.INSERT_X;
    let y = this.getInsertY();
    func.x = x;
    func.y = y;
    this.cmd(
        "CreateRectangle",
        func.id,
        "",
        func.funcWidth,
        func.funcHeight,
        x,
        y
    );

    //insert function name
    this.cmd("CreateLabel", func.funcNameId, func.funcName, 0, 0);
    this.cmd("AlignTop", func.funcNameId, func.id);

    //slightly increase y for the next objects
    LL.INSERT_Y += 30;

    //add the func to colObjList
    this.insertIntoCol(func);
};

LL.prototype.increaseFuncWidth = function (func, newWidth) {
    this.funcList[func.id].funcWidth = newWidth + 20; // empty space to right and left
    this.cmd("SetWidth", func.id, this.funcList[func.id].funcWidth);
};

LL.prototype.increaseFuncHeight = function (func, newHeight) {
    let oldHeight = this.funcList[func.id].funcHeight;
    let offset = newHeight - oldHeight;
    this.cmd("SetHeight", func.id, newHeight);
    this.funcList[func.id].funcHeight = newHeight;

    this.funcList[func.id].y += offset / 2;
    this.cmd("Move", func.id, this.funcList[func.id].x, this.funcList[func.id].y);
    LL.VERT_COUNT += 1;
};

LL.prototype.getNewHeightFunc = function (func, object) {
    let objHeight = this.getHeight(object);
    let newOffset = objHeight + LL.VERT_PADDING;
    if (object.type === "var") {
        newOffset += LL.VERT_PADDING;
    }
    let newHeight = this.funcList[func.id].funcHeight + newOffset;
    return newHeight;
};

LL.prototype.addObjToFunc = function (func, object) {
    if (func.id === 0) {
        return;
    }
    let funcInList = this.funcList[func.id];
    let objExistsInFunc = funcInList.objIdList.includes(object.id);
    if (!objExistsInFunc) {
        //add objectId to this.funcList
        this.addObjIdToFunc(object.id, func);

        //change dimensions of the function frame
        let objWidth = this.getWidth(object);
        //console.log(this.funcList[func.id].funcWidth - 20, objWidth);
        funcWidthIsGreater = this.funcList[func.id].funcWidth - 20 >= objWidth; //-20 to account for empty spaces in left and right
        if (!funcWidthIsGreater) {
            let newWidth = this.getWidth(object);
            this.increaseFuncWidth(func, newWidth);
        }

        let newHeight = this.getNewHeightFunc(func, object);
        this.increaseFuncHeight(func, newHeight);
    }
};

LL.prototype.deleteFuncObjs = function (funcId) {
    let objIds = this.funcList[funcId].objectIdList;
    console.log(objIds);
    for (let objIdIDx = 0; objIdIDx < objIds.length; ++objIdIDx) {
        this.cmd("Delete", objIds[objIdIDx]);
    }
};

LL.prototype.deleteFunc = function (funcId) {
    //remove the function frame
    this.cmd("Delete", funcId);

    //delete all the objects in the functions
    this.deleteFuncObjs(funcId);

    //remove func from funcList
    delete this.funcList[funcID];

    //move the objects below them upwards

    //!!!!!!!!!!!!!!!!!!!!!! IMPLEMENT THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
};

var func = {
    funcName: "",
    id: 0,
    funcNameId: 0,
    funcHeight: 20,
    funcWidth: 50,
    objIdList: [],
    x: 0,
    y: 0,
}; //global because 1.it has a single value 2.that value must be shared among iterations 3.used by different functions
var prevFunc;
LL.prototype.visualiseFunc = function (linesData, linesDataIdx) {
    let funcName = linesData[linesDataIdx].FunctionName;
    let id = parseInt(linesData[linesDataIdx].FunctionId);
    let funcNameId = parseInt(linesData[linesDataIdx].FunctionNameId);
    if (funcName && func.id !== id) {
        prevFunc = func;
        delete func;
        func = {
            funcName: funcName,
            id: id,
            funcNameId: funcNameId,
            funcHeight: 20,
            funcWidth: 50,
            objIdList: [],
            x: 0,
            y: 0,
        };
        let funcExists = false;
        let funcListKeys = Object.keys(this.funcList);
        if (funcListKeys) {
            for (
                let funcListIdx = 0;
                funcListIdx < funcListKeys.length;
                ++funcListIdx
            ) {
                if (funcListKeys[funcListIdx] == func.id) {
                    funcExists = true;
                    break;
                }
            }
        }
        if (func && !funcExists) {
            //console.log("creating function", func.funcName, func.id);
            this.createFunc(func);
        }
    }
};

LL.prototype.visualiseVar = function (linesData, linesDataIdx) {
    let type = linesData[linesDataIdx].type;
    switch (type) {
        case "Heap":
          for (
                let contentsIdx = 0;
                contentsIdx < linesData[linesDataIdx].Contents.length;
                ++contentsIdx
            ) {
                //console.log(linesData[linesDataIdx].Contents[contentsIdx]);
                let object = linesData[linesDataIdx].Contents[contentsIdx];
                object["name"] = "<<On_Heap>>";
                this.visualizeObj(object);
                //this.modifyFunc(object, func);
            }
            break;
        case "StackFrame":
            for (
                let contentsIdx = 0;
                contentsIdx < linesData[linesDataIdx].Contents.length;
                ++contentsIdx
            ) {
                //console.log(linesData[linesDataIdx].Contents[contentsIdx]);
                let object = linesData[linesDataIdx].Contents[contentsIdx];
                this.visualizeObj(object);
                //this.modifyFunc(object, func);
            }
            break;
        case "GlobalVariables":
            for (
                let contentsIdx = 0;
                contentsIdx < linesData[linesDataIdx].Contents.length;
                ++contentsIdx
            ) {
                let object = linesData[linesDataIdx].Contents[contentsIdx];
                this.visualizeObj(object);
            }
            break;
    }
};

LL.prototype.visualiseLine = function (linesData, linesDataIdx, line_no) {
    //handling highlighting code
    this.cmd("RemoveAceMarker");
    this.cmd("AddAceMarker", line_no);

    //handling function
    this.visualiseFunc(linesData, linesDataIdx);

    //handling the variable
    this.visualiseVar(linesData, linesDataIdx);

    this.cmd("Step");
};

LL.prototype.animate = function () {
    this.commands = [];

    let linesData = this.json.Lines_Data;
    for (let linesDataIdx = 0; linesDataIdx < linesData.length; ++linesDataIdx) {
        let line_no = linesData[linesDataIdx].LineNum;
        if (line_no != 0) {
            this.visualiseLine(linesData, linesDataIdx, line_no);
        }
    }
    console.log(this.objectList);
    //console.log(this.ptrList);
    //console.log(this.colObjList);
    console.log(this.funcList);
    //console.log(this.commands);
    return this.commands;
};

LL.prototype.disableUI = function (event) {
    for (var i = 0; i < this.controls.length; i++) {
        this.controls[i].disabled = true;
    }
};

LL.prototype.enableUI = function (event) {
    for (var i = 0; i < this.controls.length; i++) {
        this.controls[i].disabled = false;
    }
};

var currentAlg;

function init() {
    var animManag = initCanvas();
    currentAlg = new LL(animManag, canvas.width, canvas.height);
}