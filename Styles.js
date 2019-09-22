export const styleTheme="Style2"
import { StyleSheet } from 'react-native';
import StyleSheet1 from './Styles2'
import StyleSheet2 from './StylesOriginal'

var styles = (styleTheme=="Style2") ? StyleSheet1 : StyleSheet2;
styles = StyleSheet.create(styles)
export default styles;