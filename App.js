import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList, 
  Modal 
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import tempData from './tempData';
//import colors from './src/Colors/Colors';
import TodoList from './src/components/TodoList/TodoList';
import AddListModal from './src/components/TodoList/AddListModal';
/*import getRealm from './src/services/realm';
import schema from './src/schemas/schemas';*/
// Teste


//Icon.loadFont();

export default class App extends Component {
  
  state = {
    addTodoVisible: false,
    lists: tempData
  };

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible})
  };

  renderList = list => {
    return <TodoList 
              list={list}
              updateList={this.updateList}
            />;
  };

  addList = list => {
    this.setState({lists: [ ...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }]})
  };

  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal 
            animationType='slide'
            visible={this.state.addTodoVisible}
            onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddListModal 
            closeModal={() => this.toggleAddTodoModal()}
            addList={this.addList} />

        </Modal>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo 
            <Text style={{fontWeight: '300', color: '#24A6D9'}}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        
        <View style={{ marginVertical: 48}}>
          <TouchableOpacity 
              style={styles.addList}
              onPress={() => this.toggleAddTodoModal()}>
            <Icon name='plus' size={16} color='#24A6D9' />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>

        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList 
            data={this.state.lists}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps='always'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    backgroundColor: '#A7CBD9',
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#2D3436',
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: '#A7CBD9', // light blue
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    color: '#24A6D9', // blue
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8
  }
});


































/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *@format*@flowstrict-local*/

/*import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;*/
