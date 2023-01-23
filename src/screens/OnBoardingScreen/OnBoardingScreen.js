import React, {useRef, useState} from 'react';
import {View, FlatList, Animated} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {boardingData} from './boardingData';
import BoardingItem from './component/BoardingItem';
import Paginator from './component/Paginator';
import Skip from './component/Skip';

const Boarding = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) =>
    setCurrentIndex(viewableItems[0].index),
  ).current;
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < boardingData.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      props.navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Skip navigation={props?.navigation} />
      <FlatList
        data={boardingData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled={true}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        renderItem={(item, index) => (
          <BoardingItem Data={item} navigation={props.navigation} />
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfigRef}
        ref={slidesRef}
      />
      <Paginator data={boardingData} scrollX={scrollX} scrollTo={scrollTo} />
    </View>
  );
};

const styles = {
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  skip: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: wp(80),
  },
};
export default Boarding;
