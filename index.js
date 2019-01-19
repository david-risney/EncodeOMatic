(() => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const selection = {
        factory: null,
        pipe: null
    };

    const encodeInput = () => {
        const ranges = getSelectionRangesForElement(input);
        const inputAsString = { 
            data: input.value || input.textContent,
            startOffset: ranges.length ? ranges[0].startOffset : -1,
            endOffset: ranges.length ? ranges[0].endOffset : -1
        };

            document.getElementById("inputstatus").textContent = 
                "Total " + inputAsString.data.length + ", " +
                "Selection " + inputAsString.startOffset + ", " +
                inputAsString.endOffset + "";

        selection.pipe.encodeAsync(utf8Encoder.encodeStringToUtf8Bytes(inputAsString)).then(outputAsBytes => {
            const outputAsString = utf8Encoder.decodeUtf8BytesToString(outputAsBytes);
            let data = outputAsString.data;
            if (outputAsString.startOffset >= 0 && outputAsString.endOffset >= 0) {
                const part1 = data.substr(0, outputAsString.startOffset);
                const part2 = data.substr(outputAsString.startOffset, outputAsString.endOffset - outputAsString.startOffset);
                const part3 = data.substr(outputAsString.endOffset)
                data = 
                    part1.replace("&", "&amp;") + 
                    "<span class='highlight'>" + 
                    part2.replace("&", "&amp;") + 
                    "</span>" + 
                    part3.replace("&", "&amp;");
            }
            else {
                data = data.replace("&", "&amp;");
            }

            output.innerHTML = data;
            document.getElementById("outputstatus").textContent = 
                "Total " + outputAsString.data.length + ", " +
                "Selection " + outputAsString.startOffset + ", " +
                outputAsString.endOffset + "";
        }, error => {
            output.value = output.textContent = error;
        });
    };

    const setFactory = factory => {
        selection.factory = factory;
        selection.pipe = factory.create();

        encodeInput();
    }

    const getSelectionRangesForElement = targetElement => {
        let ranges = window.getSelection();
        let rangesAsArray = [];
        for (let idx = 0; idx < ranges.rangeCount; ++idx) {
          rangesAsArray.push(ranges.getRangeAt(idx));
        }
        return rangesAsArray.filter(range => {
            let parent = range.commonAncestorContainer;
            do {
                if (targetElement === parent) {
                    return true;
                }
                parent = parent.parentElement;
            } while (parent && parent.parentElement !== parent);
            return false;
        });
    }

    const pipeList = document.getElementById("pipeList");
    window.pipes.factories.map(factory => {
        let div = document.createElement("div");
        div.textContent = factory.name;
        div.addEventListener("click", () => {
            setFactory(factory);
        });
        return div;
    }).forEach(factoryElement => pipeList.appendChild(factoryElement));

    input.addEventListener("DOMSubtreeModified", encodeInput);
    document.addEventListener("selectionchange", encodeInput);
    setFactory(window.pipes.factories[0]);
})();