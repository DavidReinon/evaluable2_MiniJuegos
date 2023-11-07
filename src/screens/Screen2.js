import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Screen2() {
    const [lletres, setLletres] = useState(new Array(100).fill(""));
    // Fer Array de sols color
    const [lletresBackGroundColor, setLletresBackGroundColor] = useState(
        new Array(100).fill("white")
    );
    const [rellenades, setRellenades] = useState(false);

    const rellenarLletres = () => {
        if (rellenades) return;
        const alfabeto = "abcdefghijklmnopqrstuvwxyz";
        const letrasRellenadas = lletres.map(() => {
            const indice = Math.floor(Math.random() * alfabeto.length);
            return alfabeto.charAt(indice);
        });
        setLletres(letrasRellenadas);
        setRellenades(true);
    };

    const onPressTouchable = (index) => {
        let newArray = [...lletresBackGroundColor];
        newArray[index] = newArray[index] === "white" ? "blue" : "white";
        setLletresBackGroundColor(newArray);
    };
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 60,
            }}
        >
            <TouchableOpacity onPress={() => rellenarLletres()}>
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
                {lletres.map((unaLletra, index) => (
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                        key={index}
                    >
                        <TouchableOpacity
                            style={{
                                width: 40,
                                backgroundColor: lletresBackGroundColor[index],
                                padding: 14,
                                borderWidth: 1,
                            }}
                            onPress={() => onPressTouchable(index)}
                        >
                            <Text style={{ fontSize: 13 }}>{unaLletra}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}
