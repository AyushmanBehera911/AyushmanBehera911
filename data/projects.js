const projects = [
    {
        id: "proj-1",
        title: "Spam Detector",
        type: "Machine Learning",
        shortDescription: "End-to-end machine learning system to classify text messages and emails as spam or ham using probabilistic models.",
        repo: "https://github.com/AyushmanBehera911/spam-detector", 
        url: "https://spmdct.mysticx.soau.dev", 
        image: "spam-detect.png", 
        tech: ["Python", "scikit-learn", "Pandas", "NumPy", "TF-IDF"],
        stats: [
            { label: "Accuracy", value: "96%" },
            { label: "Precision", value: "95%" },
            { label: "Recall", value: "94%" }
        ],
        codeSnippet: `
import numpy as np
import pandas as pd
data = pd.read_csv("email.csv")
df = pd.DataFrame(data)
df = df[['Category', 'Message']]
df.columns = ['label', 'text']
df['label'] = df['label'].map({'ham': 0, 'spam': 1})
from sklearn.model_selection import train_test_split

X = df['text']
y = df['label']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
from sklearn.naive_bayes import MultinomialNB

model = MultinomialNB()
model.fit(X_train_vec, y_train)
from sklearn.metrics import classification_report, confusion_matrix

y_pred = model.predict(X_test_vec)
`,
        details: {
            problem: "<p>Unwanted spam messages and emails pose security risks, waste user time, and reduce communication efficiency. Manual filtering is unreliable and rule-based systems fail against evolving spam patterns.</p>",
            approach: "<p>We implemented a <strong>supervised machine learning</strong> pipeline using probabilistic text classification. Messages are cleaned, tokenized, vectorized using TF-IDF, and classified using a Naive Bayes model.</p><ul><li>Dataset: Labeled SMS/Email corpus</li><li>Input: Raw text message</li><li>Output: Spam or Ham</li></ul>",
            model: "<p>The system uses a Multinomial Naive Bayes classifier trained on TF-IDF features to efficiently model word distributions across spam and non-spam classes.</p>",
            results: "<p>The model achieves high accuracy and balanced precision-recall performance, successfully detecting spam messages while minimizing false positives.</p>"
        }
    },
];
