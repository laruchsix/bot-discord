require("./index.css");
var $7eYBt$reactjsxruntime = require("react/jsx-runtime");
var $7eYBt$react = require("react");
var $7eYBt$reactdom = require("react-dom");
var $7eYBt$swchelperslib_sliced_to_arrayjs = require("@swc/helpers/lib/_sliced_to_array.js");
var $7eYBt$reactrouterdom = require("react-router-dom");
var $7eYBt$swchelperslib_object_spreadjs = require("@swc/helpers/lib/_object_spread.js");
var $7eYBt$swchelperslib_object_without_propertiesjs = require("@swc/helpers/lib/_object_without_properties.js");
var $7eYBt$reactselect = require("react-select");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}














var $73e1123f3c233ee8$var$Login = function(param) {
    var updateToken = param.updateToken, token = param.token, title = param.title, updateTitle = param.updateTitle;
    (0, $7eYBt$react.useEffect)(function() {
        if (title !== "Login") updateTitle("Login");
    }, [
        title
    ]);
    var ref = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), name = ref[0], setName = ref[1];
    var ref1 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), password = ref1[0], setPassword = ref1[1];
    var ref2 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), errorMessage = ref2[0], setErrorMessage = ref2[1];
    var navigate = (0, $7eYBt$reactrouterdom.useNavigate)();
    var validate = function(e) {
        e.preventDefault();
        var body = JSON.stringify({
            "username": name,
            "password": password
        });
        var options = {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        fetch("api/login", options).then(function(response) {
            return response.json();
        }).then(function(data1) {
            if (data1.error) setErrorMessage(data1.error);
            else fetch("/api/cookie").then(function(response) {
                return response.json();
            }).then(function(data) {
                updateToken(data.token);
                navigate("/");
            });
        });
    };
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
        className: "center-content",
        children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("form", {
            className: "login-panel ",
            onSubmit: function(e) {
                return validate(e);
            },
            children: [
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h2", {
                    className: "page-h2 login-segment",
                    children: "Email :"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("input", {
                    className: "basic-input",
                    type: "text",
                    value: name,
                    onChange: function(e) {
                        return setName(e.currentTarget.value);
                    }
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h2", {
                    className: "page-h2 login-segment",
                    children: "Password :"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("input", {
                    className: "basic-input",
                    type: "password",
                    value: password,
                    onChange: function(e) {
                        return setPassword(e.currentTarget.value);
                    }
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                    children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("p", {
                        className: "error-message",
                        children: errorMessage
                    })
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                    className: "center-content",
                    children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("button", {
                        className: "page-button medium-button login-button",
                        children: "Login"
                    })
                })
            ]
        })
    });
};
var $73e1123f3c233ee8$export$2e2bcd8739ae039 = $73e1123f3c233ee8$var$Login;




var $f7b051e23e2d6d43$var$MenuButton = function(props) {
    var onClick = props.onClick; // onClick is a function
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
        className: "menu-button-container",
        onClick: onClick,
        children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("div", {
            className: "menu-button",
            children: [
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                    className: "menu-button-item1"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                    className: "menu-button-item2"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                    className: "menu-button-item3"
                })
            ]
        })
    });
};
var $f7b051e23e2d6d43$export$2e2bcd8739ae039 = $f7b051e23e2d6d43$var$MenuButton;














