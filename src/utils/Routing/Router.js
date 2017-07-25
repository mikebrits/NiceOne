import {StackNavigator} from 'react-navigation';
import {TabNavigator} from "react-navigation";

/**
 * Make Help Request Views
 */
import MakeHelpRequest from '../../views/MakeHelpRequest';
import PersonaliseRequest from '../../views/PersonaliseRequest';
import FindingOffers from '../../views/FindingOffers';
import ViewAllOffers from '../../views/ViewAllOffers';
import ViewOffer from '../../views/ViewOffer';

const MakeHelpRequestStack = StackNavigator({
        MakeHelpRequest: {screen: MakeHelpRequest},
        PersonaliseRequest: {screen: PersonaliseRequest},
        FindingOffers: {screen: FindingOffers},
        ViewAllOffers: {screen: ViewAllOffers},
        ViewOffer: {screen: ViewOffer},
    },
    {
        headerMode: 'none',
    }
);

/**
 * Active Chat Views
 */
import ActiveChats from '../../views/ActiveChats';
import Chat from '../../views/Chat';
import CameraView from '../../views/CameraView';

const ActiveChatStack = StackNavigator({
    ActiveChats: {screen: ActiveChats},
    Chat: {screen: Chat},
    CameraView: {screen: CameraView},
},
    {
        headerMode: 'none',
    }
);

/**
 * Make Offer Views
 */

import ViewAllHelpRequests from '../../views/ViewAllHelpRequests';
import ViewHelpRequest from '../../views/ViewHelpRequest';
import MakeOffer from '../../views/MakeOffer';
import OfferSentConfirmation from '../../views/OfferSentConfirmation';

const MakeOfferStack = StackNavigator({
    ViewAllHelpRequests: {screen: ViewAllHelpRequests},
    ViewHelpRequest: {screen: ViewHelpRequest},
    MakeOffer: {screen: MakeOffer},
    OfferSentConfirmation: {screen: OfferSentConfirmation},
},
    {
        headerMode: 'none',
    }
);

/**
 * Profile Views
 */

import Profile from '../../views/Profile';
import CompletedHelpRequests from '../../views/ProfileSettings/CompletedHelpRequests';
import CompletedOffers from '../../views/ProfileSettings/CompletedOffers';
import ItemPreferences from '../../views/ProfileSettings/ItemPreferences';
import Reviews from '../../views/ProfileSettings/Reviews';

const ProfileStack = StackNavigator({
    ProfileSettings: {screen: Profile},
    CompletedHelpRequests: {screen: CompletedHelpRequests},
    CompletedOffers: {screen: CompletedOffers},
    ItemPreferences: {screen: ItemPreferences},
    Reviews: {screen: Reviews},
},
    {
        headerMode: 'none',
    }
);

import Login from '../../views/Auth/Login';

const AuthLoginStack = StackNavigator({
    Login: {screen: Login}
})

const MainScreenNavigator = TabNavigator({
    Ask: {screen: MakeHelpRequestStack},
    Auth: {screen: AuthLoginStack},
    Active: {screen: ActiveChatStack},
    Help: {screen: MakeOfferStack},
    Profile: {screen: ProfileStack},
});


export default MainScreenNavigator;