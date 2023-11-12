import {
    TextInput,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
export default function Screen1() {
    const [informacionTextos, setInformacionTextos] = useState([""]);

    const [letra1, setLetra1] = useState("");
    const [letra2, setLetra2] = useState("");
    const [letra3, setLetra3] = useState("");
    const [letra4, setLetra4] = useState("");
    const [letra5, setLetra5] = useState("");º
    const [letra6, setLetra6] = useState("");
    const [letra7, setLetra7] = useState("");
    const [letra8, setLetra8] = useState("");
    const [letrasPalabra1, setletrasPalabra1] = useState([""]);

    const [letra1Palabra2, setLetra1Palabra2] = useState("");
    const [letra2Palabra2, setLetra2Palabra2] = useState("");
    const [letra3Palabra2, setLetra3Palabra2] = useState("");
    const [letra4Palabra2, setLetra4Palabra2] = useState("");
    const [letra5Palabra2, setLetra5Palabra2] = useState("");
    const [letra7Palabra2, setLetra7Palabra2] = useState("");
    const [letra8Palabra2, setLetra8Palabra2] = useState("");
    const [letra9Palabra2, setLetra9Palabra2] = useState("");

    const [letra1Palabra3, setLetra1Palabra3] = useState("");
    const [letra2Palabra3, setLetra2Palabra3] = useState("");
    const [letra3Palabra3, setLetra3Palabra3] = useState("");
    const [letra5Palabra3, setLetra5Palabra3] = useState("");
    const [letra6Palabra3, setLetra6Palabra3] = useState("");

    const [letra2Palabra4, setLetra2Palabra4] = useState("");
    const [letra3Palabra4, setLetra3Palabra4] = useState("");

    const [letra1Palabra5, setLetra1Palabra5] = useState("");
    const [letra2Palabra5, setLetra2Palabra5] = useState("");
    const [letra3Palabra5, setLetra3Palabra5] = useState("");
    const [letra4Palabra5, setLetra4Palabra5] = useState("");
    const [letra6Palabra5, setLetra6Palabra5] = useState("");
    const [letra7Palabra5, setLetra7Palabra5] = useState("");
    const [letra8Palabra5, setLetra8Palabra5] = useState("");
    const [letra9Palabra5, setLetra9Palabra5] = useState("");

    const getData = async () => {
        try {
            const responses = await Promise.all([
                fetch(
                    "https://api.dictionaryapi.dev/api/v2/entries/en/Software"
                ),
                fetch(
                    "https://api.dictionaryapi.dev/api/v2/entries/en/Developer"
                ),
                fetch("https://api.dictionaryapi.dev/api/v2/entries/en/System"),
                fetch("https://api.dictionaryapi.dev/api/v2/entries/en/App"),
                fetch(
                    "https://api.dictionaryapi.dev/api/v2/entries/en/Framework"
                ),
            ]);

            const data = await Promise.all(
                responses.map(async (response) => {
                    if (response.ok) {
                        const jsonData = await response.json();
                        if (Array.isArray(jsonData) && jsonData.length > 0) {
                            return jsonData[0].meanings[0].definitions[0]
                                .definition;
                        }
                    }
                    return "";
                })
            );
            let newArray = [...informacionTextos];
            {
                data.map((element, index) => {
                    newArray[index] = element || "";
                });
            }
            setInformacionTextos(newArray);
        } catch (error) {
            console.log(error);
        }
    };

    const verificarResultado1 = () => {
        const palabraCompleta = `${letra1}${letra2}${letra3}${letra4}${letra5}${letra6}${letra7}${letra8}`;
        const palabraCorrecta = "SOFTWARE";

        const nuevaPalabra = palabraCorrecta
            .split("")
            .map((letra, index) =>
                letra === palabraCompleta[index] ? letra : ""
            );

        setLetra1(nuevaPalabra[0]);
        setLetra2(nuevaPalabra[1]);
        setLetra3(nuevaPalabra[2]);
        setLetra4(nuevaPalabra[3]);
        setLetra5(nuevaPalabra[4]);
        setLetra6(nuevaPalabra[5]);
        setLetra7(nuevaPalabra[6]);
        setLetra8(nuevaPalabra[7]);
    };

    const verificarResultado2 = () => {
        const palabraCompleta = `${letra1Palabra2}${letra2Palabra2}${letra3Palabra2}${letra4Palabra2}${letra5Palabra2}${letra2}${letra7Palabra2}${letra8Palabra2}${letra9Palabra2}`;
        const palabraCorrecta = "DEVELOPER";

        const nuevaPalabra = palabraCorrecta
            .split("")
            .map((letra, index) =>
                letra === palabraCompleta[index] ? letra : ""
            );

        setLetra1Palabra2(nuevaPalabra[0]);
        setLetra2Palabra2(nuevaPalabra[1]);
        setLetra3Palabra2(nuevaPalabra[2]);
        setLetra4Palabra2(nuevaPalabra[3]);
        setLetra5Palabra2(nuevaPalabra[4]);
        setLetra2(nuevaPalabra[5]);
        setLetra7Palabra2(nuevaPalabra[6]);
        setLetra8Palabra2(nuevaPalabra[7]);
        setLetra9Palabra2(nuevaPalabra[8]);
    };

    const verificarResultado3 = () => {
        const palabraCompleta = `${letra1Palabra3}${letra2Palabra3}${letra3Palabra3}${letra4}${letra5Palabra3}${letra6Palabra3}`;
        const palabraCorrecta = "SYSTEM";

        const nuevaPalabra = palabraCorrecta
            .split("")
            .map((letra, index) =>
                letra === palabraCompleta[index] ? letra : ""
            );

        setLetra1Palabra3(nuevaPalabra[0]);
        setLetra2Palabra3(nuevaPalabra[1]);
        setLetra3Palabra3(nuevaPalabra[2]);
        setLetra4(nuevaPalabra[3]);
        setLetra5Palabra3(nuevaPalabra[4]);
        setLetra6Palabra3(nuevaPalabra[5]);
    };

    const verificarResultado4 = () => {
        const palabraCompleta = `${letra6}${letra2Palabra4}${letra3Palabra4}`;
        const palabraCorrecta = "APP";

        const nuevaPalabra = palabraCorrecta
            .split("")
            .map((letra, index) =>
                letra === palabraCompleta[index] ? letra : ""
            );

        setLetra6(nuevaPalabra[0]);
        setLetra2Palabra4(nuevaPalabra[1]);
        setLetra3Palabra4(nuevaPalabra[2]);
    };

    const verificarResultado5 = () => {
        const palabraCompleta = `${letra1Palabra5}${letra2Palabra5}${letra3Palabra5}${letra4Palabra5}${letra8}${letra6Palabra5}${letra7Palabra5}${letra8Palabra5}${letra9Palabra5}`;
        const palabraCorrecta = "FRAMEWORK";

        const nuevaPalabra = palabraCorrecta
            .split("")
            .map((letra, index) =>
                letra === palabraCompleta[index] ? letra : ""
            );

        setLetra1Palabra5(nuevaPalabra[0]);
        setLetra2Palabra5(nuevaPalabra[1]);
        setLetra3Palabra5(nuevaPalabra[2]);
        setLetra4Palabra5(nuevaPalabra[3]);
        setLetra8(nuevaPalabra[4]);
        setLetra6Palabra5(nuevaPalabra[5]);
        setLetra7Palabra5(nuevaPalabra[6]);
        setLetra8Palabra5(nuevaPalabra[7]);
        setLetra9Palabra5(nuevaPalabra[8]);
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
            }}
        >
            <TouchableOpacity onPress={getData}>
                <Text
                    style={{
                        fontSize: 40,
                        marginVertical: 20,
                        fontWeight: "bold",
                    }}
                >
                    Crossroads
                </Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 134 }}></View>
                                <View style={{ width: 16 }}>
                                    <TouchableOpacity
                                        onPress={verificarResultado1}
                                    >
                                        <Text style={{ fontSize: 20 }}>1</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letrasPalabra1}
                                        onChangeText={(text) =>
                                            setletrasPalabra1[0](text)
                                        }
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 16 }}>
                                    <TouchableOpacity
                                        onPress={verificarResultado2}
                                    >
                                        <Text style={{ fontSize: 20 }}>2</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra1Palabra2}
                                        onChangeText={(text) =>
                                            setLetra1Palabra2(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra2Palabra2}
                                        onChangeText={(text) =>
                                            setLetra2Palabra2(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra3Palabra2}
                                        onChangeText={(text) =>
                                            setLetra3Palabra2(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra4Palabra2}
                                        onChangeText={(text) =>
                                            setLetra4Palabra2(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra5Palabra2}
                                        onChangeText={(text) =>
                                            setLetra5Palabra2(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra2}
                                        onChangeText={(text) => setLetra2(text)}
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra7Palabra2}
                                        onChangeText={(text) =>
                                            setLetra7Palabra2(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra8Palabra2}
                                        onChangeText={(text) =>
                                            setLetra8Palabra2(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra9Palabra2}
                                        onChangeText={(text) =>
                                            setLetra9Palabra2(text)
                                        }
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 150 }}></View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra3}
                                        onChangeText={(text) => setLetra3(text)}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 54 }}></View>
                                <View style={{ width: 16 }}>
                                    <TouchableOpacity
                                        onPress={verificarResultado3}
                                    >
                                        <Text style={{ fontSize: 20 }}>3</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra1Palabra3}
                                        onChangeText={(text) =>
                                            setLetra1Palabra3(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra2Palabra3}
                                        onChangeText={(text) =>
                                            setLetra2Palabra3(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra3Palabra3}
                                        onChangeText={(text) =>
                                            setLetra3Palabra3(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra4}
                                        onChangeText={(text) => setLetra4(text)}
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra5Palabra3}
                                        onChangeText={(text) =>
                                            setLetra5Palabra3(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra6Palabra3}
                                        onChangeText={(text) =>
                                            setLetra6Palabra3(text)
                                        }
                                    />
                                </View>
                                <View style={{ width: 64 }}></View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 150 }}></View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra5}
                                        onChangeText={(text) => setLetra5(text)}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 134 }}></View>
                                <View style={{ width: 16 }}>
                                    <TouchableOpacity
                                        onPress={verificarResultado4}
                                    >
                                        <Text style={{ fontSize: 20 }}>4</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra6}
                                        onChangeText={(text) => setLetra6(text)}
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra2Palabra4}
                                        onChangeText={(text) =>
                                            setLetra2Palabra4(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra3Palabra4}
                                        onChangeText={(text) =>
                                            setLetra3Palabra4(text)
                                        }
                                    />
                                </View>
                                <View style={{ width: 64 }}></View>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 150 }}></View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra7}
                                        onChangeText={(text) => setLetra7(text)}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 27 }}></View>
                                <View style={{ width: 16 }}>
                                    <TouchableOpacity
                                        onPress={verificarResultado5}
                                    >
                                        <Text style={{ fontSize: 20 }}>5</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra1Palabra5}
                                        onChangeText={(text) =>
                                            setLetra1Palabra5(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra2Palabra5}
                                        onChangeText={(text) =>
                                            setLetra2Palabra5(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra3Palabra5}
                                        onChangeText={(text) =>
                                            setLetra3Palabra5(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra4Palabra5}
                                        onChangeText={(text) =>
                                            setLetra4Palabra5(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra8}
                                        onChangeText={(text) => setLetra8(text)}
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra6Palabra5}
                                        onChangeText={(text) =>
                                            setLetra6Palabra5(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra7Palabra5}
                                        onChangeText={(text) =>
                                            setLetra7Palabra5(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra8Palabra5}
                                        onChangeText={(text) =>
                                            setLetra8Palabra5(text)
                                        }
                                    />
                                </View>
                                <View style={{ padding: 2, borderWidth: 1 }}>
                                    <TextInput
                                        placeholder={""}
                                        size="20"
                                        value={letra9Palabra5}
                                        onChangeText={(text) =>
                                            setLetra9Palabra5(text)
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ height: 27 }}></View>
                    <Text
                        style={{
                            fontSize: 20,
                            marginVertical: 20,
                            fontWeight: "bold",
                        }}
                    >
                        Definitions
                    </Text>
                    {informacionTextos.map((element, index) => (
                        <Text key={index}>
                            {index + 1}. {element}
                        </Text>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}