var $29290c7e21fef94d$var$MySelector = function(_param) {
    var service = _param.service, updateObjet = _param.updateObjet, _isMulti = _param.isMulti, isMulti = _isMulti === void 0 ? false : _isMulti, _isDisabled = _param.isDisabled, isDisabled = _isDisabled === void 0 ? false : _isDisabled, object = _param.object, _refresh = _param.refresh, refresh = _refresh === void 0 ? true : _refresh, className = _param.className, rest = (0, ($parcel$interopDefault($7eYBt$swchelperslib_object_without_propertiesjs)))(_param, [
        "service",
        "updateObjet",
        "isMulti",
        "isDisabled",
        "object",
        "refresh",
        "className"
    ]);
    var ref = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)({
        data: {},
        loading: true
    }), 2), apiResponse = ref[0], setApiResponse = ref[1];
    (0, $7eYBt$react.useEffect)(function() {
        fetch(service).then(function(res) {
            return res.json();
        }).then(function(data) {
            if (refresh) {
                if (apiResponse !== data) updateObjet("");
            }
            //console.log(data);
            setApiResponse({
                data: data,
                loading: false
            });
        });
    }, [
        service
    ]);
    /**
     * When the user changes the value of the input, update the state of the component with the new
     * value.
     */ var handleChange = function(event) {
        var value = event;
        updateObjet(value);
    };
    /* A ternary operator. If the apiResponse.loading is true, it will return the first part of the
    ternary operator. If it is false, it will return the second part of the ternary operator. */ if (apiResponse.loading) return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("p", {
        children: "LOADING ..."
    });
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactjsxruntime.Fragment), {
        children: isMulti ? /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, ($parcel$interopDefault($7eYBt$reactselect))), (0, ($parcel$interopDefault($7eYBt$swchelperslib_object_spreadjs)))({
            isMulti: true,
            onChange: handleChange,
            value: object,
            options: apiResponse.data,
            style: {
                width: "max-content"
            },
            isDisabled: isDisabled
        }, rest)) : /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, ($parcel$interopDefault($7eYBt$reactselect))), (0, ($parcel$interopDefault($7eYBt$swchelperslib_object_spreadjs)))({
            onChange: handleChange,
            value: object,
            options: apiResponse.data,
            style: {
                width: "max-content"
            },
            isDisabled: isDisabled,
            isClearable: true
        }, rest))
    });
};
var $29290c7e21fef94d$export$2e2bcd8739ae039 = $29290c7e21fef94d$var$MySelector;



var $986090e90ccdd232$var$DSChoser = function(param) {
    var serverChoosed = param.serverChoosed, updateServerChoosed = param.updateServerChoosed;
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
        className: "selecter-container",
        children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $29290c7e21fef94d$export$2e2bcd8739ae039), {
            service: "/api/user/discordserver/",
            object: serverChoosed,
            updateObjet: updateServerChoosed
        })
    });
};
var $986090e90ccdd232$export$2e2bcd8739ae039 = $986090e90ccdd232$var$DSChoser;





var $df58fb31e3d9549f$var$DetectorTable = function(param) {
    var serverChoosed = param.serverChoosed, getDetectors = param.getDetectors, detectors = param.detectors;
    var deleteDetector = function(id) {
        fetch("/api/user/detector/" + id, {
            method: "DELETE"
        }).then(function(res) {
            if (res.status === 200) getDetectors();
        });
    };
    // display the table
    var displayTable = function() {
        if (serverChoosed && detectors) return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("table", {
            className: "detector-table",
            children: [
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("thead", {
                    children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("th", {
                                children: "Is Mutli"
                            }),
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("th", {
                                children: "Word"
                            }),
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("th", {
                                children: "Probability"
                            }),
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("th", {
                                children: "Response Type"
                            }),
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("th", {
                                children: "Response"
                            }),
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("th", {
                                children: "Delete"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("tbody", {
                    children: detectors.map(function(detector) {
                        return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("td", {
                                    children: detector.isMulti
                                }),
                                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("td", {
                                    children: detector.word
                                }),
                                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("td", {
                                    children: detector.probability
                                }),
                                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("td", {
                                    children: detector.responseType
                                }),
                                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("td", {
                                    children: detector.response
                                }),
                                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("td", {
                                    children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("button", {
                                        onClick: function() {
                                            return deleteDetector(detector.id);
                                        },
                                        children: "Delete"
                                    })
                                })
                            ]
                        }, detector.id);
                    })
                })
            ]
        });
        else return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("p", {
            children: "You have to chose a server"
        });
    };
    // render component
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("div", {
        className: "detector-table",
        children: [
            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h1", {
                children: "detector-table"
            }),
            displayTable()
        ]
    });
};
var $df58fb31e3d9549f$export$2e2bcd8739ae039 = $df58fb31e3d9549f$var$DetectorTable;









