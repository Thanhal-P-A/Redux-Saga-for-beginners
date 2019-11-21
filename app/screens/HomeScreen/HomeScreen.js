import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  blogCard=({item,index})=> {
    return (
      <View style={styles.blogContainer}>
        <Image style={styles.imageBlog} source={{uri: item.image}} />
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textSubtitle}>{item.subtitle}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHead}>
          <Text style={styles.textHead}>Blogs</Text>
        </View>
        <View style={styles.viewFlatListBlog}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
            data={this.props.post}
            extraData={this.props}
            renderItem={(item, index) => this.blogCard(item, index)}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    );
  }
}
