import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Screen2() {
    const palabras = [
        "Software",
        "Developer",
        "System",
        "App",
        "Phone",
        "Mobile",
    ];
    const gridSize = 10;
    const [sopaDeLetras, setSopaDeLetras] = useState([]);
    const [sopaRellenada, setSopaRellenada] = useState(false);
    const [lletresBackGroundColor, setLletresBackGroundColor] = useState(
        new Array(100).fill("white")
    );
    const generarLetrasAleatorias = () => {
        const alfabeto = "abcdefghijklmnopqrstuvwxyz";
        const letrasAleatorias = [];
        for (let i = 0; i < gridSize * gridSize; i++) {
            const indice = Math.floor(Math.random() * alfabeto.length);
            letrasAleatorias.push(alfabeto.charAt(indice));
        }
        return letrasAleatorias;
    };

    const colocarPalabrasEnSopa = (letrasAleatorias) => {
        const nuevaSopa = [...letrasAleatorias];

        palabras.forEach((palabra) => {
            const palabraArr = palabra.split("");
            let colocada = false;
            while (!colocada) {
                const fila = Math.floor(Math.random() * gridSize);
                const columna = Math.floor(Math.random() * gridSize);
                const direccion =
                    Math.random() < 0.5 ? "horizontal" : "vertical";
                const pasoFila = direccion === "horizontal" ? 0 : 1;
                const pasoColumna = direccion === "vertical" ? 0 : 1;

                if (
                    fila + pasoFila * (palabraArr.length - 1) < gridSize &&
                    columna + pasoColumna * (palabraArr.length - 1) < gridSize
                ) {
                    let encaja = true;
                    for (let i = 0; i < palabraArr.length; i++) {
                        const letra = palabraArr[i];
                        const index =
                            (fila + pasoFila * i) * gridSize +
                            (columna + pasoColumna * i);
                        if (
                            nuevaSopa[index] !== letra &&
                            nuevaSopa[index] !== ""
                        ) {
                            encaja = false;
                            break;
                        }
                    }

                    if (encaja) {
                        for (let i = 0; i < palabraArr.length; i++) {
                            const letra = palabraArr[i];
                            const index =
                                (fila + pasoFila * i) * gridSize +
                                (columna + pasoColumna * i);
                            nuevaSopa[index] = letra;
                        }
                        colocada = true;
                    }
                }
            }
        });

        return nuevaSopa;
    };

    const rellenarSopaDeLetras = () => {
        if (!sopaRellenada) {
            const letrasAleatorias = generarLetrasAleatorias();
            const sopaConPalabras = colocarPalabrasEnSopa(letrasAleatorias);
            setSopaDeLetras(sopaConPalabras);
            setSopaRellenada(true);
        }
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
            <TouchableOpacity onPress={() => rellenarSopaDeLetras()}>
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
                {sopaDeLetras.map((letra, index) => (
                    <View style={{ flexDirection: "row" }} key={index}>
                        <TouchableOpacity
                            style={{
                                width: 40,
                                backgroundColor: "white", // Cambia esto según el color de fondo
                                padding: 14,
                                borderWidth: 1,
                            }}
                            onPress={() => onPressTouchable(index)}
                        >
                            <Text style={{ fontSize: 13 }}>{letra}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}
