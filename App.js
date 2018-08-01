import React from 'react';
import {
	CameraRoll,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		CameraRoll.getPhotos({
			first: 20,
			assetType: 'Photos'
		}).then((r) => {
			this.setState({ photos: r.edges });
		}).catch((err) => {
			// FIXME: error handling
		});
	}

  render() {
    return (
      <View style={styles.container}>
        <Text>Aha. Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
