import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Svg, Polygon } from 'react-native-svg';

import { COLORS, FONTS, images, SIZES } from '../constants';

export default function Home(props) {
  const [showAddToBagModal, setShowAddToBagModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState('');

  const [trending, setTrending] = React.useState([
    {
      id: 0,
      name: 'Nike Air Zoom Pegasus 36',
      img: images.nikePegasus36,
      bgColor: '#BF012C',
      type: 'CORRER',
      price: 'R$186',
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Black,
      bgColor: '#D39C67',
      type: 'TREINAR',
      price: 'R$135',
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: 'Nike Air Zoom Kobe 1 Proto',
      img: images.nikeZoomKobe1Proto,
      bgColor: '#7052A0',
      type: 'BASQUETE',
      price: 'R$199',
      sizes: [6, 7, 8, 9],
    },
  ]);

  const [recentlyViewed, setRecentlyViewed] = React.useState([
    {
      id: 0,
      name: 'Nike Metcon 4',
      img: images.nikeMetcon4,
      bgColor: '#414045',
      type: 'TREINAR',
      price: 'R$119',
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: 'Nike Metcon 6',
      img: images.nikeMetcon6,
      bgColor: '#4EABA6',
      type: 'TREINAR',
      price: 'r$135',
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Purple,
      bgColor: '#2B4660',
      type: 'TREINAR',
      price: 'R$124',
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: 'Nike Metcon 3',
      img: images.nikeMetcon3,
      bgColor: '#A69285',
      type: 'TREINAR',
      price: 'R$99',
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 4,
      name: 'Nike Metcon Free',
      img: images.nikeMetconFree,
      bgColor: '#A02E41',
      type: 'TREINAR',
      price: 'R$108',
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ]);

  function renderTrendingShoes(item, index) {
    let trendingStyle = {};
    if (index === 0) {
      trendingStyle = { marginLeft: SIZES.padding };
    }
    return (
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...trendingStyle,
        }}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}>
        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: SIZES.base,
              borderRadius: 10,
              marginRight: SIZES.padding,
              backgroundColor: item.bgColor,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: SIZES.radius,
            },
            styles.trendingShadow,
          ]}>
          <View style={{ height: '35%', justifyContent: 'space-between' }}>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {item.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {item.price}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '95%',
              height: '100%',
              zIndex: 1000,
            }}>
            <Svg width="100%" height="100%">
              <Polygon points="0,0 160,0 160,80" fill="white" />
            </Svg>
          </View>
        </View>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            zIndex: 5,
            transform: [
              {
                rotate: '-15deg',
              },
            ],
          }}
        />
      </TouchableOpacity>
    );
  }

  function renderRecentlyViewed(item, index) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingLeft: 40,
        }}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{ width: 130, height: 100 }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            marginLeft: 30,
            justifyContent: 'center',
          }}>
          <Text style={{ color: COLORS.lightGray }}>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderShoeSizes() {
    return selectedItem.sizes.map((item) => {
      return (
        <TouchableOpacity
          key={item}
          style={{
            width: 35,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: COLORS.white,
            marginBottom: 5,
            backgroundColor:
              selectedSize === item ? COLORS.white : 'transparent',
          }}
          onPress={() => setSelectedSize(item)}>
          <Text
            style={{
              color: selectedSize === item ? COLORS.lightGray : COLORS.white,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}>
        TENDÊNCIAS
      </Text>
      <View style={{ height: 260, marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
          borderTopLeftRadius: 30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          elevation: 7,
        }}>
        <View style={{ width: 70, marginLeft: SIZES.base }}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
          }}>
          <FlatList
            data={recentlyViewed}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Modal */}

      {selectedItem && (
        <Modal transparent={true} visible={showAddToBagModal}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(100,100,100, 0.5)',
              zIndex: -1,
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(null);
                setSelectedSize('');
                setShowAddToBagModal(false);
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            />
            {/* conteúdo do modal */}
            <View
              style={{
                justifyContent: 'center',
                width: '85%',
                backgroundColor: selectedItem.bgColor,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: SIZES.padding * 2,
                  position: 'relative',
                  marginBottom: 50,
                }}>
                <Image
                  source={selectedItem.img}
                  resizeMode="contain"
                  style={{
                    width: '90%',
                    height: 170,
                    transform: [{ rotate: '-15deg' }],
                    position: 'absolute',
                    top: -100,
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body2,
                }}>
                {selectedItem.name}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base / 2,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                {selectedItem.type}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}>
                {selectedItem.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                }}>
                <View>
                  <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                    Tamanhos
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    marginLeft: SIZES.radius,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      marginLeft: SIZES.radius,
                    }}>
                    {renderShoeSizes()}
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 70,
                  marginTop: SIZES.base,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}
                onPress={() => {
                  setSelectedItem(null);
                  setSelectedSize('');
                  setShowAddToBagModal(false);
                }}>
                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>
                  Add ao carrinho
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    height: '100%',
    shadowOpacity: 0.29,
    shadowRadius: 4,
    // elevation: 7,
    // zIndex: -1,
  },
});
