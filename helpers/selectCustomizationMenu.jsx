chatbotVocabulary = {
    beverages : {
        coffee: {
            premium : {
                flavorLimit: 3,
                specials: {
                    monkeyBonanza : {
                        name : "Monkey Bonanza",
                        desc : "Peanut butter, banana and chocolate combined into a scrumptious coffee!"
                    },
                    caramelCrunch : {
                        name : "Caramel Crunch",
                        desc : "Caramel syrup, caramel crunch and butter pecan sauce create a rich and stimulating start to your morning!"
                    },
                    stimulatingSunrise : {
                        name : "stimulating Sunrise",
                        desc : "Peppermint, chocolate syrup, and bonus espresso shot to open your eyes wide and get your engine running!"
                    }
                }
            },
            special : {
                flavorLimit : 2,
                specials : {
                    skinnyMinty : {
                        name : "Skinny Minty",
                        desc : "Chocolate and peppermint to remind you of your favorite cookies on a dreary morning"
                    },
                    caramelMacchiato : {
                        name : "Caramel Macchiato",
                        desc : "Vanilla and caramel blended into a creamy start for a beautiful morning"
                    }
                }
            },
            essential : {
                flavorLimit : 1
                }
            },
            flavors : [
                'Vanilla', 
                'Chocolate', 
                'Caramel', 
                'Caramel Crunches', 
                'Crunch Bar Bits', 
                'Peppermint',
                'Butterfinger Bites',
                'Banana',
                'Peanut Butter'   
            ]
        },
        juiceSodaBar : {
            flavorLimit : 2,
            baseLimit : 1,
            bases : {
                soda : [
                    'Pepsi', 
                    'Dr. Pepper', 
                    'Mountain Dew', 
                    'Mug Root Beer', 
                    'Diet Pepsi', 
                    'Diet Dr. Pepper', 
                    'Custom Soda Flavor', 
                    'Ginger Ale' ],
                juices : [
                    'Lemonade',
                    'Limeade',
                    'Fruit Punch',
                    'Cranberry Juice',
                    'Pomegranate Juice',
                    'Orange Juice',
                    'Apple Juice',
                    'Grape Juice',
                    'Grapefruit Juice'
                ]
            },
            flavors : [
                'Lime',
                'Cream Soda',
                'Lemon',
                'Cherry',
                'Grape',
                'Grapefruit',
                'Vanilla',
                'Chocolate',
                'Caramel',
                'Orange',
                'Peppermint',
                'Butter Rum'
            ],
            specials : {
                cherryLimemade : {
                    name: 'Cherry Limemade',
                    desc: 'A refreshing and delicious limemade with cherry flavoring poured over crushed ice',
                },
                ownersSpecial : {
                    name: "Owner's Special",
                    desc: "Chase's favorite beverage! An ice cold Pepsi mixed with butter rum syrup poured over ice"
                },
                
            }
        },
        adultBeverages : {
            flavorLimit: 6,
            ingredients: [
                'Rum',
                'Whiskey',
                'Gin',
                'Vodka',
                'Orange juice',
                'Triple sec',
                'Blue caracao',
                'Lemon juice',
                'Tequila',
                'Pepsi',
                'Coke',
                'Dr. Pepper',
                'Sprite',
                'Mountain Dew',
                'Fireball Whiskey',
                'Cognac',
                'Creme de Cacao',
                'Club Soda',
                'Brandy',
                'Vermouth',
                'Absinthe',
                'Pineapple Juice',
                'Grenadine',
                'Scotch',
                'Orange Bitters',
                'Lime Juice',
                'Wine',
                'Champagne'
            ],

        }

    }

function selectChatbotDialogue(menuState, subMenuState) {
    menuContextProp = chatbotVocabulary[menuState];
    selectedChat = menuContextProp[subMenuState];
    randomChatString = selectedChat[Math.floor(Math.random()*selectedChat.length)];
        return (randomChatString)
}

export default function selectChatbotDialogue();