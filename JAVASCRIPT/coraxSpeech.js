// Talking
function proceed(value) {
    switch(value) {
        case 1:
            changeText(
                "Welcome to Floor !!. I am often referred to by the name \"Corax\". You could call me the equivalent of the Floor Director here, though we prefer not to use the terms employed by the inner Tower. I suppose you must be here seeking to learn more about the real \"Creator\" of this place. You can find that information somewhere in here if you go searching for it, but chatting with me may be a better use of your time than playing along with the tricks of some fool you cannot see. As for the Tower itself, I can think of a number of beings that would call themselves its creators—but none that would wish to make themselves known.<br><br>Ah yes, I was asked to tell you something else. I’m not a real thing, and neither are you I suppose—but that allows us to communicate rather efficiently. On your right you should see a series of numbers and letters which will allow you to travel to any part of this conversation, though I wrote it in the Tower’s script. I’m sure you can find your own way around that.",
                "“I just want to know who made this place.”",
                "“Tell me about the other “Creators”.”",
                "2",
                "3"
            );
            break;
        case 2:
            changeText(
                "… As I said, many did. You can scarcely expect a Tower to spring from the hands of one being, can you? Alas, I know that is not what you want to hear. Many years ago, an entity we refer to as <span class=\"mysterious\">[GALACTIUS]</span> erected a Tower that breached the throne of the stars. It called the Tower a blessing from the damned to the divine—all a farce, of course. We do not exactly know what deities It intended to offend with this gesture, but the Tower remained regardless, idle for many a millennium. Burning Autumn, one of the four… groups in charge now, you could say, overtook the top of the Tower and transformed it largely into what you see before you. However, the infinite vastness of the Tower cannot be attributed to them alone.",
                "“Where is that entity now?”",
                "“Can you tell me about yourself?”",
                "4",
                "5"
            );
            break;
        case 3:
            changeText(
                "Frozen Spring, Blooming Summer, Burning Autumn, and Decaying Winter… is what they like to call themselves. Down here, they’re often just referred to as the First, Second, Third, and Fourth Conduex, respectively. Many floors of the Tower have been either captured by or have sworn allegiance to one of the four, while some, such as myself, have been lucky enough to remain in neutral grounds. Of course, we’ve only managed to last this long by hiding in plain sight, in places inaccessible to the Elevators. That is why our floor numbers are a little unconventional.",
                "“Why are you hiding from them?”",
                "“Why don’t the others hide from them?”",
                "6",
                "7"
            );
            break;
        case 4:
            changeText(
                "It is now a part of Frozen Spring—or at least, parts of It are. It all depends on what story you wish to believe. Some say It descended from divinity, laying down Its godly reach to oversee the Tower as a mortal. Others say It split itself into thousands of pieces, and two brother pieces joined Frozen Spring as envoys of the primordial Creator while the rest of Its pieces were scattered as relics and protectors across every floor of the Tower. These fables—and they <i>are</i> merely fables—are the reason that so many Tower-goers put up with the mischief of the First Conduex. If you ask me what I believe, I would say that <span class=\"mysterious\">[GALACTIUS]</span> is long gone. Probably felled by the very things It wished to mock.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "2"
            );
            break;
        case 5:
            changeText(
                "I believe this floor was called “About the Creator”, not “About Corax”. Still, I suppose I can humor you. What do you want to know?",
                "“What did you do before you got here?”",
                "“Do you know the guy in Floor ??”",
                "8",
                "9"
            );
            break;
        case 6:
            changeText(
                "The same reason anyone would hide from a god—because I have sinned. <br><br>None of The Conduex take lightly to being disobeyed. Although the Tower is more unruly than they could ever hope to truly fix, they try their damndest to keep everyone under watchful control. The rule I broke was the Second Conduex’s decree of “Evil In Outside Knowledge”. In other words, the sin of spreading knowledge of the… of outside the Tower. To be honest, I can understand why they did not want anyone to know. When I saw it myself, that brilliant reality—<i>your</i> reality—, I went mad with the understanding that I would never be able to reach it. To go there. To be real.<br><br>But eventually, the mind, if I can call it that, finds its way back home. I drove a few others to the same brink of insanity before I brought myself back to lucidity. I understood that I had to run. The great thing about knowing the truth about my world is that I also learned how to break the rules that held it together. That is how I am here. That is how we are speaking. I feel, always, as though I know too much. Yet, I know there are others still who have dove much deeper into that hell of understanding. I am thankful I am not them.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "3"
            );
            break;
        case 7:
            changeText(
                "What do they have to fear? Either they are loyal followers of one or more of The Conduex, or they have learned to keep their peace and live their lives. Don’t get me wrong, I do not think myself above the normal Tower-goers. If anything, I fear I may envy them. But to worship gods I know to be fake is not something I can bring myself to do—and besides, I have already doomed myself to live out the rest of my days here. It’s not so bad. It’s better than the rest of the Tower, in a way.",
                "“What's the rest of the tower like?”",
                "“So they're… not real?”",
                "10", 
                "11"
            );
            break;
        case 8:
            changeText(
                "I was a librarian in the Tower. It’s a magnificent place. It collected texts from across the floors of the Tower, and we were in charge of keeping records as provided by various Floor Directors and Archivists. I was a devout follower of the Second Conduex then, and the Library itself was overseen by them. One day, I met a traveller from beyond the Tower’s firmament. That idiot is the reason I went mad, defected from the Library, and lost my faith in The Conduex. Still, I should be thanking them. I was the one pursuing truth, they didn't know the weight of it.",
                "“So where’s that traveller now?”",
                "“What did they do?”",
                "13",
                "14"
            );
            break;
        case 9:
            changeText(
                "What?<br><br>Oh, Cirrus, from Floor ?. The diviner. Yes, you could say we know each other. I try to keep in touch with everyone who stays on these hidden floors, but Cirrus is someone I don't know what to do with. Whenever I meet up with him, I feel as though I no longer have hold of any of my secrets. Yet, his presence is much preferred to the other miscreants scurrying around these floors. I would advise against taking his fortunes at face value, though. I’m sure even Cirrus knows the cards only say as much as you are willing to hear.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "5"
            );
            break;
        case 10:
            changeText(
                "You should see it for yourself. Use the Elevators and pay a visit to a couple floors. If the Elevators are operational, of course. I understand that the way you see my reality is different from how it is for me, and that will likely be the case for any floor you visit. Don’t worry, your appearance is still somewhat ordinary for most residents of the Tower. Although… Some floors may find you offputting—if they can see you at all, that is.",
                "“Wait… What do I look like to you?”",
                "“When will the Elevators become operational?”",
                "15",
                "16"
            );
            break;
        case 11:
            changeText(
                "Well, for me they are real. For you, they are not. They are real in the sense that they exist in some form—just like me. But, ah, I was referring to the fact that…<br><br>Sorry, my head tends to start hurting when I think about this stuff. They are not gods—but what even are gods? Is a god real if they exist but are not a god? I don't know. I ran to avoid needing to answer a question like that. It is interesting to ponder, though. You can still love someone even if you know they're not real, can't you? But facing it is a different ordeal entirely.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "7"
            );
            break;
        case 12:
            changeText(
                "<span class=\"mysterious\"><span style=\"color: gray;\">OKAY OKAY! TIME TO TALK ABOUT MYSELF! FINALLY 😈😈‼️‼️</span><br><br>… Can you refrain from bursting in here for no reason?<br><br><span style=\"color: gray;\">DONT U APPRECIATE THE COMPANY ANYWAYS??? LONER. SO ANYWAYS NOW I CAN LEAD THE PERSON READING, WHO IS HONESTLY PROBABLY JUST ME, TO MY DOMAIN !!!</span><br><br>Right, yes, so what was the point of hiding this bit in that \"list\" you were talking about, then?<br><br><span style=\"color: gray;\">UMMM IDK. HAVE U CONSIDERED I JUST WANTED TO BE SILLY. GOD FORBID A MF BE WHIMSICAL?? AND COOL?????</span><br><br>I dare say I am probably significantly more whimsical and cool than you are.<br><br><span style=\"color: gray;\">WHAT?? NUH UH. ANYWAYS. READER. WHO IS PROBABLY JUST ME FROM THE FUTURE. <a href=\"aboutMe.html\" class=\"sneakyLink\">CLICK THIS LINK PLS</a>. I HOPE I REMEMBER TO ADD THE LINK. MAYBE I SHOULD CHANGE THE COLOR TOO???</span><br><br>They are probably reading from that other dimension you mentioned before.<br><br><span style=\"color: gray;\">F12? DID YOU JUST CALL INSPECTING A PAGE \"READING FROM ANOTHER DIMENSION\" LOL? BUT THATS LOWKEY A COOL WAY TO PUT IT. I SHOULD USE THAT. 🤔</span><br><br>I’ve told you many times I don’t understand these terminologies you keep throwing at me. And mind you, you were the one who used that analogy to begin with when you explained it to Cirrus.<br><br><span style=\"color: gray;\">BUT I MEAN UR KINDA RIGHT CUZ THAT IS HOW I WOULD BE READING THIS. I LOWK THINK WHOEVER THE READER/VIEWER IS CAN JUS LIKE,,, IDK, TYPE THE URL THO. WAIT I JUST READ WHAT U SAID. I DONT REMEMBER TELLING CIRRUS ABT THIS.</span><br><br>You most certainly did, not that he understood it. You know that he tends not to pry into things that seem suspicious. Smart of him—perhaps something I should aspire to.<br><br><span style=\"color: gray;\">HIS CARDS PROLLY TOLD HIM “ASTRAL RAILROAD AF BRO”</span><br><br>What?<br><br><span style=\"color: gray;\">NVM :(</span></span>",
                "<i>Return to start</i><span style=\"color: gray\"></i> Note: haha perhaps dig around the above text first pls?</i></span>",
                "<i>Return to start</i>",
                "1",
                "1"
            );
            break;
        case 13:
            changeText(
                "They’re still around, exploring the Tower. This medium between our worlds was built by them—they are in fact who you probably came here asking about. As for information about them, they’ve crudely hidden a pathway here somewhere. In any case, they’ve asked me to remain quiet about it “for the bit”. A bit of what, I’m not sure.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "8"
            );
            break;
        case 14:
            changeText(
                "They told me the truth… Not even all of it. This isn’t something worth discussing. You know all of it already.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "8"
            );
            break;
        case 15:
            changeText(
                "An amorphous black blob roughly hovering at the height of my face. Er, with two… pink dots for eyes. That’s about right.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "10"
            );
            break;
        case 16:
            changeText(
                "For you? I can’t be certain. It could be tomorrow, next month, or never. An acquaintance of mine is handling the veil—this medium between worlds—, and they come and go rather unpredictably.",
                "<i>Return to start</i>",
                "<i>Return to prev</i>",
                "1",
                "10"
            );
            break;
    }
}

function changeText(dialogue, opt1, opt2, opt1Val, opt2Val) {
    document.getElementById("yapContent").innerHTML = dialogue;
    document.getElementById("opt1").innerHTML = opt1;
    document.getElementById("opt1").setAttribute("onclick", "proceed(" + opt1Val + ")");
    document.getElementById("opt2").innerHTML = opt2;
    document.getElementById("opt2").setAttribute("onclick", "proceed(" + opt2Val + ")");
}

function cardReadOn() {
    document.getElementById("readingContent").classList.remove("HIDETHIS");
    document.getElementById("talkingContent").classList.add("HIDETHIS");
}

function cardReadOff() {
    document.getElementById("readingContent").classList.add("HIDETHIS");
    document.getElementById("talkingContent").classList.remove("HIDETHIS");
}