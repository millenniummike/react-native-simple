export const styleTheme="Original"
import { StyleSheet } from 'react-native';
import StyleSheet1 from './StylesOriginal'
import StyleSheet2 from './Styles2'

var styles = (styleTheme=="Original") ? StyleSheet1 : StyleSheet2;
styles = StyleSheet.create(styles)
export default styles;