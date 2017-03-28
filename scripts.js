var quotesObject = {
    //the array containing the quotes and the authors:
    "quotesArray":[
        {"author":"Helen Keller", "quote":"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."},
        {"author":"Oscar Wilde", "quote":"Keep love in your heart. A life without it is like a sunless garden when the flowers are dead."},
        {"author":"Aristotle", "quote":"It is during our darkest moments that we must focus to see the light."},
        {"author":"Maya Angelou", "quote":"Try to be a rainbow in someone's cloud."},
        {"author":"Joseph Campbell", "quote":"Find a place inside where there's joy, and the joy will burn out the pain."},
        {"author":"Audrey Hepburn", "quote":"Nothing is impossible, the word itself says 'I'm possible'!"},
        {"author":"Robert Louis Stevenson", "quote":"Don't judge each day by the harvest you reap but by the seeds that you plant."},
        {"author":"Buddha", "quote":"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."},
        {"author":"Edmund Burke", "quote":"The only thing necessary for the triumph of evil is for good men to do nothing."},
        {"author":"Lucius Annaeus Seneca", "quote":"One of the most beautiful qualities of true friendship is to understand and to be understood."},
        {"author":"Ralph Waldo Emerson", "quote":"Do not go where the path may lead, go instead where there is no path and leave a trail."},
        {"author":"Aristotle", "quote":"Love is composed of a single soul inhabiting two bodies."},
        {"author":"Mahatma Gandhi", "quote":"Where there is love there is life."},
        {"author":"Albert Camus", "quote":"Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."},
        {"author":"Og Mandino", "quote":"Do all things with love."},
        {"author":"Winston Churchill", "quote":"Success is not final, failure is not fatal: it is the courage to continue that counts."},
        {"author":"Norman Vincent Peale", "quote":"Change your thoughts and you change your world."},
        {"author":"Robert Frost", "quote":"In three words I can sum up everything I've learned about life: it goes on."},
        {"author":"Loretta Young", "quote":"Love isn't something you find. Love is something that finds you."},
        {"author":"Dr. Seuss", "quote":"Today you are you! That is truer than true! There is no one alive who is you-er than you!"},
        {"author":"Nelson Mandela", "quote":"Education is the most powerful weapon which you can use to change the world."},
        {"author":"William Arthur Ward", "quote":"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails."},
        {"author":"Theodore Roosevelt", "quote":"Believe you can and you're halfway there."},
        {"author":"Eleanor Roosevelt", "quote":"The future belongs to those who believe in the beauty of their dreams."},
        {"author":"John F. Kennedy", "quote":"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them."},
        {"author":"Martin Luther King, Jr.", "quote":"Life's most persistent and urgent question is, 'What are you doing for others?'"},
        {"author":"A. A. Milne", "quote":"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you."},
        {"author":"Judy Garland", "quote":"For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul."},
        {"author":"Ingrid Bergman", "quote":"A kiss is a lovely trick designed by nature to stop speech when words become superfluous."},
        {"author":"Confucius", "quote":"Everything has beauty, but not everyone sees it."},
        {"author":"Socrates", "quote":"The only true wisdom is in knowing you know nothing."},
        {"author":"George Bernard Shaw", "quote":"Life isn't about finding yourself. Life is about creating yourself."},
        {"author":"Euripides", "quote":"Friends show their love in times of trouble, not in happiness."},
        {"author":"Desmond Tutu", "quote":"You don't choose your family. They are God's gift to you, as you are to them."},
        {"author":"Soren Kierkegaard", "quote":"Life is not a problem to be solved, but a reality to be experienced."},
        {"author":"Leo Buscaglia", "quote":"A single rose can be my garden... a single friend, my world."},
        {"author":"Swami Vivekananda", "quote":"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success."},
        {"author":"William Shakespeare", "quote":"We know what we are, but know not what we may be."},
        {"author":"Friedrich Nietzsche", "quote":"We love life, not because we are used to living but because we are used to loving."},
        {"author":"Henry David Thoreau", "quote":"It's not what you look at that matters, it's what you see."},
        {"author":"Walt Disney", "quote":"All our dreams can come true, if we have the courage to pursue them."},
        {"author":"Plutarch", "quote":"What we achieve inwardly will change outer reality."},
        {"author":"Mother Teresa", "quote":"Spread love everywhere you go. Let no one ever come to you without leaving happier."},
        {"author":"Robert H. Schuller", "quote":"Problems are not stop signs, they are guidelines."},
        {"author":"Viktor E. Frankl", "quote":"When we are no longer able to change a situation - we are challenged to change ourselves."},
        {"author":"Margaret Mead", "quote":"Always remember that you are absolutely unique. Just like everyone else."},
        {"author":"Plato", "quote":"Wise men speak because they have something to say; Fools because they have to say something."},
        {"author":"John Quincy Adams", "quote":"If your actions inspire others to dream more, learn more, do more and become more, you are a leader."},
        {"author":"Milton Berle", "quote":"If opportunity doesn't knock, build a door."},
        {"author":"Mark Twain", "quote":"The secret of getting ahead is getting started."},
        {"author":"Marcel Proust", "quote":"Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom."},
        {"author":"George Sand", "quote":"There is only one happiness in this life, to love and be loved."},
        {"author":"Thomas Aquinas", "quote":"There is nothing on this earth more to be prized than true friendship."},
        {"author":"John C. Maxwell", "quote":"A leader is one who knows the way, goes the way, and shows the way."},
        {"author":"Marcus Aurelius", "quote":"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."},
        {"author":"Anne Frank", "quote":"Whoever is happy will make others happy too."},
        {"author":"Thomas A. Edison", "quote":"I have not failed. I've just found 10,000 ways that won't work."},
        {"author":"Benjamin Franklin", "quote":"Tell me and I forget. Teach me and I remember. Involve me and I learn."},
        {"author":"Voltaire", "quote":"God gave us the gift of life; it is up to us to give ourselves the gift of living well."},
        {"author":"Simone de Beauvoir", "quote":"Change your life today. Don't gamble on the future, act now, without delay."},
        {"author":"J. R. R. Tolkien", "quote":"Not all those who wander are lost."},
        {"author":"Henry Ford", "quote":"Coming together is a beginning; keeping together is progress; working together is success."},
        {"author":"Samuel Beckett", "quote":"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."},
        {"author":"Edith Wharton", "quote":"There are two ways of spreading light: to be the candle or the mirror that reflects it."},
        {"author":"H. Jackson Brown, Jr.", "quote":"The best preparation for tomorrow is doing your best today."},
        {"author":"Jesus Christ", "quote":"A new command I give you: Love one another. As I have loved you, so you must love one another."},
        {"author":"Aldous Huxley", "quote":"There is only one corner of the universe you can be certain of improving, and that's your own self."},
        {"author":"Thomas Jefferson", "quote":"Honesty is the first chapter in the book of wisdom."},
        {"author":"Lao Tzu", "quote":"The journey of a thousand miles begins with one step."},
        {"author":"George Orwell", "quote":"Happiness can exist only in acceptance."},
        {"author":"John Galsworthy", "quote":"Love has no age, no limit; and no death."},
        {"author":"Albert Einstein", "quote":"You can't blame gravity for falling in love."},
        {"author":"Sigmund Freud", "quote":"Being entirely honest with oneself is a good exercise."},
        {"author":"Susan B. Anthony", "quote":"Independence is happiness."},
        {"author":"Sun Tzu", "quote":"The supreme art of war is to subdue the enemy without fighting."},
        {"author":"Walt Whitman", "quote":"Keep your face always toward the sunshine - and shadows will fall behind you."},
        {"author":"Napoleon Hill", "quote":"If you cannot do great things, do small things in a great way."},
        {"author":"Thomas Carlyle", "quote":"Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak."},
        {"author":"Satchel Paige", "quote":"Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching."},
        {"author":"Aesop", "quote":"No act of kindness, no matter how small, is ever wasted."},
        {"author":"George Washington", "quote":"It is far better to be alone, than to be in bad company."},
        {"author":"Karl A. Menninger", "quote":"Love cures people - both the ones who give it and the ones who receive it."},
        {"author":"William Blake", "quote":"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night."},
        {"author":"Khalil Gibran", "quote":"Life without love is like a tree without blossoms or fruit."},
        {"author":"Will Rogers", "quote":"Good judgment comes from experience, and a lot of that comes from bad judgment."},
        {"author":"Rainer Maria Rilke", "quote":"The only journey is the one within."},
        {"author":"Leonardo da Vinci", "quote":"Learning never exhausts the mind."},
        {"author":"Jane Austen", "quote":"There is no charm equal to tenderness of heart."},
        {"author":"Edgar Allan Poe", "quote":"All that we see or seem is but a dream within a dream."},
        {"author":"Francis of Assisi", "quote":"Lord, make me an instrument of thy peace. Where there is hatred, let me sow love."},
        {"author":"Amelia Earhart", "quote":"The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward."},
        {"author":"Henry James", "quote":"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."},
        {"author":"Niccolo Machiavelli", "quote":"It is better to be feared than loved, if you cannot be both."},
        {"author":"Heraclitus", "quote":"There is nothing permanent except change."},
        {"author":"Indira Gandhi", "quote":"You cannot shake hands with a clenched fist."},
        {"author":"A. P. J. Abdul Kalam", "quote":"Let us sacrifice our today so that our children can have a better tomorrow."},
        {"author":"John Keats", "quote":"I love you the more in that I believe you had liked me for my own sake and for nothing else."},
        {"author":"Ernest Hemingway", "quote":"But man is not made for defeat. A man can be destroyed but not defeated."},
        {"author":"Franklin D. Roosevelt", "quote":"When you reach the end of your rope, tie a knot in it and hang on."}
    ],
    getAQuote : function(){
        //make the text output for the author:
        var authorText = "<h2><em>"+quotesObject.quotesArray[counter].author+"</em></h2>";
        //make the text output for the wikilink:
        var wikilink = quotesObject.quotesArray[counter].author.split(" ").join("_");
        wikilink = '<a href="https://en.wikipedia.org/wiki/'+wikilink+'" target="blank">'+authorText+'</a>';
        var quoteText = "\""+quotesObject.quotesArray[counter].quote+"\"";
        $('#author').html(wikilink);
        $('#quoteText').html(quoteText);
        // Prepare the tweet:
        var tweetHTML = 'https://twitter.com/intent/tweet?text="'+quotesObject.quotesArray[counter].quote+'"'+' -- '+quotesObject.quotesArray[counter].author;
        $('#tweetButton').attr("href", tweetHTML);
        //increment the counter:
        counter++;
        //check for the end condition:
        if(counter === quotesObject.quotesArray.length) {
            counter = 0;
        }
    }
}

// a counter to increment through the array of quotes, and an upper limit:
var counter = Math.floor(Math.random()* quotesObject.quotesArray.length);

$(document).ready(function() {
    quotesObject.getAQuote();
});

$("#getAnotherQuote" ).click(function() {
    quotesObject.getAQuote();
});
