import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const h = height / 100;
const w = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5 * h,
  },
  viewHead: {
    backgroundColor: '#346536',
    height: 6 * h,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    marginBottom: 6 * h,
  },
  textHead: {
    color: '#eae8e8',
    fontSize: 5 * w,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#282548',
    padding: 10,
    borderRadius: 25,
    width:"80%",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    margin:15
  },
  textButton: {
    fontSize: 16,
    color:"white"
  },
  flatList: {
    marginVertical: 3 * h,
    marginLeft: w,
    height: 20 * h,
  },
  viewFlatListPost: {
    paddingLeft: 8 * w,
  },
  postContainer: {
    height: 18.5 * h,
    width: 35 * w,
    backgroundColor: 'white',
    marginRight: 5 * w,
    borderRadius: 6,
    elevation: 4,
  },
  imagePost: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 10 * h,
    width: '100%',
    marginBottom: 1.5 * h,
  },
  textName: {
    paddingLeft: 4 * w,
    fontSize: 3.5 * w,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 0.5 * h,
  },
  textSubtitle: {
    paddingLeft: 4 * w,
    fontSize: 3 * w,
  },
});

export default styles;