var $f342fb9e828f4383$var$DetectorFrom = function(param) {
    var serverChoosed = param.serverChoosed, getDetectors = param.getDetectors, updateToken = param.updateToken;
    var navigate = (0, $7eYBt$reactrouterdom.useNavigate)();
    var ref = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), errorMessage = ref[0], setErrorMessage = ref[1];
    // form attributs
    var ref1 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(false), 2), isMulti = ref1[0], setIsMulti = ref1[1];
    var ref2 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), wordDetected = ref2[0], setWordDetected = ref2[1];
    var ref3 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), response1 = ref3[0], setResponse = ref3[1];
    var ref4 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), responseType = ref4[0], setResponseType = ref4[1];
    // TODO add probability
    // reponseType options
    var responseTypeOptions = [
        {
            value: "react",
            label: "react"
        },
        {
            value: "awnser",
            label: "awnser"
        }
    ];
    /**
     * function to submit the detector into the database
     * @param e the event
     */ var addDetector = function(e) {
        e.preventDefault();
        if (!wordDetected || !response1 || !responseType) {
            setErrorMessage("Please fill all the fields");
            return;
        } else {
            setErrorMessage("");
            var body = JSON.stringify({
                dsId: serverChoosed.value,
                isMulti: isMulti,
                word: wordDetected,
                response: response1,
                responseType: responseType.value,
                probability: 100
            });
            //console.log(body);
            fetch("api/user/detector", {
                method: "POST",
                body: body,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then(function(response) {
                switch(response.status){
                    case 401:
                        updateToken();
                        navigate("/");
                        break;
                    case 400:
                        return response.json();
                    default:
                        setErrorMessage("");
                        getDetectors();
                }
            }).then(function(response) {
                if (response === null || response === void 0 ? void 0 : response.errorMessage) setErrorMessage(response.errorMessage);
            });
        }
    };
    /**
     * display a form to add a detector is the server is selected
     * @returns {JSX.Element|null} the form to add a detector line or null elem
     */ var displayForm = function() {
        if (serverChoosed) return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("form", {
            className: "add-detector",
            onSubmit: function(e) {
                return addDetector(e);
            },
            children: [
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h1", {
                    className: "page-h1",
                    children: "Add a detector option"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h2", {
                    className: "page-h2",
                    children: "Is multi detection ?"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("input", {
                    type: "checkbox",
                    value: isMulti,
                    onChange: function(e) {
                        return setIsMulti(e.currentTarget.value);
                    }
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h2", {
                    className: "page-h2",
                    children: "Main word:"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("input", {
                    className: "basic-input",
                    type: "text",
                    value: wordDetected,
                    onChange: function(e) {
                        return setWordDetected(e.currentTarget.value);
                    }
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h2", {
                    className: "page-h2",
                    children: "Response Type:"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, ($parcel$interopDefault($7eYBt$reactselect))), {
                    className: "basic-input",
                    value: responseType,
                    options: responseTypeOptions,
                    onChange: setResponseType
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h2", {
                    className: "page-h2",
                    children: "Response :"
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("input", {
                    className: "basic-input",
                    type: "text",
                    value: response1,
                    onChange: function(e) {
                        return setResponse(e.currentTarget.value);
                    }
                }),
                errorMessage && /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("p", {
                    className: "error-message",
                    children: errorMessage
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("button", {
                    className: "page-button medium-button",
                    children: "Add"
                })
            ]
        });
        else return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactjsxruntime.Fragment), {});
    };
    // render component
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
        className: "detector-form",
        children: displayForm()
    });
};
var $f342fb9e828f4383$export$2e2bcd8739ae039 = $f342fb9e828f4383$var$DetectorFrom;


var $e7088aa6e0da0550$var$Detector = function(param) {
    var updateToken = param.updateToken, token = param.token, title = param.title, updateTitle = param.updateTitle;
    var navigate = (0, $7eYBt$reactrouterdom.useNavigate)();
    // verify the token and redirect to the home page if it is not valid
    (0, $7eYBt$react.useEffect)(function() {
        if (!token) navigate("/login");
    }, []);
    // change the title of the page
    (0, $7eYBt$react.useEffect)(function() {
        if (title !== "Detector") updateTitle("Detector");
    }, [
        title
    ]);
    var ref = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)(""), 2), serverChoosed = ref[0], setServerChoosed = ref[1];
    var ref1 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)([]), 2), detectors = ref1[0], setDetectors = ref1[1];
    var getDetectors = function() {
        if (serverChoosed) fetch("api/user/detector/" + serverChoosed.value).then(function(response) {
            return response.json();
        }).then(function(response) {
            console.log(response);
            setDetectors(response);
        });
    };
    var updateServerChoosed = function(server) {
        if (server !== serverChoosed) setServerChoosed(server);
    };
    (0, $7eYBt$react.useEffect)(function() {
        getDetectors();
    }, [
        serverChoosed
    ]);
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("div", {
        className: "detector-container",
        children: [
            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $986090e90ccdd232$export$2e2bcd8739ae039), {
                serverChoosed: serverChoosed,
                updateServerChoosed: updateServerChoosed
            }),
            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $df58fb31e3d9549f$export$2e2bcd8739ae039), {
                serverChoosed: serverChoosed,
                getDetectors: getDetectors,
                detectors: detectors
            }),
            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $f342fb9e828f4383$export$2e2bcd8739ae039), {
                serverChoosed: serverChoosed,
                getDetectors: getDetectors,
                updateToken: updateToken
            })
        ]
    });
};
var $e7088aa6e0da0550$export$2e2bcd8739ae039 = $e7088aa6e0da0550$var$Detector;


