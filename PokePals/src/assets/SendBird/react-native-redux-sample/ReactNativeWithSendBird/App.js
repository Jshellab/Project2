import React, { Component } from "react";
import {
  Platform,
  AppState,
  AsyncStorage,
  PushNotificationIOS
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import FCM, {
  FCMEvent,
  NotificationType,
  NotificationActionType,
  RemoteNotificationResult,
  WillPresentNotificationResult
} from "react-native-fcm";
import SendBird from 'sendbird';

import {
  sbRegisterPushToken
} from './src/sendbirdActions/index';

import store from "./src/store/index";

import Start from "./src/screens/Start";
import Login from "./src/screens/Login";
import Menu from "./src/screens/Menu";
import Profile from "./src/screens/Profile";
import OpenChannel from "./src/screens/OpenChannel";
import OpenChannelCreate from "./src/screens/OpenChannelCreate";
import Chat from "./src/screens/Chat";
import Member from "./src/screens/Member";
import BlockUser from "./src/screens/BlockUser";
import GroupChannel from "./src/screens/GroupChannel";
import GroupChannelInvite from "./src/screens/GroupChannelInvite";

const MainNavigator = StackNavigator(
  {
    Start: { screen: Start },
    Login: { screen: Login },
    Menu: { screen: Menu },
    Profile: { screen: Profile },
    OpenChannel: { screen: OpenChannel },
    OpenChannelCreate: { screen: OpenChannelCreate },
    Chat: { screen: Chat },
    Member: { screen: Member },
    BlockUser: { screen: BlockUser },
    GroupChannel: { screen: GroupChannel },
    GroupChannelInvite: { screen: GroupChannelInvite }
  },
  {
    initialRouteName: 'Start',
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: { fontWeight: "500" }
    })
  }
);
let sb = null;

function showLocalNotificationWithAction(notif) {
  try {
    const data = JSON.parse(notif.sendbird);
    FCM.presentLocalNotification({
      title: data.sender ? data.sender.name : 'SendBird',
      body: data.message,
      priority: "high",
      show_in_foreground: true,
      click_action: "com.sendbird.sample.reactnative" // for ios
    });
  } catch (e) {
  }
}

// these callback will be triggered even when app is killed
FCM.on(FCMEvent.Notification, notif => {
  console.log('background notif', notif);
  try {
    const sendbirdNotification = (typeof notif.sendbird === 'string') ? JSON.parse(notif.sendbird) : notif.sendbird;
    if (sendbirdNotification) {
      AsyncStorage.setItem('payload',
        JSON.stringify({
          "channelType": sendbirdNotification.channel_type,
          "channel": sendbirdNotification.channel
        }),
        () => { });
      showLocalNotificationWithAction(notif);
    }
  } catch (e) {
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.disableYellowBox = true;
    FCM.requestPermissions();
    FCM.on(FCMEvent.Notification, notif => {
      console.log('foreground notif', notif);
      if (Platform.OS === "ios") {
        switch (notif._notificationType) {
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData);
            break;

          case NotificationType.NotificationResponse:
            notif.finish();
            break;

          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All);
            break;
        }
        try {
          const sendbirdNotification = (typeof notif.sendbird === 'string') ? JSON.parse(notif.sendbird) : notif.sendbird;
          if (sendbirdNotification) {
            AsyncStorage.setItem('payload',
              JSON.stringify({
                "channelType": sendbirdNotification.channel_type,
                "channel": sendbirdNotification.channel
              }),
              () => { });
            showLocalNotificationWithAction(notif);
          }
        } catch (e) {
        }
      }
    });

    FCM.on(FCMEvent.RefreshToken, token => {
      AsyncStorage.setItem('pushToken', token);
      sb = SendBird.getInstance();
      AsyncStorage.getItem('user', (err, user) => {
        if (user) {
          this._registerPushToken(token);
        }
      });
    });

    if(Platform.OS === 'ios') {
      PushNotificationIOS.setApplicationIconBadgeNumber(0);
    }
    console.log('app is launched');
    AppState.addEventListener("change", this._handleAppStateChange);
  }
  componentWillUnmount() {
    console.log('app is killed');
    AppState.removeEventListener("change", this._handleAppStateChange);
  }
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }

  _registerPushToken = (token) => {
    sbRegisterPushToken(token)
      .then(res => { })
      .catch(err => { });
  }
  _handleAppStateChange = (nextAppState) => {
    const sb = SendBird.getInstance();
    if (sb) {
      if (nextAppState === 'active') {
        if(Platform.OS === 'ios') {
          PushNotificationIOS.setApplicationIconBadgeNumber(0);
        }
        console.log('app is into foreground');
        sb.setForegroundState();
      } else if (nextAppState === 'background') {
        console.log('app is into background');
        sb.setBackgroundState();
      }
    }
  }
}
