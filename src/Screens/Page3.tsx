import React from 'react';
import { View, Text, StyleSheet, SectionList, ScrollView } from 'react-native';
 
interface SectionData {
  title: string;
  data: string[];
}
 
const DATA: SectionData[] = [
  {
    title: 'Section 1',
    data: ['Item 1', 'Item 2', 'Item 3'],
  },
  {
    title: 'Section 2',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Section 3',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Section 4',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Section 5',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Section 6',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
  // Add more sections as needed
];
 
const renderItem = ({ item }: { item: string }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item}</Text>
  </View>
);
 
const renderSectionHeader = ({ section }: { section: SectionData }) => (
  <Text style={styles.header}>{section.title}</Text>
);
 
const ThirdPage = () => {
  return (
    <ScrollView style={styles.container}>
      {DATA.map((section) => (
        <View key={section.title}>
          <Text style={styles.header}>{section.title}</Text>
          <ScrollView horizontal>
            <SectionList
              sections={[section]}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginRight: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    marginBottom: 30,
    marginTop:10
  },
  title: {
    fontSize: 24,
  },
});
 
export default ThirdPage