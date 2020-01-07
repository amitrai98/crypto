import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadHome} from './HomeActions';
import AppHeader from '../../header/AppHeader';

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encrptedMessage: '',
      decryptedMessage: '',
      rawMessage: '',
    };
  }

  encryptMessage(text) {}

  decryptMessage(text) {}

  clearText() {
    this.setState({encrptedMessage: '', decryptedMessage: '', rawMessage: ''});
  }

  render() {
    const {encrptedMessage, decryptedMessage, rawMessage} = this.state;
    return (
      <View style={{flex: 1}}>
        <AppHeader title={'Home'} />
        <TextInput
          value={rawMessage}
          onChangeText={text => this.setState({rawMessage: text})}
          style={styles.messageInputBox}
        />

        <View style={{flex: 1}}>
          <View style={{alignSelf: 'center', flex: 1}}>
            <TouchableOpacity style={styles.encryptButton}>
              <Text style={styles.buttonText}>Encypt Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.decryptButton}>
              <Text style={styles.buttonText}>Decrypt Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.clearText()}
              style={styles.decryptButton}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.outputBoard}>
            <View style={{flex: 1}}>
              <Text
                style={styles.encyptionHeader}>{`Input Text message `}</Text>
              <Text style={styles.encyptionText}>{`${rawMessage}`}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.encyptionHeader}>{`Ecrypted message `}</Text>
              <Text style={styles.encyptionText}>{`${encrptedMessage}`}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.encyptionHeader}>{`Decrypted message `}</Text>
              <Text style={styles.encyptionText}>{`${decryptedMessage}`}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.HomeReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadHome: bindActionCreators(loadHome, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
const styles = StyleSheet.create({
  container: {},
  encryptButton: {
    backgroundColor: 'blue',
    marginTop: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  decryptButton: {
    backgroundColor: 'red',
    marginTop: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  messageInputBox: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {color: 'white', alignSelf: 'center'},
  outputBoard: {
    flex: 1.5,
    backgroundColor: 'gray',
    marginTop: 30,
  },
  encyptionHeader: {color: 'white', paddingHorizontal: 10, paddingVertical: 8},
  encyptionText: {color: 'white', paddingHorizontal: 12},
});
