const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const nlu = new NaturalLanguageUnderstandingV1({
    username,
    password,
    version: '2018-04-05'
});

const params = {
    text,
    features: {
        keywords: {}
    }
}

nlu.analyze(
    params,
    (err, res) => {
        const keywords = res.keywords
    })
