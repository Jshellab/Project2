
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { initProfile, getCurrentUserInfo, updateProfile } from '../actions/index'
import { 
    Button, 
    Avatar, 
    FormLabel, 
    FormInput, 
    FormValidationMessage, 
    Spinner 
} from '../components/index';

class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: 'Profile',
            headerLeft: (
                <Button 
                    containerViewStyle={{marginLeft: 0, marginRight: 0}}
                    buttonStyle={{paddingLeft: 14}}
                    icon={{ name: 'chevron-left', type: 'font-awesome', color: '#7d62d9', size: 18 }}
                    backgroundColor='transparent'
                    onPress={ () => navigation.goBack() }
                />
            ),
            headerRight: (
                <Button 
                    containerViewStyle={{marginLeft: 0, marginRight: 0}}
                    buttonStyle={{paddingRight: 14}}
                    color={'#7d62d9'}
                    title='save'
                    backgroundColor='transparent'
                    onPress={ () => { params.handleSave() } }
                />
            )
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            profileUrl: '',
            nickname: ''
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleSave: this._onSaveButtonPress })
        this.props.initProfile();
        this.setState({ isLoading: true }, () => {
            this.props.getCurrentUserInfo();
        });
    }

    componentWillReceiveProps(props) {
        const { userInfo, isSaved } = props;
        if (userInfo) {
            const { profileUrl, nickname } = userInfo;
            const isLoading = false;
            this.setState({ profileUrl, nickname, isLoading });
        }
        if (isSaved) {
            this.props.navigation.goBack();
        }
    }

    _onNicknameChanged = (nickname) => {
        this.setState({ nickname });
    }

    _onSaveButtonPress = () => {
        this.props.updateProfile(this.state.nickname);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Spinner visible={this.state.isLoading} />
                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 50, marginBottom: 50}}>
                    <Avatar 
                        large
                        rounded
                        source={this.state.profileUrl ? {uri: this.state.profileUrl} : require('../img/icon_sb_68.png')}
                    />
                </View>

                <FormLabel labelStyle={[styles.defaultMargin, {marginTop: 20, fontSize: 13, fontWeight: '400'}]}>
                    Nickname
                </FormLabel>
                <FormInput 
                    containerStyle={styles.defaultMargin}
                    selectionColor = { '#000' }
                    inputStyle={{color: '#000'}}
                    value={this.state.nickname}
                    maxLength={12}
                    onChangeText={this._onNicknameChanged} 
                />
                <FormValidationMessage labelStyle={{marginLeft: 14}}>
                    {this.props.error}
                </FormValidationMessage>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#fff', 
        flex: 1
    },
    defaultMargin: {
        marginLeft: 14, 
        marginRight: 14
    }
};

function mapStateToProps({ profile }) {
    const { userInfo, error, isSaved } = profile;
    return { userInfo, error, isSaved };
};

export default connect(
    mapStateToProps, 
    { initProfile, getCurrentUserInfo, updateProfile }
)(Profile);
