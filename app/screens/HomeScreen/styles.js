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
    backgroundColor: '#7140FE',
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
  viewUser: {
    paddingLeft: 8 * w,
  },
  imageUser: {
    height: 11 * h,
    width: 11 * h,
    borderRadius: 5.5 * h,
    marginVertical: h,
  },
  textUser: {
    color: '#6F3FFB',
    fontSize: 4 * h,
    fontWeight: 'bold',
  },
  textRequestNo: {
    color: '#383838',
    fontSize: 2 * h,
    padding: w,
    fontWeight: '500',
  },
  viewFlatListRequest: {
    paddingLeft: 8 * w,
  },
  flatList: {
    marginVertical: 3 * h,
    marginLeft: w,
    height: 20 * h,
  },
  textBlogTitle: {
    color: '#383838',
    fontSize: 2 * h,
    paddingLeft: 9 * w,
    marginTop: 4 * h,
    fontWeight: '500',
    marginBottom: h,
  },
  viewFlatListBlog: {
    paddingLeft: 8 * w,
  },
  blogContainer: {
    height: 18.5 * h,
    width: 35 * w,
    backgroundColor: 'white',
    marginRight: 5 * w,
    borderRadius: 6,
    elevation: 4,
  },
  imageBlog: {
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
