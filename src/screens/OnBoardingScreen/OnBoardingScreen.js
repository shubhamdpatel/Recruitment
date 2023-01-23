import React, {useRef, useState} from 'react';
import {View, FlatList, Animated} from 'react-native';
import {boardingData} from './boardingData';
import Colors from '../../constant/Colors';
import BoardingItem from './component/BoardingItem';
import Paginator from './component/Paginator';
import NextButton from './component/NextButton';
const Boarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) =>
    setCurrentIndex(viewableItems[0].index),
  ).current;
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
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
        renderItem={(item, index) => <BoardingItem Data={item} />}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfigRef}
        ref={slidesRef}
      />
      <Paginator data={boardingData} scrollX={scrollX} />
      {/*<NextButton />*/}
    </View>
  );
};

const styles = {
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darker,
  },
};
export default Boarding;
