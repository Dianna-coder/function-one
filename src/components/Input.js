import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  // KeyboardAvoidingView
} from "react-native";
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

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

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
      onChangeText,
      inputType,
      inputStyle,
      labelText,
      defaultValue,
      inputValue,
      // error
    } = this.props;
    
    const labelStyle = {
      position: 'absolute',
      left: 0,
      // color: !!error ? colors.vermelho : colors.branco,
      color: colors.branco,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [35, 18],
        useNativeDriver: false,
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [hp('1.9%'), hp('1.7%')],
        useNativeDriver: false,
      }),
      marginTop: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -10]
      })
    };

    return (
      <View style={styles.wrapper}>
          <Animated.Text style={labelStyle}>
            {labelText}
          </Animated.Text>

          {/* <KeyboardAvoidingView behavior='padding'> */}
            <TextInput
              style={[
                // !!error ? styles.inputErrorField : styles.inputField,
                styles.inputField,
                { width: withi ? parseInt(withi) : wp('79.71%') }
              ]}
              onChangeText={this.onChangeText}
              keyboardType={inputType}
              underlineColorAndroid="transparent"
              // defaultValue={!!error ? error.message : inputValue}
              defaultValue={inputValue}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              blurOnSubmit
            />
          {/* </KeyboardAvoidingView> */}

      </View>
    );
  }
};


const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 5 
  },
  // inputErrorField: {
  //   height: hp('3.95%'),
  //   paddingBottom: 5,
  //   color: colors.vermelho,
  //   marginTop: hp('3.5%'),
  //   fontSize: hp('1.9%'),
  //   borderBottomWidth: 1,
  //   borderBottomColor: colors.branco
  // },
  inputField: {
    height: hp('3.95%'),
    paddingBottom: 5,
    color: colors.branco,
    marginTop: hp('3.5%'),
    fontSize: hp('1.9%'),
    borderBottomWidth: 1,
    borderBottomColor: colors.branco
  }
});