var $f3cb3180aaa5d6d8$var$Menu = function() {
    var ref = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)("initial"), 2), token = ref[0], setToken = ref[1];
    var ref1 = (0, ($parcel$interopDefault($7eYBt$swchelperslib_sliced_to_arrayjs)))((0, $7eYBt$react.useState)("Home"), 2), titlePage = ref1[0], setTitlePage = ref1[1];
    (0, $7eYBt$react.useEffect)(function() {
        fetch("/api/cookie").then(function(response) {
            return response.json();
        }).then(function(data) {
            setToken(data.token);
        });
    }, []);
    var updateToken = function(value) {
        setToken(value);
    };
    var updateTitlePage = function(value) {
        setTitlePage(value);
    };
    var userElems = function() {
        if (!token || token === "initial") return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.NavLink), {
            className: "nav-button",
            to: "/login",
            children: " Login "
        });
        else return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)((0, $7eYBt$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h1", {
                    className: "user-name",
                    children: token.username
                }),
                /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("button", {
                    className: "nav-button",
                    onClick: logout,
                    children: "Logout"
                })
            ]
        });
    /*return (
               <>
                   <h1 className={"user-name"}>{token.name}</h1>
                <button className={"nav-button"} onClick={logout}>Logout</button>

                <div className={"user-container"}>
                    <Link  className={"nav-button"} to="/profile">
                        <img
                            className={"user-img"}
                            src="/basic_user_image.png"
                            alt="User Image"/>
                    </Link>
                </div> 
            </>)*/ };
    var logout = function() {
        var options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        fetch("/api/logout", options).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.message);
            setToken();
        });
    };
    var pressMenu = function() {
        console.log("pressMenu");
    };
    return /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)((0, $7eYBt$reactrouterdom.BrowserRouter), {
        children: [
            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $f7b051e23e2d6d43$export$2e2bcd8739ae039), {
                        onClick: pressMenu
                    }),
                    /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                        className: "title-container",
                        children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h1", {
                            className: "title",
                            children: titlePage
                        })
                    }),
                    /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                        className: "user-info",
                        children: userElems()
                    })
                ]
            }),
            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("div", {
                className: "center-container",
                children: [
                    /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("aside", {
                        children: [
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.NavLink), {
                                className: "nav-link",
                                to: "/",
                                children: "Home"
                            }),
                            (token === null || token === void 0 ? void 0 : token.username) && /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.NavLink), {
                                className: "nav-link",
                                to: "/detector",
                                children: "Detector"
                            }),
                            (token === null || token === void 0 ? void 0 : token.isAdmin) && /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.NavLink), {
                                className: "nav-link",
                                to: "/manage",
                                children: "Manage User"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)("div", {
                        className: "center-right-container",
                        children: [
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                                className: "page-content",
                                children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsxs)((0, $7eYBt$reactrouterdom.Routes), {
                                    children: [
                                        /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.Route), {
                                            path: "/profile",
                                            element: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h1", {
                                                children: "Profile"
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.Route), {
                                            path: "/login",
                                            element: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $73e1123f3c233ee8$export$2e2bcd8739ae039), {
                                                token: token,
                                                updateToken: updateToken,
                                                title: titlePage,
                                                updateTitle: updateTitlePage
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.Route), {
                                            path: "/detector",
                                            element: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $e7088aa6e0da0550$export$2e2bcd8739ae039), {
                                                token: token,
                                                updateToken: updateToken,
                                                title: titlePage,
                                                updateTitle: updateTitlePage
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $7eYBt$reactrouterdom.Route), {
                                            path: "/",
                                            element: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("h1", {
                                                children: "Home"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("footer", {
                                children: /*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)("div", {
                                    className: "copyright-content",
                                    children: "\xa9Thibault Rucher"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $f3cb3180aaa5d6d8$export$2e2bcd8739ae039 = $f3cb3180aaa5d6d8$var$Menu;


(0, ($parcel$interopDefault($7eYBt$reactdom))).render(/*#__PURE__*/ (0, $7eYBt$reactjsxruntime.jsx)((0, $f3cb3180aaa5d6d8$export$2e2bcd8739ae039), {}), document.getElementById("root"));


//# sourceMappingURL=index.js.map
