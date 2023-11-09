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
    let limitHeigthNumber = 10;
    let limitWidthNumber = 10;

    const tryPutWord = (randomWidth, randomHeigth, wordIndex) => {
        let letterIndex = 0;
        let result = true;
        while (true) {
            if (!grid[randomWidth][randomHeigth]) {
                const newGrid = [...grid];
                newGrid[randomWidth] = [...grid[randomWidth]];
                newGrid[randomWidth][randomHeigth] =
                    words[wordIndex][letterIndex];
                letterIndex += 1;
                randomWidth += 1;
                randomHeigth += 1;
                setGrid(newGrid);
            }
            result = false;
            break;
        }
        return result;
    };
    const putWordsInRandomOrder = () => {
        for (let i = 0; i < 1; i++) { //Probando solo Phone (i < words.length)
            if (words[i] === "Phone") {
                limitWidthNumber = 7; //6 usando Math.random
                limitHeigthNumber = 7; //6 usando Math.random
            }
            const defaultGrid = [...grid];
            const randomWidth = Math.floor(Math.random() * limitWidthNumber);
            const randomHeigth = Math.floor(Math.random() * limitHeigthNumber);
            if (!grid[randomWidth][randomHeigth]) {
                if (!tryPutWord(randomWidth, randomHeigth, i)) {
                    setGrid(defaultGrid);
                    i = 0;
                }
            }
        }
    };
    const rellenarLletres = () => {
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
        const newArray = [...gridBackGroundColor];
        newArray[indexRow] = [...gridBackGroundColor[indexRow]];
        newArray[indexRow][indexElement] =
            newArray[indexRow][indexElement] === "white" ? "blue" : "white";
        setGridBackGroundColor(newArray);
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
                                        gridBackGroundColor[
                                            indexRow + indexElement
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
