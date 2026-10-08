// Wait for whole page to load
document.addEventListener("DOMContentLoaded", function() {

    // Random facts button //
    // References
    const randomFactButton=document.querySelector("#random-fact-button");
    const factDisplay = document.querySelector("#fact-display");

    // Random facts
    const facts = [
        "I like climbing despite being afraid of heights. I am still not entirely sure why.",
        "The bigger and messier a dataset gets, the more I want to put it in a massive spreadsheet.",
        "Who was that side character we met three D&D sessions ago? There is a good chance I remember.",
        "My D&D notes got slightly out of hand during our first campaign, so naturally I turned them into a book afterwards.",
        "I started CS50 because I was curious about programming. This website is what happened next.",
        "I was the first person in my family to finish university, which is still one of the things I am most proud of.",
        "Unexpected experimental result? Annoying, yes. But also: now I really want to know why.",
        "I have a Master's degree in Biochemistry and somehow now spend quite a lot of time writing JavaScript for fun.",
        "At work, I am often the person people ask: 'Didn't we test this at some point?' Usually, I have an idea where to look.",
        "I don't really like knowing just enough about something. Unfortunately, this is how new hobbies happen.",
        "I currently know considerably more about TFF and BBR filtration than I ever expected to know about filtration.",
        "A few months after starting at CureVac, I found myself at the FAT of a completely new manufacturing platform. That escalated quickly.",
        "I helped get a new automated manufacturing platform ready for GMP manufacturing. There were a lot of documents involved. A lot.",
        "I like creating order from chaos. Preferably with tables, colour coding and perhaps an unnecessarily large spreadsheet.",
        "My hobbies include programming, climbing, puzzles and D&D. Apparently relaxing without solving something is not really my thing.",
        "I taught myself crochet and can confirm that repeatedly undoing your work is an important part of the learning process.",
        "I like baking bread, although bread dough occasionally has very different opinions about my plans.",
        "My first question when something strange happens is usually 'Why?', followed shortly by opening the data.",
        "I am very good at remembering obscure details and surprisingly bad at remembering why I walked into a room.",
        "Give me scattered information from five different places and there is a significant risk that I will make an overview.",
        "I tend to get very interested in one topic, learn far too much about it, and eventually wander off towards the next interesting thing.",
        "Protein purification was one of my main academic interests. Apparently filtration followed me into my professional life.",
        "I enjoy troubleshooting more than I probably should.",
        "I am the kind of person who takes a course for fun and then somehow ends up with another project.",
        "A climbing route, a weird dataset and a CS50 problem set have more in common than they probably should: I really want to figure them out.",
        "I genuinely enjoy finding information that everyone else thought was lost somewhere in old documentation.",
        "If something doesn't make sense, there is very little chance I will just accept that and move on.",
        "I have never really mastered the concept of having only one hobby at a time.",
        "Somewhere between biochemistry, process engineering, D&D and programming there seems to be a recurring theme: puzzles.",
        "I helped train operators for PQ runs on a new manufacturing platform. Teaching something is also a very effective way of finding out whether you actually understand it.",
        "I can spend ages organising information and then be disproportionately pleased with the resulting table.",
        "I tend to notice tasks that nobody owns. This is useful, although occasionally dangerous for my own to-do list."
    ];

    // Function to reveal a random fact
    function revealFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
    }

    // Make button clickable if it exists on page
    if (randomFactButton){
        randomFactButton.addEventListener("click", revealFact);
    }

    // Job explorer buttons
    // References
    const devButton = document.querySelector("#development-button");
    const troubleButton = document.querySelector("#troubleshooting-button");
    const gmpButton = document.querySelector("#gmp-button");
    const expDisplay = document.querySelector("#exp-display");

    // Make buttons clickable and present text if buttons exist on page
    if (devButton && troubleButton && gmpButton) {
        devButton.addEventListener("click", function() {
            expDisplay.innerHTML = "<h3>Development</h3><p>Designing experiments, comparing process conditions, digging through data and trying to understand what the process is actually doing.</p>";
        });

        troubleButton.addEventListener("click", function() {
            expDisplay.innerHTML = "<h3>Troubleshooting</h3><p>This is usually where things get interesting. Something behaves differently than expected, so it is time to look at process data, analytical results, previous experiments and whatever other clues I can find.</p>";
        });

        gmpButton.addEventListener("click", function() {
            expDisplay.innerHTML = "<h3>GMP</h3><p>The point where 'it works' is no longer enough. Qualification activities, PFMEAs, SOPs, operator training and, unsurprisingly, quite a lot of documentation.</p>";
        });
    }
});

