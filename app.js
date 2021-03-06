var express = require('express');
var app = express();
var PORT = 5000;
// Setup express here...


// Setup social-login
var socialLoginClass = require("./social-login");

// Init
var socialLogin = new socialLoginClass({
    app: app, // ExpressJS instance
    url: 'http://127.0.0.1:5000', // Your root url
    onAuth: function(req, type, uniqueProperty, accessToken, refreshToken, profile, done) {
        // This is the centralized method that is called when the user is logged in using any of the supported social site.
        // Setup once and you're done.
        console.log({ "type": type, "uniqueProperty": uniqueProperty, "accessToken": accessToken, "refreshToken": refreshToken, "profile": profile, "done": done });
        /*
        findOrCreate({
		profile: profile,			// Profile is the user's profile, already filtered to return only the parts that matter (no HTTP response code and that kind of useless data)
		property: uniqueProperty,	// What property in the data is unique: id, ID, name, ...
		type: type					// What type of login that is: facebook, foursquare, google, ...
		}, function(user) {
			done(null, user);		// Return the user and continue
		});
		*/
    }
});

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});

// Setup the various services:
socialLogin.use({
    facebook: {
        settings: {
            clientID: "416627365204601",
            clientSecret: "b7ffe8f1bc5e5fa166f40e49309c6f2d",
            authParameters: {
                scope: 'read_stream,manage_pages'
            }
        },
        url: {
            auth: "/auth/facebook", // The URL to use to login (<a href="/auth/facebook">Login with facebook</a>).
            callback: "/auth/facebook/callback", // The Oauth callback url as specified in your facebook app's settings
            success: '/', // Where to redirect the user once he's logged in
            fail: '/auth/facebook/fail' // Where to redirect the user if the login failed or was canceled.
        }
    },
    twitter: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/twitter",
            callback: "/auth/twitter/callback",
            success: '/',
            fail: '/auth/twitter/fail'
        }
    },
    instagram: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/instagram",
            callback: "/auth/instagram/callback",
            success: '/',
            fail: '/auth/instagram/fail'
        }
    },
    github: {
        settings: {
            clientID: "dcba6a0e918721d8951a",
            clientSecret: "025608248dd8e68088f86cde324eb25c2c302f28"
        },
        url: {
            auth: "/auth/github",
            callback: "/auth/github/callback",
            success: '/',
            fail: '/auth/github/fail'
        }
    },
    linkedin: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET",
            authParameters: {
                scope: ['r_basicprofile', 'r_emailaddress', 'r_fullprofile', 'r_contactinfo', 'r_network', 'rw_nus']
            }
        },
        url: {
            auth: "/auth/linkedin",
            callback: "/auth/linkedin/callback",
            success: '/',
            fail: '/auth/linkedin/fail'
        }
    },
    google: {
        settings: {
            clientID: "719657010609-b2m8lo7ltgiv4tniror7d1ks25h95mru.apps.googleusercontent.com",
            clientSecret: "xBhAV-yRp7lXdFZjiVg2oePU",
            authParameters: {
                scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
            }
        }, // Google doesn't take any API key or API secret
        url: {
            auth: "/auth/google",
            callback: "/auth/google/callback",
            success: '/',
            fail: '/auth/google/fail'
        }
    },
    amazon: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET",
            authParameters: {
                scope: ['profile', 'postal_code']
            }
        },
        url: {
            auth: "/auth/amazon",
            callback: "/auth/amazon/callback",
            success: '/',
            fail: '/auth/amazon/fail'
        }
    },
    dropbox: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/dropbox",
            callback: "/auth/dropbox/callback",
            success: '/',
            fail: '/auth/dropbox/fail'
        }
    },
    foursquare: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/foursquare",
            callback: "/auth/foursquare/callback",
            success: '/',
            fail: '/auth/foursquare/fail'
        }
    },
    imgur: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/imgur",
            callback: "/auth/imgur/callback",
            success: '/',
            fail: '/auth/imgur/fail'
        }
    },
    meetup: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/meetup",
            callback: "/auth/meetup/callback",
            success: '/',
            fail: '/auth/meetup/fail'
        }
    },
    // http://developer.wordpress.com/docs/oauth2/
    wordpress: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/wordpress",
            callback: "/auth/wordpress/callback",
            success: '/',
            fail: '/auth/wordpress/fail'
        }
    },
    tumblr: {
        settings: {
            clientID: "YOUR_API_KEY",
            clientSecret: "YOUR_API_SECRET"
        },
        url: {
            auth: "/auth/tumblr",
            callback: "/auth/tumblr/callback",
            success: '/',
            fail: '/auth/tumblr/fail'
        }
    }
});