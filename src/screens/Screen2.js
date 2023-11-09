import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Screen2() {
    const initArray = (tipe) => {
        return [...Array(10).keys()].map(() => {
            return [...Array(10).keys()].map(() => {
                if (tipe === "grid") return null;
                return "white";
            });
        });
    };

    const [grid, setGrid] = useState(initArray("grid"));
    const [gridBackGroundColor, setGridBackGroundColor] = useState(
        initArray("color")
    );
    const [rellenades, setRellenades] = useState(false);
    const words = ["Phone", "Mobile", "Software", "Developer", "System", "App"];
    let limitHeightNumber = 10;
    let limitWidthNumber = 10;

    const tryPutWord = (randomWidth, randomHeight, wordIndex) => {
        let letterIndex = 0;
        let result = true;
        let newGrid = [...grid];

        while (letterIndex < words[wordIndex].length) {
            if (
                randomWidth >= 10 ||
                randomHeight >= 10 ||
                newGrid[randomWidth] === undefined ||
                newGrid[randomWidth][randomHeight] !== null
            ) {
                result = false;
                break;
            }

            newGrid[randomWidth] = [...newGrid[randomWidth]];
            newGrid[randomWidth][randomHeight] = words[wordIndex][letterIndex];
            letterIndex += 1;

            if (wordIndex === 0) {
                // Phone, dirección diagonal '\'
                randomWidth += 1;
                randomHeight += 1;
            } else if (wordIndex === 1) {
                // Mobile, dirección diagonal invertida '/'
                randomWidth -= 1;
                randomHeight -= 1;
            } else if (wordIndex === 2) {
                // Software, direccion vertical normal
                randomWidth += 1;
            } else if (wordIndex === 3) {
                // Developer, dirección vertical inversa
                randomWidth -= 1;
            } else if (wordIndex === 4) {
                // System, dirección horizontal normal
                randomHeight += 1;
            } else {
                // App, dirección horizontal inversa
                randomHeight -= 1;
            }
        }

        if (result) {
            setGrid(newGrid);
        }

        return result;
    };

    const putWordsInRandomOrder = () => {
        for (let i = 0; i < words.length; i++) {
            let success = false;

            if (words[i] === "Software" || words[i] === "Developer") {
                // Palabras en dirección vertical
                limitWidth = 10;
                limitHeight = 10 - words[i].length + 1;
            } else if (words[i] === "System" || words[i] === "App") {
                // Palabras en dirección horizontal
                limitWidth = 10 - words[i].length + 1;
                limitHeight = 10;
            } else if (words[i] === "Phone") {
                // Palabra en dirección diagonal
                limitWidth = 7;
                limitHeight = 7;
            } else if (words[i] === "Mobile") {
                // Palabra en dirección diagonal inversa
                limitWidth = 7;
                limitHeight = 10 - words[i].length + 1;
            }
            while (!success) {
                const defaultGrid = [...grid];
                const randomWidth = Math.floor(
                    Math.random() * limitWidthNumber
                );
                const randomHeight = Math.floor(
                    Math.random() * limitHeightNumber
                );

                if (tryPutWord(randomWidth, randomHeight, i)) {
                    success = true;
                } else {
                    setGrid(defaultGrid);
                }
            }
        }
    };

    const rellenarLetras = () => {
        if (rellenades) return;

        const alfabeto = "abcdefghijklmnopqrstuvwxyz";
        const letrasRellenadas = grid.map(() => {
            const indice = Math.floor(Math.random() * alfabeto.length);
            return alfabeto.charAt(indice);
        });

        setGrid(letrasRellenadas);
        setRellenades(true);
    };

    const onPressTouchable = (indexRow, indexElement) => {
        let newGridBackground = [...gridBackGroundColor];
        newGridBackground[indexRow] = [...newGridBackground[indexRow]];
        newGridBackground[indexRow][indexElement] =
            newGridBackground[indexRow][indexElement] === "white"
                ? "blue"
                : "white";

        setGridBackGroundColor(newGridBackground);
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 60,
            }}
        >
            <TouchableOpacity onPress={() => putWordsInRandomOrder()}>
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

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {grid.map((row, indexRow) => (
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                        key={indexRow}
                    >
                        {row.map((element, indexElement) => (
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    backgroundColor:
                                        gridBackGroundColor[indexRow][
                                            indexElement
                                        ],
                                    padding: 14,
                                    borderWidth: 1,
                                }}
                                key={indexElement}
                                onPress={() =>
                                    onPressTouchable(indexRow, indexElement)
                                }
                            >
                                <Text style={{ fontSize: 13 }}>
                                    {element || ""}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}
