import React, {Component} from 'react';
import './App.css';
import './foundation-6.4.2-complete/css/foundation.css';
import {auth, database} from './firebase';
import Authentication from './Authentication';
import CurrentUser from './CurrentUser';
import MailRegistration from './MailRegistration';
import MailList from './MailList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            mails: null
        };

        this.mailsRef = database.ref('/mails');
    }

    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            console.log('login', currentUser);
            this.setState({currentUser});

            this.mailsRef.on('value', (snapshot) => {
                this.setState({
                    mails: snapshot.val()
                });
            });
        });


    }

    render() {
        const {currentUser} = this.state;
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <span className="menu-text">Site Title</span>
                    </div>
                    <div className="top-bar-right">

                    </div>
                </div>
                <div className="grid-container">
                    {!currentUser && <Authentication/>  }
                    {currentUser &&

                    <div>
                        <CurrentUser user={currentUser}/>
                        <MailRegistration />
                        <MailList />
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;
