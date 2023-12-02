import Paho from "paho-mqtt";
import {Bars4Icon} from 'react-native-heroicons/solid';
import { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import styles from "./styleMonitor";
client = new Paho.Client(
 "mqttserver.tk",
  Number(9001),"/mqtt",
  "mqtt-tester"
);

export default function App() {
  const [nitro, setNitro] = useState(0);
  const [photpho, setPhotpho] = useState(0);
  const [kali, setKali] = useState(0);
  const [elec, setElec] = useState(0);
  const [pH, setPH] = useState(0);
  const [valueTemp, setValueTemp] = useState([1,2,3,4,5]);
  const [valueHumi, setValueHumi] = useState([1,2,3,4,5]);
  function onMessage(message) {
    if(message.topic == '/innovation/airmonitoring/'){
      if(valueTemp.length == 7){
        let tempList = [...valueTemp];
        tempList.shift();
        setValueTemp(tempList)  
      }
      if(valueHumi.length == 7){
        let humiList = [...valueHumi];
        humiList.shift();
        setValueHumi(humiList)     
      }
      setValueTemp(prevValue => [...prevValue, JSON.parse(message.payloadString).sensors[0].sensor_value]);
      setValueHumi(prevValue => [...prevValue, JSON.parse(message.payloadString).sensors[1].sensor_value]);
    }

    if(message.topic == '/innovation/soilmonitoring/'){
      setNitro(JSON.parse(message.payloadString).sensors[4].sensor_value)
      setPhotpho(JSON.parse(message.payloadString).sensors[5].sensor_value)
      setKali(JSON.parse(message.payloadString).sensors[6].sensor_value)
      setPH(JSON.parse(message.payloadString).sensors[2].sensor_value)
      setElec(JSON.parse(message.payloadString).sensors[3].sensor_value)
    }

  }
  function onConnect(){
    console.log("onConnect");
    client.subscribe("/innovation/airmonitoring/");
    client.subscribe("/innovation/soilmonitoring/");
    client.onMessageArrived = onMessage;
  }

  useEffect(() => {
    client.connect({
	  onSuccess: onConnect,
    mqttVersion: 3,
    useSSL: false,
    keepAliveInterval:3000,
    userName : "innovation",
	  password : "Innovation_RgPQAZoA5N",
    onFailure: () => {
      console.log("Failed to connect!"); 
    }
    });
  }, [])

  const dataTemp = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: valueTemp,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        // backgroundColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  };

  const dataHumi = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: valueHumi,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        // backgroundColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIconArea}>
          <Bars4Icon size="40" color="black" style={styles.menuIcon}/>
        </TouchableOpacity>
        <View style={styles.theoDoiCayTrongArea}>
          <Text style={styles.theoDoiCayTrong}>Theo Dõi Cây Trồng</Text>
        </View>
      </View>

      <ScrollView>
      <View style={styles.monitorLinechartBgArea}>
      <View style={styles.monitorLinechartBg}>
      <LineChart
        data={dataTemp}
        width={300}
        height={220}
        yAxisSuffix=" 'C"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          backgroundGradientFrom: '#74c79d',
          backgroundGradientTo: '#74c79d',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10
        }}
      />
        <View style={styles.tempChart}>
          <Text style={styles.nhietDo}>Nhiệt độ: 32 'C</Text>
        </View>
      </View>
      </View>

      <View style={styles.monitorLinechartBgArea}>
      <View style={styles.monitorLinechartBg}>
      <LineChart
        data={dataHumi}
        width={300}
        height={220}
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          backgroundGradientFrom: '#57CCED',
          backgroundGradientTo: '#57CCED',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10
        }}
      />
        <View style={styles.tempChart}>
          <Text style={styles.nhietDo}>Độ ẩm: 55%</Text>
        </View>
      </View>
      </View>
      
      <View style={styles.container}>
            <View style={styles.soilArea}>
                <View style={styles.nitrogenArea}>
                    <Text style={styles.soilText}>Nitrogen</Text>
                    <Text style={styles.soilText}>{nitro} mg/kg </Text>
                </View>
                <View style={styles.photphorusArea}>
                    <Text style={styles.soilText}>Photphorus</Text>
                    <Text style={styles.soilText}>{photpho} mg/kg</Text>
                </View>
                <View style={styles.kaliArea}>
                    <Text style={styles.soilText}>Kali</Text>
                    <Text style={styles.soilText}>{kali} mg/kg</Text>
                </View>
            </View>

            <View style={styles.electricArea}>
                <View style={styles.elecConducArea}>
                    <Text style={styles.soilText}>Electrical Conductivity</Text>
                    <Text style={styles.soilText}>{elec} us/cm</Text>
                </View>
                <View style={styles.potenHydroArea}>
                    <Text style={styles.soilText}>Potential Hydrogen</Text>
                    <Text style={styles.soilText}>{pH} pH</Text>
                </View>
            </View>
        </View>
      </ScrollView>
      
    </View>
  );
}
