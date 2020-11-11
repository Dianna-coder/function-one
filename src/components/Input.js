import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../styles/colors/index';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: props.defaultValue,
      isFocused: false,
    };
    
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };
  handleBlur = () => {
    this.setState({ isFocused: false });
    // Keyboard.dismiss();
  };

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  onChangeText(text) {
    this.props.onChangeText(text);
    this.setState({ inputValue: text });
  }

  render() {
    const {
      withi,
      altura,
      alturaAoAbrir,
      inputType,
      labelText,
      inputValue,
      multiline,
      numberOfLines,
      addIcone,
      iconeEscolhido
    } = this.props;
    
    const labelStyle = {
      position: 'absolute',
      left: 0,
      color: colors.branco,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [35, 18],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [hp('1.9%'), hp('1.7%')],
      }),
      marginTop: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -10]
      })
    };

    return (
      // <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={[
        styles.wrapper
      ]}>
          <Animated.Text style={labelStyle}>
            {labelText}

            <View style={{ marginLeft: 20 }}>
              {
                addIcone
              ? <Icon 
                  name={iconeEscolhido}
                  style={{ 
                    fontSize: 16, 
                    color: colors.branco
                    }}
                /> 
              : null
              }
            </View>

          </Animated.Text>
            <TextInput
              style={[
                styles.inputField,
                { 
                  width: withi ? parseInt(withi) : wp('79.71%'),
                  height: altura ? altura :  hp('3.95%') 
                }
              ]}
              onChangeText={this.onChangeText}
              keyboardType={inputType}
              underlineColorAndroid="transparent"
              defaultValue={inputValue}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              blurOnSubmit
              multiline={multiline}
              numberOfLines={numberOfLines}
              onEndEditing={Keyboard.dismiss}
            />
      </View>
      // </KeyboardAvoidingView>
    );
  }
};


const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 5,
  },
  container: {
    flex: 1,
  },
  inputField: {
    paddingBottom: 5,
    color: colors.branco,
    marginTop: hp('3.5%'),
    fontSize: hp('1.9%'),
    borderBottomWidth: 1,
    borderBottomColor: colors.branco
  }
});