import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {Searchbar} from 'react-native-paper';

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [heroes, setHeroes] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://api.opendota.com/api/heroes');
    const json = await res.json();
    setData(json);
    setHeroes(json.slice());
  };
  

  const filterNames = (hero:any) => {
    console.log(heroes.length);
      let search = query.toLowerCase().replace(/ /g,"_");
      if(hero.name.startsWith(search, 14)){
        return formatNames(hero);
      }else{ 
        heroes.splice(heroes.indexOf(hero), 1);
        return null;
      }
  }

  const formatNames = (hero: any) =>{
    let heroName = hero.name.charAt(14).toUpperCase() + hero.name.slice(15);
    heroName = heroName.replace(/_/g, " ");
    return heroName;
  }

  const updateQuery = (input: any) => {
    setHeroes(data.slice());
    setQuery(input);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Hero</Text>
      <Searchbar
          onChangeText={updateQuery}
          value={query}   
          placeholder="Type Here..."
      />
      <FlatList data={heroes} keyExtractor = {(i)=>i.id.toString()}
        extraData = {query} 
        renderItem = {({item}) =>
          <Text style={styles.flatList}>{filterNames(item)}
          </Text>} />

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
      marginBottom: 45
  },
  heading:{
      marginTop: 50,
      marginBottom:10,
      marginLeft: 15,
      fontSize: 25
  },
  flatList:{
      paddingLeft: 15, 
      marginTop:15, 
      paddingBottom:15,
      fontSize: 20,
      borderBottomColor: '#26a69a',
      borderBottomWidth:1
  }
});

export default Home;