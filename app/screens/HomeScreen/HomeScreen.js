import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  _OnPressGetPost = () => {
    this.props.requestPost();
  };

  _postCard = ({item, index}) => {
    return (
      <View style={styles.postContainer}>
        <Image style={styles.imagePost} source={{uri: item.image}} />
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textSubtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHead}>
          <Text style={styles.textHead}>Posts</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._OnPressGetPost()}>
          <Text style={styles.textButton}>Click here to get posts</Text>
        </TouchableOpacity>
        <View style={styles.viewFlatListPost}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
            data={this.props.post}
            extraData={this.props}
            renderItem={(item, index) => this._postCard(item, index)}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    );
  }
}
