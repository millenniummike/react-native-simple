export const styleTheme="Maria"
import { StyleSheet } from 'react-native';
import StyleSheet1 from './StylesMaria'
import StyleSheet2 from './StylesOriginal'

var styles = (styleTheme=="Maria") ? StyleSheet1 : StyleSheet2;
styles = StyleSheet.create(styles)
export default styles;