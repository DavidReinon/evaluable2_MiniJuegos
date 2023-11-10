import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Screen2() {
    const initArray = () => {
        return [...Array(10).keys()].map(() => {
            return [...Array(10).keys()].map(() => {
                return null;
            });
        });
        // return Array.from({ length: 10 }, () =>
        //     Array.from({ length: 10 }, () => null)
        // );
    };

    const initColorArray = () => {
        return [...Array(10).keys()].map(() => {
            return [...Array(10).keys()].map(() => {
                return "white";
            });
        });
    };

    const [grid, setGrid] = useState(initArray());
    const [gridBackGroundColor, setGridBackGroundColor] = useState(
        initColorArray()
    );
    const [rellenades, setRellenades] = useState(false);
    const words = ["Phone", "Mobile", "Software", "Developer", "System", "App"];

    const tryPutWord = (randomColumn, randomRow, wordIndex) => {
        let letterIndex = 0;
        let result = true;
        // let newGrid = JSON.parse(JSON.stringify(grid)); // Copia profunda del arreglo
        
        const updateGrid = (rowIndex, colIndex, letter) => {
            setGrid((prevGrid) =>
              prevGrid.map((row, i) =>
                i === rowIndex
                  ? row.map((el, j) => (j === colIndex ? letter : el))
                  : row
              )
            );
          };

        while (letterIndex < words[wordIndex].length) {
            if (
                randomColumn >= 10 ||
                randomRow >= 10 // ||
                // newGrid[randomColumn] === undefined ||
                // newGrid[randomColumn][randomRow] !== null
            ) {
                result = false;
                break;
            }

            updateGrid(randomColumn, randomRow, words[wordIndex][letterIndex]);
            // newGrid = JSON.parse(JSON.stringify(newGrid)); // Actualiza la copia para no modificar el estado directamente
            // newGrid = newGrid.map((row, columnIndex) => {
            //     if (columnIndex === randomColumn) {
            //         return row.map((cell, rowIndex) => {
            //             if (rowIndex === randomRow) {
            //                 return words[wordIndex][letterIndex];
            //             }
            //             return cell;
            //         });
            //     }
            //     return row;
            // });
            letterIndex += 1;

            if (wordIndex === 0) {
                // Phone, dirección diagonal '\'
                randomColumn += 1;
                randomRow += 1;
            } else if (wordIndex === 1) {
                // Mobile, dirección diagonal invertida '/'
                randomColumn -= 1;
                randomRow -= 1;
            } else if (wordIndex === 2) {
                // Software, direccion vertical normal
                randomColumn += 1;
            } else if (wordIndex === 3) {
                // Developer, dirección vertical inversa
                randomColumn -= 1;
            } else if (wordIndex === 4) {
                // System, dirección horizontal normal
                randomRow += 1;
            } else {
                // App, dirección horizontal inversa
                randomRow -= 1;
            }
        }

        if (result) {
            console.log(grid);
        }

        return result;
    };

    const putWordsInRandomOrder = () => {
        for (let i = 0; i < words.length; i++) {
            let success = false;
            let limitColumn = 10;
            let complexMathRandom = "";

            if (words[i] === "Software") {
                // Palabras en dirección vertical
                limitColumn = 10;
                limitRow = 11 - words[i].length; // 11 por Math.Random // 0 a 2
            } else if (words[i] === "Developer") {
                // Palabras en dirección vertical invertido
                complexMathRandom = "row";
                limitColumn = 10;
                limitRow = words[i].length - 1; // 8 a 9
            } else if (words[i] === "System") {
                // Palabras en dirección horizontal
                limitColumn = 11 - words[i].length; // 11 por Math.Random // 0 a 4
                limitRow = 10;
            } else if (words[i] === "App") {
                // Palabras en dirección horizontal invertido
                complexMathRandom = "column";
                limitColumn = words[i].length - 1; // 2 a 9
                limitRow = 10;
            } else if (words[i] === "Phone") {
                // Palabra en dirección diagonal '\'
                limitColumn = 11 - words[i].length; // 0 a 5
                limitRow = 11 - words[i].length; // 0 a 5
            } else if (words[i] === "Mobile") {
                // Palabra en dirección diagonal invertida '/'
                complexMathRandom = "columnRow";
                limitColumn = words[i].length - 1; // 5 a 9
                limitRow = words[i].length - 1; // 5 a 9
            }

            let attempts = 0;
            const maxAttempts = 20; // Puedes ajustar este número según sea necesario

            while (!success && attempts < maxAttempts) {
                //const defaultGrid = [...grid];
                let randomColumn;
                let randomRow;

                if (complexMathRandom === "columnRow") {
                    randomColumn =
                        Math.floor(Math.random() * (10 - limitColumn)) +
                        limitColumn;
                    randomRow =
                        Math.floor(Math.random() * (10 - limitRow)) + limitRow;
                } else if (complexMathRandom === "row") {
                    randomColumn = Math.floor(Math.random() * limitColumn);
                    randomRow =
                        Math.floor(Math.random() * (10 - limitRow)) + limitRow;
                } else if (complexMathRandom === "column") {
                    randomColumn =
                        Math.floor(Math.random() * (10 - limitColumn)) +
                        limitColumn;
                    randomRow = Math.floor(Math.random() * limitRow);
                } else {
                    randomColumn = Math.floor(Math.random() * limitColumn);
                    randomRow = Math.floor(Math.random() * limitRow);
                }

                console.log(
                    `Trying word ${words[i]} at (${randomColumn}, ${randomRow})`
                );
                if (tryPutWord(randomColumn, randomRow, i)) {
                    success = true;
                } else {
                    //setGrid(defaultGrid);
                    attempts += 1;
                }
            }
            if (!success) {
                console.error(
                    `Failed to place word ${words[i]} after ${maxAttempts} attempts. Skipping to the next word.`
                );
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
                                <Text style={{ fontSize: 13 }}>{element}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}
