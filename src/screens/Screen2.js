import { Text, View, TouchableOpacity } from "react-native";
export default function Screen2() {
    const lletres = new Array(100);

    const rellenarLletres = () => {
        const alfabeto = "abcdefghijklmnopqrstuvwxyz";
        lletres.forEach((element) => {
            let indice = Math.floor(Math.random() * alfabeto.length);
            element = alfabeto.charAt(indice);
        });
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignSelf: "center",
                marginVertical: 80,
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
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "column" }}>
                            {lletres.map((unaLletra, index) => {
                                return (
                                    index % 10 == 0 &&(
                                        <View
                                            style={{ flexDirection: "column" }}
                                            key={index}
                                        >
                                            )
                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: "white",
                                                    width: 38,
                                                    padding: 14,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                <Text style={{ fontSize: 15 }}>
                                                    {unaLletra}
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ width: 0 }}></View>
                                            (index % 10 == 0) &&{" "}
                                        </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
