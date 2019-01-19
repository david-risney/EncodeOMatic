// factory
//      .name -> string name
//      .category -> string category
//      .create -> pipe
//
// pipe
//      .factory -> factory
//      .outputAvailable event
//      .encode(bits)
(() => {
    window.pipes = {};
    window.pipes.factories = [];
    window.pipes.get = namePart =>
        window.pipes.factories.filter(
            factory => factory.name.toLowerCase()
                .indexOf(namePart.toLowerCase()) != -1
        );

    function Deferral() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    function BinaryPipeBase(options, encodeAsync) {
        let pipe = {};

        pipe.factory = options.factory;
        pipe.name = options.name;

        pipe.encodeAsync = input => {
            try {
                return Promise.resolve(encodeAsync(input));
            } catch (err) {
                return Promise.reject(err);
            }
        };

        return pipe;
    }

    const utf8Encoder = (() => {
        const decoder = new TextDecoder("utf-8");
        const encoder = new TextEncoder();
        const utf8Encoder = {};

        utf8Encoder.encodeStringToUtf8Bytes = input => {
            const output = {};
            
            output.data = encoder.encode(input.data);
            if (input.startOffset === -1) {
                output.startOffset = -1;
            }
            else {
                output.startOffset = encoder.encode(input.data.substr(0, input.startOffset)).length;
            }
            if (input.endOffset === -1) {
                output.endOffset = -1;
            }
            else {
                output.endOffset = encoder.encode(input.data.substr(0, input.endOffset)).length;
            }
            return output;
        };

        utf8Encoder.decodeUtf8BytesToString = input => {
            const output = {};
            
            output.data = decoder.decode(input.data);
            if (input.startOffset === -1) {
                output.startOffset = -1;
            }
            else {
                output.startOffset = decoder.decode(input.data.subarray(0, input.startOffset)).length;
            }
            if (input.endOffset === -1) {
                output.endOffset = -1;
            }
            else {
                output.endOffset = decoder.decode(input.data.subarray(0, input.endOffset)).length;
            }
            return output;
        };

        return utf8Encoder;
    })();
    window.utf8Encoder = utf8Encoder;

    function StringPipeBase(options, encodeAsync) {
        return BinaryPipeBase(options, input => {
            const inputAsString = utf8Encoder.decodeUtf8BytesToString(input);
            return Promise.resolve(encodeAsync(inputAsString)).then(outputAsString => {
                return utf8Encoder.encodeStringToUtf8Bytes(outputAsString);
            });
        })
    }

    function PipeFactory(options) {
        let factory = {};
        factory.name = options.name;
        factory.inverse = options.inverse;
        factory.create = options.create;

        return factory;
    }

    window.pipes.factories.push(PipeFactory({
        name: "identity",
        create: () =>
            BinaryPipeBase({
                name: "identity",
            }, input => input)
    }));

    window.pipes.factories[window.pipes.factories.length - 1].inverse = 
        window.pipes.factories[window.pipes.factories.length - 1];

    window.pipes.factories.push(PipeFactory({
        name: "base64 encode",
        create: () => {
            return StringPipeBase({
                name: "base64 encode", 
            }, input => {
                const hasOffset = 
                    input.startOffset !== -1 && 
                    input.endOffset !== -1 && 
                    input.startOffset !== input.endOffset;

                return {
                    data: btoa(input.data),
                    startOffset: !hasOffset ? -1 : Math.floor(input.startOffset / 3) * 4,
                    endOffset: !hasOffset ? -1 : Math.ceil(input.endOffset / 3) * 4,
                };
            });
        }
    }));

    window.pipes.factories.push(PipeFactory({
        name: "base64 decode",
        create: () => {
            return StringPipeBase({
                name: "base64 decode", 
            }, input => {
                const hasOffset = 
                    input.startOffset !== -1 && 
                    input.endOffset !== -1 && 
                    input.startOffset !== input.endOffset;

                return {
                    data: atob(input.data),
                    startOffset: !hasOffset ? -1 : Math.floor(input.startOffset / 4) * 3,
                    endOffset: !hasOffset ? -1 : Math.ceil(input.endOffset / 4) * 3,
                };
            });
        }
    }));

    window.pipes.factories[window.pipes.factories.length - 2].inverse = 
        window.pipes.factories[window.pipes.factories.length - 1];
    window.pipes.factories[window.pipes.factories.length - 1].inverse = 
        window.pipes.factories[window.pipes.factories.length - 2];

    window.pipes.factories.push(PipeFactory({
        name: "encodeURIComponent",
        create: () => {
            return StringPipeBase({
                name: "encodeURIComponent", 
            }, input => {
                return {
                    data: encodeURIComponent(input.data),
                    startOffset: -1,
                    endOffset: -1
                };
            });
        }
    }));

    window.pipes.factories.push(PipeFactory({
        name: "decodeURIComponent",
        create: () => {
            return StringPipeBase({
                name: "decodeURIComponent", 
            }, input => {
                return {
                    data: decodeURIComponent(input.data),
                    startOffset: -1,
                    endOffset: -1
                };
            });
        }
    }));

    window.pipes.factories[window.pipes.factories.length - 2].inverse = 
        window.pipes.factories[window.pipes.factories.length - 1];
    window.pipes.factories[window.pipes.factories.length - 1].inverse = 
        window.pipes.factories[window.pipes.factories.length - 2];
})();