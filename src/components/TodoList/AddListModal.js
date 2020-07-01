import React, { Component, useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    KeyboardAvoidingView, 
    TouchableOpacity,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tempData from '../../../tempData';
import getRealm from '../../services/realm';

// import { Container } from './styles';

export default class AddListModal extends Component {
    backgroundColors = ['#5CD859', '#24A6D9', '#595BD9', '#8022D9', '#D159D8', '#D85963', '#D88559'];
    
// Teste TodoSchema
    /*creatingTodo() {
        const [input, setInput] = useState('');
    }*/

    state = {
        name: '',
        color: this.backgroundColors[0]
    }

    createTodo = () => {
        const {name, color} = this.state;

        const list = {name, color}

        this.props.addList(list);

        this.setState({name: ''});
        this.props.closeModal();
    }

    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity 
                    key={color}
                    style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={()=> this.setState({ color })}
                />
            )
        })
    }


    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableOpacity 
                    style={{position: 'absolute', top: 64, right: 32}}
                    onPress={this.props.closeModal}
                >
                    <Icon name='close' size={24} color='#2D3436' />
                </TouchableOpacity>

                <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
                    <Text style={styles.title}>Create Todo List</Text>

                    <TextInput 
                        style={styles.input}
                        placeholder='List Name?'
                        onChangeText={text => this.setState({ name: text })}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                        {this.renderColors()}
                    </View>

                    <TouchableOpacity 
                        style={[styles.create, { backgroundColor: this.state.color }]}
                        onPress={this.createTodo}
                    >
                        <Text style={{color: '#FFFFFF', fontWeight: '600'}}>Create!</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 28,
        fontWeight: '800',
        color: '#2D3436',
        alignSelf: 'center',
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#24A6D9',
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        height: 50, // Be Careful Here
        marginTop: 24,
        borderRadius: 50,
        borderRadius: 6,   
        alignItems: 'center',
        justifyContent: 'center' 
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    }
});

/*createTodo(todo) {
        const data = {
            name: todo.name,
            color: todo.color = this.backgroundColors[0]
        };

        const realm = getRealm();

        realm.write(() => {
            realm.create('todoList', data);
            this.props.addList(realm);
            this.setState({name: ''});
            this.props.closeModal();
        })

    }*/