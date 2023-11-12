import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const ROWS = 10;
const COLS = 10;
const WORDS = ["software", "developer", "system", "app", "phone", "mobile"];

const Screen2 = () => {
    const [colors, setColors] = useState(
        Array.from({ length: ROWS }, () =>
            Array.from({ length: COLS }, () => "white")
        )
    );
    const [letters, setLetters] = useState(
        Array.from({ length: ROWS }, () =>
            Array.from({ length: COLS }, () => "")
        )
    );
    const [filled, setFilled] = useState(false);

    const toggleColor = (row, col) => {
        const newColors = [...colors];
        newColors[row][col] =
            newColors[row][col] === "white" ? "blue" : "white";
        setColors(newColors);
    };

    const addWord = (word, direction, row, col) => {
        const newLetters = [...letters];
        const wordLength = word.length;

        if (direction === "vertical") { // ROWS - 1 COLS -1
            if (row + wordLength <= ROWS - 1) {
                for (let i = 0; i < wordLength; i++) {
                    newLetters[row + i][col] = word[i];
                }
            }
        } else if (direction === "verticalInverted") { // 0
            if (row - wordLength <= 0) {
                for (let i = 0; i < wordLength; i++) {
                    newLetters[row - 1][col] = word[i];
                }
            }
        } else if (direction === "horizontal") { // ROWS - 1 COLS -1
            if (col + wordLength <= COLS - 1) {
                for (let i = 0; i < wordLength; i++) {
                    newLetters[row][col + i] = word[i];
                }
            }
        } else if (direction === "horizontalInverted") { // 0
            if (col - wordLength <= 0) {
                for (let i = 0; i < wordLength; i++) {
                    newLetters[row][col - 1] = word[i];
                }
            }
        } else if (direction === "diagonal") { // ROWS - 1 COLS -1
            if (row + wordLength <= ROWS - 1 && col + wordLength <= COLS - 1) {
                for (let i = 0; i < wordLength; i++) {
                    newLetters[row + i][col + i] = word[i];
                }
            }
        } else if (direction === "diagonalReverse") { // 0
            if (row - wordLength <= 0 && col - wordLength <= 0) {
                for (let i = 0; i < wordLength; i++) {
                    newLetters[row - i][col - i] = word[i];
                }
            }
        }

        setLetters(newLetters);
    };

    const fillWords = () => {
        addWord("software", "vertical", 0, 0);
        addWord("developer", "verticalInverted", 7, 7);
        addWord("system", "horizontal", 2, 1);
        addWord("app", "horizontalInverted", 5, 0);
        // addWord("phone", "diagonal", 0, 4);
        // addWord("mobile", "diagonalReverse", 4, 7); // Cambio a diagonal inversa
        setFilled(true);
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
            }}
        >
            <TouchableOpacity onPress={() => !filled && fillWords()}>
                <Text
                    style={{
                        fontSize: 40,
                        marginVertical: 20,
                        fontWeight: "bold",
                    }}
                >
                    Sopa de letras
                </Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                {colors.map((row, rowIndex) => (
                    <View key={rowIndex} style={{ flexDirection: "row" }}>
                        {row.map((col, colIndex) => (
                            <TouchableOpacity
                                key={colIndex}
                                style={{
                                    backgroundColor: colors[rowIndex][colIndex],
                                    width: 38,
                                    padding: 14,
                                    borderWidth: 1,
                                }}
                                onPress={() => toggleColor(rowIndex, colIndex)}
                            >
                                <Text style={{ fontSize: 15 }}>
                                    {letters[rowIndex][colIndex]}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Screen2;
