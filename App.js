import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions 
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { VLCPlayer } from '@psilva-monssa/react-native-vlc-media-player';

const calcVLCPlayerHeight = (windowWidth,aspetRatio) => {
  return windowWidth * aspetRatio;
};

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header title="test"/> */}
          <View >
              <Text style={styles.heading}>RN VLC Media Player</Text>
          </View>
          <View style={styles.body}>
          <VLCPlayer
            source={{
              initType: 2,
              hwDecoderEnabled: 1,
              hwDecoderForced: 1,
              uri: 'rtsp://psilva:q22334455@190.3.107.187:554/Streaming/Channels/401',
              mediaOptions: {
                ':network-caching' : 400,         
                ':live-caching' : 400         
	      }, 
              initOptions: [
                '--no-audio',
                '--rtsp-tcp',
                '--network-caching=400',
                '--rtsp-caching=400',
                '--no-stats',
                '--tcp-caching=400',
                '--realrtsp-caching=400',
              ],
            }}
            autoplay={true}
            autoAspectRatio={true}
            resizeMode="cover" 
            // videoAspectRatio={"4:3"}
            isLive={true}
            autoReloadLive={true}
            style={{ height: calcVLCPlayerHeight( Dimensions.get('window').width, 3/4), marginTop: 30}}
          />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  heading:{
    fontSize: 30,
    fontWeight: '700',
    color: Colors.black,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
