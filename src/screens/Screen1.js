import { TextInput, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import {useState} from 'react';
export default function Screen1() {
  const [informacionTexto1, setInformacionTexto1] = useState('');
  const [informacionTexto2, setInformacionTexto2] = useState('');
  const [informacionTexto3, setInformacionTexto3] = useState('');
  const [informacionTexto4, setInformacionTexto4] = useState('');
  const [informacionTexto5, setInformacionTexto5] = useState('');

  const getData = async () => {
  try {
    const responses = await Promise.all([
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/Software"),
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/Developer"),
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/System"),
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/App"),
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/Framework"),
    ]);

    const data = await Promise.all(
      responses.map(async (response) => {
        if (response.ok) {
          const jsonData = await response.json();
          if (Array.isArray(jsonData) && jsonData.length > 0) {
            return jsonData[0].meanings[0].definitions[0].definition;
          }
        }
        return "";
      })
    );
    setInformacionTexto1(data[0] || "");
    setInformacionTexto2(data[1] || "");
    setInformacionTexto3(data[2] || "");
    setInformacionTexto4(data[3] || "");
    setInformacionTexto5(data[4] || "");
  } catch (error) {
    console.log(error);
  }
};

const verificarResultado1 = () =>{
  
}

  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 80,
      }}>
      <TouchableOpacity onPress={getData}>
      <Text style={{ fontSize: 40, marginVertical: 20, fontWeight: 'bold' }}>
        Crossroads
      </Text>
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 134 }}></View>
                <View style={{ width: 16 }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>1</Text>
                </TouchableOpacity>
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue='f' />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 16 }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>2</Text>
                </TouchableOpacity>
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue='d' />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={'r'} />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 54 }}></View>
                <View style={{ width: 16 }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>3</Text>
                </TouchableOpacity>
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={'k'} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ width: 64 }}></View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={'p'} />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 134 }}></View>
                <View style={{ width: 16 }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>4</Text>
                </TouchableOpacity>
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={'o'} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ width: 64 }}></View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={'l'} />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 27 }}></View>
                <View style={{ width: 16 }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>5</Text>
                </TouchableOpacity>
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={'T'} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
              </View>
            </View>
          </View>
        </View>
        
        <ScrollView>
          <View style={{ height: 27 }}></View>
          <Text
            style={{ fontSize: 20, marginVertical: 20, fontWeight: 'bold' }}>
            Definitions
          </Text>
          <Text>1. {informacionTexto1}</Text>
          <Text>2. {informacionTexto2}</Text>
          <Text>3. {informacionTexto3}</Text>
          <Text>4. {informacionTexto4}</Text>
          <Text>5. {informacionTexto5}</Text>
        </ScrollView>
      </View>
    </View>
  );
}