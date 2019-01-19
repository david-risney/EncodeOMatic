(() => {
    const title = document.getElementById("title");
    const map = {
        "E": ["\u{1F114}", "\u01B7", "\u22FF", "\uFF25", "\u2130", "\u{1D404}", "\u{1D46C}", "\u{1D4D4}", "\u{1D508}"],
        "n": ["\u{1D427}", "\u{1D45B}", "\u{1D48F}", "\u{1D4C3}", "\u{1D4F7}", "\u{1D52B}", "\u{1D55F}", "\u{1D593}", "\u{1D5C7}", "\u{1D5FB}", "\u{1D62F}", "\u{1D663}", "\u{1D697}", "\u0578", "\u057C",],
        "c": ["\u{FF43}", "\u{217D}", "\u{1D41C}", "\u{1D450}", "\u{1D484}", "\u{1D4B8}", "\u{1D4EC}", "\u{1D520}", "\u{1D554}", "\u{1D588}", "\u{1D5BC}", "\u{1D5F0}", "\u{1D624}", "\u{1D658}", "\u{1D68C}", "\u{1D04}", "\u{03F2}", "\u{2CA5}", "\u{0441}", "\u{ABAF}", "\u{1043D}",],
        "o": [ "\u{0665}", "\u{06F5}", "\u{FF4F}", "\u{2134}", "\u{1D428}", "\u{1D45C}", "\u{1D490}", "\u{1D4F8}", "\u{1D52C}", "\u{1D560}", "\u{1D594}", "\u{1D5C8}", "\u{1D5FC}", "\u{1D630}", "\u{1D664}", "\u{1D698}", "\u{1D0F}", "\u{1D11}", "\u{AB3D}", "\u{03BF}", "\u{1D6D0}",],
        "d": [ "\u{217E}", "\u{2146}", "\u{1D41D}", "\u{1D451}", "\u{1D485}", "\u{1D4B9}", "\u{1D4ED}", "\u{1D521}", "\u{1D555}", "\u{1D589}", "\u{1D5BD}", "\u{1D5F1}", "\u{1D625}", "\u{1D659}", "\u{1D68D}", "\u{0501}", "\u{13E7}", "\u{146F}", "\u{A4D2}",],
        "e": [ "\u{212E}", "\u{FF45}", "\u{212F}", "\u{2147}", "\u{1D41E}", "\u{1D452}", "\u{1D486}", "\u{1D4EE}", "\u{1D522}", "\u{1D556}", "\u{1D58A}", "\u{1D5BE}", "\u{1D5F2}", "\u{1D626}", "\u{1D65A}", "\u{1D68E}", "\u{AB32}", "\u{0435}", "\u{04BD}",],
        "-": ["-"],
        "O": [ "\u{1D442}", "\u{1D476}", "\u{1D4AA}", "\u{1D4DE}", "\u{1D512}", "\u{1D546}", "\u{1D57A}", "\u{1D5AE}", "\u{1D5E2}", "\u{1D616}", "\u{1D64A}", "\u{1D67E}", "\u{039F}", "\u{1D6B6}", "\u{1D6F0}", "\u{1D72A}", "\u{1D764}", "\u{1D79E}",],
        "M": [ "\u{1D67C}", "\u{039C}", "\u{1D6B3}", "\u{1D6ED}", "\u{1D727}", "\u{1D761}", "\u{1D79B}", "\u{03FA}", "\u{2C98}", "\u{041C}", "\u{13B7}", "\u{15F0}", "\u{16D6}", "\u{A4DF}", "\u{102B0}", "\u{10311}", ],
        "a": [ "\u{1D552}", "\u{1D586}", "\u{1D5BA}", "\u{1D5EE}", "\u{1D622}", "\u{1D656}", "\u{1D68A}", "\u{0251}", "\u{03B1}", "\u{1D6C2}", "\u{1D6FC}", "\u{1D736}", "\u{1D770}", "\u{1D7AA}", "\u{0430}", ],
        "t": [ "\u{1D42D}", "\u{1D461}", "\u{1D495}", "\u{1D4C9}", "\u{1D4FD}", "\u{1D531}", "\u{1D565}", "\u{1D599}", "\u{1D5CD}", "\u{1D601}", "\u{1D635}", "\u{1D669}", "\u{1D69D}", ],
        "i": [ "\u{1D6A4}", "\u{026A}", "\u{0269}", "\u{03B9}", "\u{1FBE}", "\u{037A}", "\u{1D6CA}", "\u{1D704}", "\u{1D73E}", "\u{1D778}", "\u{1D7B2}", "\u{0456}", "\u{A647}", "\u{04CF}", "\u{AB75}", "\u{13A5}", ],
    };


    const originalText = "Encode-O-Matic";
    const timePerLetter = 200;
    const totalTime = originalText.length * timePerLetter;
    const randomLetterTime = timePerLetter / 3;
    let finishedLetters = 0;

    let finishLetterHandle;
    let randomLettersHandle;

    const finishTitle = () => {
        clearInterval(finishLetterHandle);
        finishLetterHandle = null;
        clearInterval(randomLettersHandle);
        randomLettersHandle = null;
        title.textContent = originalText;
    };

    const finishLetter = () => ++finishedLetters;
    const random = arr => arr[Math.floor(Math.random() * arr.length)];

    const randomLetters = () => {
        title.textContent = 
            originalText.substr(0, finishedLetters) + 
            Array.from(originalText.substr(finishedLetters)).map(letter => random(map[letter]));
    };

    setTimeout(finishTitle, totalTime);
    finishLetterHandle = setInterval(finishLetter, timePerLetter);
    randomLettersHandle = setInterval(randomLetters, randomLetterTime);
})();