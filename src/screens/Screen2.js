import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Screen2() {
    const [lletres, setLletres] = useState(new Array(100).fill(""));
    const [rellenades, setRellenades] = useState(false);
    const [lletraBackGroundColor, setLletraBackGroundColor] = useState("white");

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
                                width: 38,
                                padding: 14,
                                borderWidth: 1,
                            }}
                            onPress={() =>
                                setLletraBackGroundColor(
                                    lletraBackGroundColor === "white"
                                        ? "blue"
                                        : "white"
                                )
                            }
                        >
                            <Text style={{ fontSize: 15 }}>{unaLletra}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}
