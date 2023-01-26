chatbotVocabulary = {
        aboutUs : {
            introduction : [],
            contact : [],
            staff : [],
            hours : []
        },
        breakfast : {
            introduction : [],
            specials : [],
            sides : [],
            beverages : [],
        },
        lunch : {
            introduction : [],
            specials : [],
            sides : [],
            beverages : [],
        }, 
        dinner : {
            introduction : [],
            specials : [],
            sides : [],
            beverages : [],
        }, 
        services : {
            specials : [],
            sides : [],
            beverages : [],
        }, 
        specialcontext: {
            checkout : [],
            clearOrder : [],
            firstMeeting : [],
        }
    }

    function selectChatbotDialogue(menuState, subMenuState) {
        menuContextProp = chatbotVocabulary[menuState];
        selectedChat = menuContextProp[subMenuState];
        randomChatString = selectedChat[Math.floor(Math.random()*selectedChat.length)];
            return (randomChatString)
    }
    
    export default function selectChatbotDialogue();


