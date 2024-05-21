import React from 'react';
//import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
//import { Text, View } from './Themed';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

export default function EditScreenInfo({ path }: { path: string }) {
  const getQuestionPaper = () => {
    // Your logic for getting question paper
    console.log("Get Question Paper");
  };

  const uploadAnswerSheet = () => {
    // Your logic for uploading answer sheet
    console.log("Upload Answer Sheet");
  };

  const uploadQuestion = () => {
    // Your logic for uploading question
    console.log("Upload Question");
  };

  const getResult = () => {
    // Your logic for getting result
    console.log("Get Result");
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={getQuestionPaper}>
      <Text style={styles.buttonText}>Get Question Paper</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={uploadAnswerSheet}>
      <Text style={styles.buttonText}>Upload Answer Sheet</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={uploadQuestion}>
      <Text style={styles.buttonText}>Upload Question Paper</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={getResult}>
      <Text style={styles.buttonText}>Get Result</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7E73F3',
    padding: 20,
    marginVertical: 25,
    width: 347,
    height:65,
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'lato',
  },
});
