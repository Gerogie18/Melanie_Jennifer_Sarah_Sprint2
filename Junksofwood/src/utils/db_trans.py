import json

# Your JSON data here
data = {
        "0":{
            "Name": "Canada Brooch",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Canada", "Hockey", "Sport"],
            "Images": [
                {
                "title": "Canada Brooch - Card",
                "filepath": "/brooches/CanadaBroochCard.jpg",
                "alt": ""
                },
                {
                "title": "Canada Brooch - Plate",
                "filepath": "/brooches/CanadaBroochPlate.jpg",
                "alt": ""
                }
            ]
        },
        "1":{
            "Name": "Rowhouse Brooch - Orange and Blue",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Rowhouse", "Orange and Blue", "Newfoundland"],
            "Images": [
                {
                "title": "Rowhouse Brooch - Orange and Blue",
                "filepath": "/brooches/RowhouseBroochPlate_OrangeBlue.jpg",
                "alt": ""
                }
            ]
        },
        "2":{
            "Name": "Rowhouse Brooch - Purple and Yellow",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Rowhouse", "Purple and Yellow", "Newfoundland"],
            "Images": [
                {
                "title": "Rowhouse Brooch - Purple and Yellow",
                "filepath": "/brooches/RowhouseBroochPlate_PurpleYellow.jpg",
                "alt": ""
                }
            ]
        },
        "3": {
            "Name": "Rowhouse Brooch - Red and Purple",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Rowhouse", "Green and Red", "Newfoundland"],
            "Images": [
                {
                "title": "Rowhouse Brooch - Green and Red",
                "filepath": "/brooches/RowhouseBroochPlate_RedPurple.jpg",
                "alt": ""
                }
            ]
        },
        "4": {
            "Name": "Labrador Brooch - Natural",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Labrador"],
            "Images": [
                {
                    "title": "Labrador Brooch - Card",
                    "filepath": "/brooches/LabradorBroochCard.jpg",
                    "alt": ""
                },
                {
                    "title": "Labrador Brooch - Plate",
                    "filepath": "/brooches/LabradorBroochPlate.jpg",
                    "alt": ""
                }
            ]
        },
        "5": {
            "Name": "Labrador Brooch - Stained",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Labrador", "Stained"],
            "Images": [
                {
                    "title": "Labrador Brooch - Card",
                    "filepath": "/brooches/LabradorBroochCard.jpg",
                    "alt": ""
                },
                {
                    "title": "Labrador Brooch - Plate",
                    "filepath": "/brooches/LabradorBroochPlate.jpg",
                    "alt": ""
                }
            ]
        },
        "6": {
            "Name": "Newfoundland Brooch - Natural",
            "Category": "0",
            "Price": 10,    
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Newfoundland"],
            "Images": [
                {
                    "title": "Newfoundland Brooch - Card",
                    "filepath": "/brooches/NewfoundlandBroochCard.jpg",
                    "alt": ""
                },
                {
                    "title": "Newfoundland Brooch - Plate",
                    "filepath": "/brooches/NewfoundlandBroochPlate.jpg",
                    "alt": ""
                }
            ]   
        },
        "7": {
            "Name": "Newfoundland Brooch - Stained",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Newfoundland", "Stained"],
            "Images": [
                {
                    "title": "Newfoundland Brooch - Card",
                    "filepath": "/brooches/NewfoundlandBroochCard.jpg",
                    "alt": ""
                },
                {
                    "title": "Newfoundland Brooch - Plate",
                    "filepath": "/brooches/NewfoundlandBroochPlate.jpg",
                    "alt": ""
                }
            ]
        },
        "8": {
            "Name": "Puffin Brooch",
            "Category": "0",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Brooch", "Wood", "Puffin"],
            "Images": [
                {
                    "title": "Puffin Brooch - Card",
                    "filepath": "/brooches/PuffinBroochCard.jpg",
                    "alt": ""
                },
                {
                    "title": "Puffin Brooch - Plate",
                    "filepath": "/brooches/PuffinBroochPlate.jpg",
                    "alt": ""
                }
            ]
        },
        "9": {
            "Name": "Partridgeberry Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Partridgeberry", "Newfoundland"],
            "Images": [
                {
                    "title": "Partridgeberry Earrings - Card",
                    "filepath": "/earrings/BerryEarringCard_Partridgeberry.jpg",
                    "alt": ""
                },
                {
                    "title": "Partridgeberry Earrings - Plate",
                    "filepath": "/earrings/BerryEarringPlate_Partridgeberry.jpg",
                    "alt": ""
                }
            ]
        },
        "10": {
                "Name": "Bakeapple Earrings",
                "category": "1",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Earrings", "Wood", "Bakeapple", "Newfoundland"],
                "Images": [
                    {
                        "title": "Bakeapple Earrings - Card",
                        "filepath": "/earrings/BerryEarringCard_Bakeapple.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Bakeapple Earrings - Plate",
                        "filepath": "/earrings/BerryEarringPlate_Bakeapple.jpg",
                        "alt": ""
                    }
                ]
            },
        "11": {
            "Name": "Blueberry Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Blueberry", "Newfoundland"],
            "Images": [
                {
                    "title": "Blueberry Earrings - Card",
                    "filepath": "/earrings/BerryEarringCard_Blueberry.jpg",
                    "alt": ""
                },
                {
                    "title": "Blueberry Earrings - Plate",
                    "filepath": "/earrings/BerryEarringPlate_Blueberry.jpg",
                    "alt": ""
                }
            ]
        },
        "12": {
            "Name": "Casette Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Casette"],
            "Images": [
                {
                    "title": "Casette Earrings - Plate",
                    "filepath": "/earrings/CasetteEarringPlate.jpg",
                    "alt": ""
                }
            ]
        },
        "13": {
            "Name": "Diamond Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Diamond"],
            "Images": [
                {
                    "title": "Diamond Earrings - Plate",
                    "filepath": "/earrings/DiamondEarringPlate.jpg",
                    "alt": ""
                },                  
                {
                    "title": "Diamond Earrings - Card",
                    "filepath": "/earrings/DiamondEarringCard.jpg",
                    "alt": ""
                }
            ]
        },
        "14": {
            "Name": "Hotdog Earring",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Hotdog"],
            "Images": [
                {
                    "title": "Hotdog Earrings - Plate",
                    "filepath": "/earrings/HotdogEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Hotdog Earrings - Card",
                    "filepath": "/earrings/HotdogEarringCard.jpg",
                    "alt": ""
                }
            ]
        },
        "15": {
            "Name": "Labrador Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Labrador"],
            "Images": [
                {
                    "title": "Labrador Earrings - Plate",
                    "filepath": "/earrings/MapEarringPlate_Labrador.jpg",
                    "alt": ""
                },                
                {
                    "title": "Labrador Earrings - Card",
                    "filepath": "/earrings/MapEarringCard_Labrador.jpg",
                    "alt": ""
                }, 
                {
                    "title": "Labrador Earrings - Plate - Dime",
                    "filepath": "/earrings/MapEarringPlateDime_Labrador.jpg",
                    "alt": ""
                }
            ]
        },
        "16": {
            "Name": "Leaf Earring - Green",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Leaf", "Green"],
            "Images": [
                {
                    "title": "Leaf Earrings - Plate",
                    "filepath": "/earrings/LeafEarringPlate_Green.jpg",
                    "alt": ""
                },                
                {
                    "title": "Leaf Earrings - Card",
                    "filepath": "/earrings/LeafEarringCard_Green.jpg",
                    "alt": ""
                }
            ]
        },
        "17": {
            "Name": "Leaf Earring - Red",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Leaf", "Red"],
            "Images": [
                {
                    "title": "Leaf Earrings - Plate",
                    "filepath": "/earrings/LeafEarringPlate_Red.jpg",
                    "alt": ""
                },                
                {
                    "title": "Leaf Earrings - Plate - Dime",
                    "filepath": "/earrings/LeafEarringPlateDime_Red.jpg",
                    "alt": ""
                }
            ]
        },
        "18": {
            "Name": "Leaf Earring - Yellow",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Leaf", "Yellow"],
            "Images": [
                {
                    "title": "Leaf Earrings - Plate",
                    "filepath": "/earrings/LeafEarringPlate_Yellow.jpg",
                    "alt": ""
                },                
                {
                    "title": "Leaf Earrings - Plate - Dime",
                    "filepath": "/earrings/LeafEarringPlateDime_Yellow.jpg",
                    "alt": ""
                }
            ]
        },
        "19": {
            "Name": "Leaf Earring - Orange",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Leaf", "Orange"],
            "Images": [
                {
                    "title": "Leaf Earrings - Plate",
                    "filepath": "/earrings/LeafEarringPlate_Orange.jpg",
                    "alt": ""
                },                
                {
                    "title": "Leaf Earrings - Plate - Dime",
                    "filepath": "/earrings/LeafEarringPlateDime_Orange.jpg",
                    "alt": ""
                }
            ]
        },
        "20": {
            "Name": "Maple Leaf Earrings - Natural",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Maple Leaf"],
            "Images": [
                {
                    "title": "Maple Leaf Earrings - Plate",
                    "filepath": "/earrings/MapleLeafEarringPlate_Natural.jpg",
                    "alt": ""
                },                
                {
                    "title": "Maple Leaf Earrings - Card",
                    "filepath": "/earrings/MapleLeafEarringCard_Natural.jpg",
                    "alt": ""
                }
            ]
        },
        "21": {
            "Name": "Maple Leaf Earrings - Red",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Maple Leaf", "Red"],
            "Images": [
                {
                    "title": "Red Maple Leaf Earrings - Plate",
                    "filepath": "/earrings/MapleLeafEarringPlate_Red.jpg",
                    "alt": ""
                },                
                {
                    "title": "Red Maple Leaf Earrings - Card",
                    "filepath": "/earrings/MapleLeafEarringCard_Red.jpg",
                    "alt": ""
                }
            ]
        },
        "22": {
                "Name": "Newfoundland Earrings",
                "category": "1",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Earrings", "Wood", "Newfoundland"],
                "Images": [
                    {
                        "title": "Newfoundland Earrings - Card",
                        "filepath": "/earrings/MapEarringCard_Newfoundland.jpg",
                        "alt": ""
                    },                
                    {
                        "title": "Newfoundland Earrings - Plate",
                        "filepath": "/earrings/MapEarringPlate_Newfoundland_.jpg",
                        "alt": ""
                    }
                ]
            },
        "23": {
            "Name": "Newfoundland and Labrador Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Newfoundland", "Labrador"],
            "Images": [
                {
                    "title": "Newfoundland and Labrador Earrings - Card",
                    "filepath": "/earrings/MapEarringCard_NewfoundlandLabrador.jpg",
                    "alt": ""
                },                
                {
                    "title": "Newfoundland and Labrador Earrings - Plate",
                    "filepath": "/earrings/MapEarringPlate_NewfoundlandLabrador.jpg",
                    "alt": ""
                }
            ]
        },
        "24": {
            "Name": "Moonkitties Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Moonkitties"],
            "Images": [
                {
                    "title": "Moonkitties Earrings - Plate",
                    "filepath": "/earrings/MoonkittiesEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Moonkitties Earrings - Card",
                    "filepath": "/earrings/MoonkittiesEarringCard.jpg",
                    "alt": ""
                }
            ]
        },
        "25": {
            "Name": "Pineapple Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Pineapple"],
            "Images": [
                {
                    "title": "Pineapple Earrings - Plate",
                    "filepath": "/earrings/PineappleEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Pineapple Earrings - Card",
                    "filepath": "/earrings/PineappleEarringCard.jpg",
                    "alt": ""
                }
            ]
        },
        "26": {
            "Name": "Planner Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Planner"],
            "Images": [
                {
                    "title": "Planner Earrings - Plate",
                    "filepath": "/earrings/PlannerEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Planner Earrings - Plate - Dime",
                    "filepath": "/earrings/PlannerEarringPlateDime.jpg",
                    "alt": ""
                }
            ]
        },
        "27": {
            "Name": "Ships Wheel Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Ships Wheel"],
            "Images": [
                {
                    "title": "Ships Wheel Earrings - Plate",
                    "filepath": "/earrings/ShipsWheelEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Ships Wheel Earrings - Card",
                    "filepath": "/earrings/ShipsWheelEarringCard.jpg",
                    "alt": ""
                }
            ] 
        },
        "28": {
            "Name": "Strawberry Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Strawberry"],
            "Images": [
                {
                    "title": "Strawberry Earrings - Plate",
                    "filepath": "/earrings/StrawberryEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Strawberry Earrings - Card",
                    "filepath": "/earrings/StrawberryEarringCard.jpg",
                    "alt": ""
                }
            ]
        },
        "29": {
            "Name": "Strawberry Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Strawberry"],
            "Images": [
                {
                    "title": "Strawberry Earrings - Plate",
                    "filepath": "/earrings/StrawberryEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Strawberry Earrings - Card",
                    "filepath": "/earrings/StrawberryEarringCard.jpg",
                    "alt": ""
                }
            ]
        }, 
        "30": {
            "Name": "Succulent Earrings",
            "category": "1",
            "Price": 10,
            "Description": "",
            "size": "",
            "tags": ["Earrings", "Wood", "Succulent"],
            "Images": [
                {
                    "title": "Succulent Earrings - Plate",
                    "filepath": "/earrings/SucculentEarringPlate.jpg",
                    "alt": ""
                },                
                {
                    "title": "Succulent Earrings - Card",
                    "filepath": "/earrings/SucculentEarringCard.jpg",
                    "alt": ""
                }
            ]
        },
        "31": {
                "Name": "Sushi Earrings",
                "category": "1",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Earrings", "Wood", "Sushi"],
                "Images": [
                    {
                        "title": "Sushi Earrings - Plate",
                        "filepath": "/earrings/SushiEarringPlate.jpg",
                        "alt": ""
                    },                
                    {
                        "title": "Sushi Earrings - Card",
                        "filepath": "/earrings/SushiEarringCard.jpg",
                        "alt": ""
                    }
                ]
            },
            "32": {
                "Name": "Terrarium Earrings",
                "category": "1",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Earrings", "Wood", "Terrarium"],
                "Images": [
                    {
                        "title": "Terrarium Earrings - Plate",
                        "filepath": "/earrings/TerrariumEarringPlate.jpg",
                        "alt": ""
                    },                
                    {
                        "title": "Terrarium Earrings - Card",
                        "filepath": "/earrings/TerrariumEarringCard.jpg",
                        "alt": ""
                    }
                ]
            },
            "33": {
                "Name": "Togo Cup Earrings",
                "category": "1",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Earrings", "Wood", "Togo Cup", "Coffee", "Tea"],
                "Images": [
                    {
                        "title": "Togo Cup Earrings - Plate",
                        "filepath": "/earrings/TogoCupEarringPlate.jpg",
                        "alt": ""
                    },                
                    {
                        "title": "Togo Cup Earrings - Card",
                        "filepath": "/earrings/TogoCupEarringCard.jpg",
                        "alt": ""
                    }
                ]
            },
            "34":{
                "Name": "Whale Tail Earrings",
                "category": "1",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Earrings", "Wood", "Whale Tail"],
                "Images": [
                    {
                        "title": "Whale Tail Earrings - Plate",
                        "filepath": "/earrings/WhaleTailEarringPlate.jpg",
                        "alt": ""
                    },                
                    {
                        "title": "Whale Tail Earrings - Card",
                        "filepath": "/earrings/WhaleTailEarringCard.jpg",
                        "alt": ""
                    }
                ]
            },
            "35": {
                    "Name": "Best Kind Keychain",
                    "category": "2",
                    "Price": 10,
                    "Description": "",
                    "size": "",
                    "tags": ["Keychains", "Wood", "Best Kind"],
                    "Images": [
                        {
                            "title": "Best Kind Keychain - Plate",
                            "filepath": "/keychains/BestkindKeychainPlate.jpg",
                            "alt": ""
                        },
                        {
                            "title": "Best Kind Keychain - Tag",
                            "filepath": "/keychains/BestkindKeychainPlateTag.jpg",
                            "alt": ""
                        }
                    ]
                },
            "36": {
                    "Name": "Dies at You Keychain",
                    "category": "2",
                    "Price": 10,
                    "Description": "",
                    "size": "",
                    "tags": ["Keychains", "Wood", "Dies at You"],
                    "Images": [
                        {
                            "title": "Dies at You Keychain - Plate",
                            "filepath": "/keychains/DiesatyouKeychainPlate.jpg",
                            "alt": ""
                        },
                        {
                            "title": "Dies at You Keychain - Tag",
                            "filepath": "/keychains/DiesatyouKeychainPlateTag.jpg",
                            "alt": ""
                        }
                    ]
                },
            "37": {
                    "Name": "Half Cut Keychain",
                    "category": "2",
                    "Price": 10,
                    "Description": "",
                    "size": "",
                    "tags": ["Keychains", "Wood", "Half Cut"],
                    "Images": [
                        {
                            "title": "Half Cut Keychain - Plate",
                            "filepath": "/keychains/HalfcutKeychainPlate.jpg",
                            "alt": ""
                        },
                        {
                            "title": "Half Cut Keychain - Tag",
                            "filepath": "/keychains/HalfcutKeychainPlateTag.jpg",
                            "alt": ""
                        }
                ]
            },
            "38": {
                "Name": "Proper 'Ting Keychain",
                "category": "2",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Keychains", "Wood", "Proper 'Ting", "Proper Thing"],
                "Images": [
                    {
                        "title": "Proper 'Ting Keychain - Plate",
                        "filepath": "/keychains/PropertingKeychainPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Proper 'Ting Keychain - Tag",
                        "filepath": "/keychains/PropertingKeychainPlateTag.jpg",
                        "alt": ""
                    }
                ]
            }, 
            "39": {
                "Name": "Rotted Keychain",
                "category": "2",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Keychains", "Wood", "Rotted"],
                "Images": [
                    {
                        "title": "Rotted Keychain - Plate",
                        "filepath": "/keychains/RottedKeychainPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Rotted Keychain - Tag",
                        "filepath": "/keychains/RottedKeychainPlateTag.jpg",
                        "alt": ""
                    }
                ]
            },
            "40": {
                "Name": "Some Crooked Keychain",
                "category": "2",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Keychains", "Wood", "Some Crooked"],
                "Images": [
                    {
                        "title": "Some Crooked Keychain - Plate",
                        "filepath": "/keychains/SomecrookedKeychainPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Some Crooked Keychain - Tag",
                        "filepath": "/keychains/SomecrookedKeychainPlateTag.jpg",
                        "alt": ""
                    }
                ]
            },
            "41": {
                "Name": "Townie Keychain",
                "category": "2",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Keychains", "Wood", "Townie"],
                "Images": [
                    {
                        "title": "Townie Keychain - Plate",
                        "filepath": "/keychains/TownieKeychainPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Townie Keychain - Tag",
                        "filepath": "/keychains/TownieKeychainPlateTag.jpg",
                        "alt": ""
                    }
                ]
            },
            "42":            {
                "Name": "RowHouse Magnet",
                "category": "3",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Magnets", "Wood"],
                "Images": [
                    {
                        "title": "RowHouse Magnet - Plate",
                        "filepath": "/magnets/RowhouseMagnetPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "RowHouse Magnet  Back- Plate",
                        "filepath": "/magnets/RowhouseMagnetCardBack.jpg",
                        "alt": ""
                    },
                    {
                        "title": "RowHouse Magnet",
                        "filepath": "/magnets/RowhouseMagnetWood.jpg",
                        "alt": ""
                    }
                ]
            },
            "43": {
                "Name": "Best Kind Ornament",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Best Kind"],
                "Images": [
                    {
                        "title": "Best Kind Ornament - Plate",
                        "filepath": "/ornaments/BestkindOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Best Kind Ornament - Detail",
                        "filepath": "/ornaments/BestkindOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ]
            },
            "44": {
                "Name": "Dies at You Ornament",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Dies at You"],
                "Images": [
                    {
                        "title": "Dies at You Ornament - Plate",
                        "filepath": "/ornaments/DiesatyouOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Dies at You Ornament - Detail",
                        "filepath": "/ornaments/DiesatyouOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ]
            },
            "45": {
                "Name": "Mummers Ornament",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Mummers"],
                "Images": [
                    {
                        "title": "Mummers Ornament - Plate",
                        "filepath": "/ornaments/MummersOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Mummers Ornament - Detail",
                        "filepath": "/ornaments/MummersOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ]
            },
            "46": {
                "Name": "Oh Me Nerves Ornament",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Oh Me Nerves", "Oh My Nerves"],
                "Images": [
                    {
                        "title": "Oh Me Nerves Ornament - Plate",
                        "filepath": "/ornaments/NervesOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Oh Me Nerves Ornament - Detail",
                        "filepath": "/ornaments/NervesOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ]
            },
            "47": {
                "Name": "Rant and Roar Ornament",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Rant and Roar"],
                "Images": [
                    {
                        "title": "Rant and Roar Ornament - Plate",
                        "filepath": "/ornaments/RantRoarOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Rant and Roar Ornament - Detail",
                        "filepath": "/ornaments/RantRoarOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ]
            },
            "48": {
                "Name": "Tibbs Eve Ornament",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Tibbs Eve"],
                "Images": [
                    {
                        "title": "Tibbs Eve Ornament - Plate",
                        "filepath": "/ornaments/TibbsOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Tibbs Eve Ornament - Detail",
                        "filepath": "/ornaments/TibbsOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ]
            },
            "49": {
                "Name": "Whatta Y'at Ornament",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Whatta Y'at", "What are you at", "What're you at"],
                "Images": [
                    {
                        "title": "Whatta Y'at Ornament - Plate",
                        "filepath": "/ornaments/WhattyaOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Whatta Y'at Ornament - Detail",
                        "filepath": "/ornaments/WhattyaOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ] 
            },
            "50": {
                "Name": "Yes B'y",
                "category": "4",
                "Price": 10,
                "Description": "",
                "size": "",
                "tags": ["Ornaments", "Wood", "Yes B'y"],
                "Images": [
                    {
                        "title": "Yes B'y Ornament - Plate",
                        "filepath": "/ornaments/YesbyOrnamentPlate.jpg",
                        "alt": ""
                    },
                    {
                        "title": "Yes B'y Ornament - Detail",
                        "filepath": "/ornaments/YesbyOrnamentPlateDetail.jpg",
                        "alt": ""
                    }
                ]
            }
        }

def to_snake_case(s):
    return ''.join(['_' + c.lower() if c.isupper() else c for c in s]).lstrip('_')

def update_alt_text(title):
    if "Card" in title:
        return f"Image of {title.replace(' - Card', '')} on card"
    else:
        return f"Image of {title}"

updated_data = {}
for key, value in data.items():
    value["id"] = key
    new_item = {to_snake_case(k): v for k, v in value.items()}
    
    if "images" in new_item:  # Correct key in snake_case
        new_images_list = []
        for img in new_item["images"]:
            if 'alt' in img and img['alt'] == "":  # Check if 'alt' exists and is an empty string
                img['alt'] = update_alt_text(img['title'])  # Update the alt text
            new_images_list.append(img)
        new_item['images'] = new_images_list
    
    updated_data[key] = new_item

# Convert the updated dictionary to JSON and save it to a file
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(updated_data, f, ensure_ascii=False, indent=2)