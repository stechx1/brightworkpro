import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeHandyman from './Admin/Handymans/HomeHandyman';
import Home from './Admin/Home/Home';
import {Image} from 'react-native';
import PostHome from './Admin/Posts/PostHome';
import ActiveOrders from './Admin/Orders/ActiveOrders';
import RecentOrdersPage from './Admin/Recent/RecentOrdersPage';
import PendingRequest from './Admin/Pendings/PendingRequests';
import Stats from './Admin/Stats/Stats';
import JobDone from './Admin/Recent/JobDone';
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function AdminHome() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle:{paddingTop:40},
        tabBarIndicatorStyle: {
          backgroundColor: 'blue',
          height: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          title: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/home.png')}
                style={{width: 20, height: 20, paddingRight: 10}}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostHome}
        options={{
          title: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/post.png')}
                style={{width: 20, height: 20, paddingRight: 10}}
              />
              <Text>Posts</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Handymans"
        component={HomeHandyman}
        options={{
          title: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/handyman.png')}
                style={{width: 20, height: 20, paddingRight: 10}}
              />
              <Text>Handymans</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ActiveOrders"
        component={ActiveOrders}
        options={{
          title: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/activejobs.png')}
                style={{width: 20, height: 20, paddingRight: 10}}
              />
              <Text>Active Jobs</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="status"
        component={JobDone}
        options={{
          title: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/jobstatus.png')}
                style={{width: 20, height: 20, paddingRight: 10}}
              />
              <Text>Jobs Status</Text>
            </View>
            
          ),
        }}
      />

      <Tab.Screen
        name="RecentJobs"
        component={RecentOrdersPage}
        options={{
          title: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/recent.png')}
                style={{width: 20, height: 20, paddingRight: 10}}
              />
              <Text>Recent Jobs</Text>
            </View>
            
          ),
        }}
      />
      <Tab.Screen
        name="PendingRequests"
        component={PendingRequest}
        options={{
          title: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/pending.png')}
                style={{width: 20, height: 20, paddingRight: 10}}
              />
              <Text>Pending Requests</Text>
            </View>
            
          ),
        }}
      />
    </Tab.Navigator>
  );
}
