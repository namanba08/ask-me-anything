"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/(app)/dashboard/page.tsx":
/*!******************************************!*\
  !*** ./src/app/(app)/dashboard/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_MessageCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MessageCard */ \"(app-pages-browser)/./src/components/MessageCard.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/separator */ \"(app-pages-browser)/./src/components/ui/separator.tsx\");\n/* harmony import */ var _components_ui_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/switch */ \"(app-pages-browser)/./src/components/ui/switch.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Loader2_RefreshCcw_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,RefreshCcw!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-2.js\");\n/* harmony import */ var _barrel_optimize_names_Loader2_RefreshCcw_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,RefreshCcw!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/refresh-ccw.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _schemas_acceptMessageSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/schemas/acceptMessageSchema */ \"(app-pages-browser)/./src/schemas/acceptMessageSchema.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction UserDashboard() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [isSwitchLoading, setIsSwitchLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const handleDeleteMessage = (messageId)=>{\n        setMessages(messages.filter((message)=>message._id !== messageId));\n    };\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__.zodResolver)(_schemas_acceptMessageSchema__WEBPACK_IMPORTED_MODULE_9__.AcceptMessageSchema)\n    });\n    const { register, watch, setValue } = form;\n    const acceptMessages = watch(\"acceptMessages\");\n    const fetchAcceptMessages = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(async ()=>{\n        setIsSwitchLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"/api/accept-messages\");\n            setValue(\"acceptMessages\", response.data.isAcceptingMessages);\n        } catch (error) {\n            var _axiosError_response;\n            const axiosError = error;\n            var _axiosError_response_data_message;\n            toast({\n                title: \"Error\",\n                description: (_axiosError_response_data_message = (_axiosError_response = axiosError.response) === null || _axiosError_response === void 0 ? void 0 : _axiosError_response.data.message) !== null && _axiosError_response_data_message !== void 0 ? _axiosError_response_data_message : \"Failed to fetch message settings\",\n                variant: \"destructive\"\n            });\n        } finally{\n            setIsSwitchLoading(false);\n        }\n    }, [\n        setValue,\n        toast\n    ]);\n    const fetchMessages = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(async function() {\n        let refresh = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        setIsLoading(true);\n        setIsSwitchLoading(false);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"/api/get-messages\");\n            setMessages(response.data.messages || []);\n            if (refresh) {\n                toast({\n                    title: \"Refreshed Messages\",\n                    description: \"Showing latest messages\"\n                });\n            }\n        } catch (error) {\n            var _axiosError_response;\n            const axiosError = error;\n            var _axiosError_response_data_message;\n            toast({\n                title: \"Error\",\n                description: (_axiosError_response_data_message = (_axiosError_response = axiosError.response) === null || _axiosError_response === void 0 ? void 0 : _axiosError_response.data.message) !== null && _axiosError_response_data_message !== void 0 ? _axiosError_response_data_message : \"Failed to fetch messages\",\n                variant: \"destructive\"\n            });\n        } finally{\n            setIsLoading(false);\n            setIsSwitchLoading(false);\n        }\n    }, [\n        setIsLoading,\n        setMessages,\n        toast\n    ]);\n    // Fetch initial state from the server\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        if (!session || !session.user) return;\n        fetchMessages();\n        fetchAcceptMessages();\n    }, [\n        session,\n        setValue,\n        toast,\n        fetchAcceptMessages,\n        fetchMessages\n    ]);\n    // Handle switch change\n    const handleSwitchChange = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(\"/api/accept-messages\", {\n                acceptMessages: !acceptMessages\n            });\n            setValue(\"acceptMessages\", !acceptMessages);\n            toast({\n                title: response.data.message,\n                variant: \"default\"\n            });\n        } catch (error) {\n            var _axiosError_response;\n            const axiosError = error;\n            var _axiosError_response_data_message;\n            toast({\n                title: \"Error\",\n                description: (_axiosError_response_data_message = (_axiosError_response = axiosError.response) === null || _axiosError_response === void 0 ? void 0 : _axiosError_response.data.message) !== null && _axiosError_response_data_message !== void 0 ? _axiosError_response_data_message : \"Failed to update message settings\",\n                variant: \"destructive\"\n            });\n        }\n    };\n    if (!session || !session.user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n            lineNumber: 120,\n            columnNumber: 12\n        }, this);\n    }\n    const { username } = session.user;\n    const baseUrl = \"\".concat(window.location.protocol, \"//\").concat(window.location.host);\n    const profileUrl = \"\".concat(baseUrl, \"/u/\").concat(username);\n    const copyToClipboard = ()=>{\n        navigator.clipboard.writeText(profileUrl);\n        toast({\n            title: \"URL Copied!\",\n            description: \"Profile URL has been copied to clipboard.\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-[##98AEC7] rounded w-full max-w-6xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"User Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold mb-2\",\n                        children: \"Copy Your Unique Link\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: profileUrl,\n                                disabled: true,\n                                className: \"input input-bordered w-full p-2 mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: copyToClipboard,\n                                children: \"Copy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_switch__WEBPACK_IMPORTED_MODULE_4__.Switch, {\n                        ...register(\"acceptMessages\"),\n                        checked: acceptMessages,\n                        onCheckedChange: handleSwitchChange,\n                        disabled: isSwitchLoading\n                    }, void 0, false, {\n                        fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-2\",\n                        children: [\n                            \"Accept Messages: \",\n                            acceptMessages ? \"On\" : \"Off\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_3__.Separator, {}, void 0, false, {\n                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: \"mt-4\",\n                variant: \"outline\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    fetchMessages(true);\n                },\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_RefreshCcw_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    className: \"h-4 w-4 animate-spin\"\n                }, void 0, false, {\n                    fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                    lineNumber: 175,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_RefreshCcw_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    className: \"h-4 w-4\"\n                }, void 0, false, {\n                    fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                    lineNumber: 177,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 grid grid-cols-1 md:grid-cols-2 gap-6\",\n                children: messages.length > 0 ? messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MessageCard__WEBPACK_IMPORTED_MODULE_1__.MessageCard, {\n                        message: message,\n                        onMessageDelete: handleDeleteMessage\n                    }, message._id, false, {\n                        fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 13\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No messages to display.\"\n                }, void 0, false, {\n                    fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                    lineNumber: 190,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naman/Downloads/ama-app/src/app/(app)/dashboard/page.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n}\n_s(UserDashboard, \"Z2aa59qtzC7+XA9QDssM2VJXuZs=\", false, function() {\n    return [\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm\n    ];\n});\n_c = UserDashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserDashboard);\nvar _c;\n$RefreshReg$(_c, \"UserDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGFwcCkvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdUQ7QUFDUDtBQUNNO0FBQ047QUFDSztBQUdDO0FBQ1o7QUFDUztBQUVOO0FBQ21CO0FBQ3RCO0FBQzBCO0FBRXBFLFNBQVNnQjs7SUFDUCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNLEVBQUVVLEtBQUssRUFBRSxHQUFHbkIsa0VBQVFBO0lBRTFCLE1BQU1vQixzQkFBc0IsQ0FBQ0M7UUFDM0JQLFlBQVlELFNBQVNTLE1BQU0sQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxHQUFHLEtBQUtIO0lBQzNEO0lBRUEsTUFBTSxFQUFFSSxNQUFNQyxPQUFPLEVBQUUsR0FBR3JCLDJEQUFVQTtJQUVwQyxNQUFNc0IsT0FBT2pCLHlEQUFPQSxDQUFDO1FBQ25Ca0IsVUFBVTNCLG9FQUFXQSxDQUFDVSw2RUFBbUJBO0lBQzNDO0lBRUEsTUFBTSxFQUFFa0IsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSjtJQUN0QyxNQUFNSyxpQkFBaUJGLE1BQU07SUFFN0IsTUFBTUcsc0JBQXNCMUIsa0RBQVdBLENBQUM7UUFDdENXLG1CQUFtQjtRQUNuQixJQUFJO1lBQ0YsTUFBTWdCLFdBQVcsTUFBTWhDLDhDQUFLQSxDQUFDaUMsR0FBRyxDQUFjO1lBQzlDSixTQUFTLGtCQUFrQkcsU0FBU1QsSUFBSSxDQUFDVyxtQkFBbUI7UUFDOUQsRUFBRSxPQUFPQyxPQUFPO2dCQUtWQztZQUpKLE1BQU1BLGFBQWFEO2dCQUlmQztZQUhKbkIsTUFBTTtnQkFDSm9CLE9BQU87Z0JBQ1BDLGFB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T1Y7Z0NBQ1BXLFFBQVE7Z0NBQ1JOLFdBQVU7Ozs7OzswQ0FFWiw4REFBQzlELHlEQUFNQTtnQ0FBQ3FFLFNBQVNYOzBDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qyw4REFBQ1I7Z0JBQUlZLFdBQVU7O2tDQUNiLDhEQUFDNUQseURBQU1BO3dCQUNKLEdBQUc4QixTQUFTLGlCQUFpQjt3QkFDOUJzQyxTQUFTbkM7d0JBQ1RvQyxpQkFBaUJ2Qjt3QkFDakJvQixVQUFVaEQ7Ozs7OztrQ0FFWiw4REFBQ29EO3dCQUFLVixXQUFVOzs0QkFBTzs0QkFDSDNCLGlCQUFpQixPQUFPOzs7Ozs7Ozs7Ozs7OzBCQUc5Qyw4REFBQ2xDLCtEQUFTQTs7Ozs7MEJBRVYsOERBQUNELHlEQUFNQTtnQkFDTDhELFdBQVU7Z0JBQ1ZsQixTQUFRO2dCQUNSeUIsU0FBUyxDQUFDSTtvQkFDUkEsRUFBRUMsY0FBYztvQkFDaEI3QixjQUFjO2dCQUNoQjswQkFFQzNCLDBCQUNDLDhEQUFDWiwrRkFBT0E7b0JBQUN3RCxXQUFVOzs7Ozt5Q0FFbkIsOERBQUN2RCwrRkFBVUE7b0JBQUN1RCxXQUFVOzs7Ozs7Ozs7OzswQkFHMUIsOERBQUNaO2dCQUFJWSxXQUFVOzBCQUNaOUMsU0FBUzJELE1BQU0sR0FBRyxJQUNqQjNELFNBQVM0RCxHQUFHLENBQUMsQ0FBQ2xELFNBQVNtRCxzQkFDckIsOERBQUM5RSxnRUFBV0E7d0JBRVYyQixTQUFTQTt3QkFDVG9ELGlCQUFpQnZEO3VCQUZaRyxRQUFRQyxHQUFHOzs7OzhDQU1wQiw4REFBQ29EOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBaExTaEU7O1FBS1daLDhEQUFRQTtRQU1BSyx1REFBVUE7UUFFdkJLLHFEQUFPQTs7O0tBYmJFO0FBa0xULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGFwcCkvZGFzaGJvYXJkL3BhZ2UudHN4PzVkZWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBNZXNzYWdlQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9NZXNzYWdlQ2FyZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9zZXBhcmF0b3InO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3N3aXRjaCc7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS91c2UtdG9hc3QnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ0AvbW9kZWwvVXNlcic7XG5pbXBvcnQgeyBBcGlSZXNwb25zZSB9IGZyb20gJ0AvdHlwZXMvQXBpUmVzcG9uc2UnO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IExvYWRlcjIsIFJlZnJlc2hDY3cgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgQWNjZXB0TWVzc2FnZVNjaGVtYSB9IGZyb20gJ0Avc2NoZW1hcy9hY2NlcHRNZXNzYWdlU2NoZW1hJztcblxuZnVuY3Rpb24gVXNlckRhc2hib2FyZCgpIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU3dpdGNoTG9hZGluZywgc2V0SXNTd2l0Y2hMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU1lc3NhZ2UgPSAobWVzc2FnZUlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRNZXNzYWdlcyhtZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IG1lc3NhZ2UuX2lkICE9PSBtZXNzYWdlSWQpKTtcbiAgfTtcblxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKEFjY2VwdE1lc3NhZ2VTY2hlbWEpLFxuICB9KTtcblxuICBjb25zdCB7IHJlZ2lzdGVyLCB3YXRjaCwgc2V0VmFsdWUgfSA9IGZvcm07XG4gIGNvbnN0IGFjY2VwdE1lc3NhZ2VzID0gd2F0Y2goJ2FjY2VwdE1lc3NhZ2VzJyk7XG5cbiAgY29uc3QgZmV0Y2hBY2NlcHRNZXNzYWdlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRJc1N3aXRjaExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PEFwaVJlc3BvbnNlPignL2FwaS9hY2NlcHQtbWVzc2FnZXMnKTtcbiAgICAgIHNldFZhbHVlKCdhY2NlcHRNZXNzYWdlcycsIHJlc3BvbnNlLmRhdGEuaXNBY2NlcHRpbmdNZXNzYWdlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yPEFwaVJlc3BvbnNlPjtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdFcnJvcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIGF4aW9zRXJyb3IucmVzcG9uc2U/LmRhdGEubWVzc2FnZSA/P1xuICAgICAgICAgICdGYWlsZWQgdG8gZmV0Y2ggbWVzc2FnZSBzZXR0aW5ncycsXG4gICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICB9KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNTd2l0Y2hMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZXRWYWx1ZSwgdG9hc3RdKTtcblxuICBjb25zdCBmZXRjaE1lc3NhZ2VzID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0SXNTd2l0Y2hMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PEFwaVJlc3BvbnNlPignL2FwaS9nZXQtbWVzc2FnZXMnKTtcbiAgICAgICAgc2V0TWVzc2FnZXMocmVzcG9uc2UuZGF0YS5tZXNzYWdlcyB8fCBbXSk7XG4gICAgICAgIGlmIChyZWZyZXNoKSB7XG4gICAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdSZWZyZXNoZWQgTWVzc2FnZXMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTaG93aW5nIGxhdGVzdCBtZXNzYWdlcycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yPEFwaVJlc3BvbnNlPjtcbiAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgYXhpb3NFcnJvci5yZXNwb25zZT8uZGF0YS5tZXNzYWdlID8/ICdGYWlsZWQgdG8gZmV0Y2ggbWVzc2FnZXMnLFxuICAgICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICAgIH0pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SXNTd2l0Y2hMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtzZXRJc0xvYWRpbmcsIHNldE1lc3NhZ2VzLCB0b2FzdF1cbiAgKTtcblxuICAvLyBGZXRjaCBpbml0aWFsIHN0YXRlIGZyb20gdGhlIHNlcnZlclxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSByZXR1cm47XG5cbiAgICBmZXRjaE1lc3NhZ2VzKCk7XG5cbiAgICBmZXRjaEFjY2VwdE1lc3NhZ2VzKCk7XG4gIH0sIFtzZXNzaW9uLCBzZXRWYWx1ZSwgdG9hc3QsIGZldGNoQWNjZXB0TWVzc2FnZXMsIGZldGNoTWVzc2FnZXNdKTtcblxuICAvLyBIYW5kbGUgc3dpdGNoIGNoYW5nZVxuICBjb25zdCBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdDxBcGlSZXNwb25zZT4oJy9hcGkvYWNjZXB0LW1lc3NhZ2VzJywge1xuICAgICAgICBhY2NlcHRNZXNzYWdlczogIWFjY2VwdE1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgICBzZXRWYWx1ZSgnYWNjZXB0TWVzc2FnZXMnLCAhYWNjZXB0TWVzc2FnZXMpO1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICB2YXJpYW50OiAnZGVmYXVsdCcsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I8QXBpUmVzcG9uc2U+O1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgYXhpb3NFcnJvci5yZXNwb25zZT8uZGF0YS5tZXNzYWdlID8/XG4gICAgICAgICAgJ0ZhaWxlZCB0byB1cGRhdGUgbWVzc2FnZSBzZXR0aW5ncycsXG4gICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XG4gIH1cblxuICBjb25zdCB7IHVzZXJuYW1lIH0gPSBzZXNzaW9uLnVzZXIgYXMgVXNlcjtcblxuICBjb25zdCBiYXNlVXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH1gO1xuICBjb25zdCBwcm9maWxlVXJsID0gYCR7YmFzZVVybH0vdS8ke3VzZXJuYW1lfWA7XG5cbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb2ZpbGVVcmwpO1xuICAgIHRvYXN0KHtcbiAgICAgIHRpdGxlOiAnVVJMIENvcGllZCEnLFxuICAgICAgZGVzY3JpcHRpb246ICdQcm9maWxlIFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkLicsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTggbXgtNCBtZDpteC04IGxnOm14LWF1dG8gcC02IGJnLVsjIzk4QUVDN10gcm91bmRlZCB3LWZ1bGwgbWF4LXctNnhsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5Vc2VyIERhc2hib2FyZDwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj5Db3B5IFlvdXIgVW5pcXVlIExpbms8L2gyPnsnICd9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9maWxlVXJsfVxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBwLTIgbXItMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+Q29weTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIHsuLi5yZWdpc3RlcignYWNjZXB0TWVzc2FnZXMnKX1cbiAgICAgICAgICBjaGVja2VkPXthY2NlcHRNZXNzYWdlc31cbiAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U9e2hhbmRsZVN3aXRjaENoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17aXNTd2l0Y2hMb2FkaW5nfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgQWNjZXB0IE1lc3NhZ2VzOiB7YWNjZXB0TWVzc2FnZXMgPyAnT24nIDogJ09mZid9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNlcGFyYXRvciAvPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxuICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGZldGNoTWVzc2FnZXModHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwiaC00IHctNCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWZyZXNoQ2N3IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICApfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICB7bWVzc2FnZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TWVzc2FnZUNhcmRcbiAgICAgICAgICAgICAga2V5PXttZXNzYWdlLl9pZH1cbiAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgb25NZXNzYWdlRGVsZXRlPXtoYW5kbGVEZWxldGVNZXNzYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPk5vIG1lc3NhZ2VzIHRvIGRpc3BsYXkuPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJEYXNoYm9hcmQ7XG4iXSwibmFtZXMiOlsiTWVzc2FnZUNhcmQiLCJCdXR0b24iLCJTZXBhcmF0b3IiLCJTd2l0Y2giLCJ1c2VUb2FzdCIsInpvZFJlc29sdmVyIiwiYXhpb3MiLCJMb2FkZXIyIiwiUmVmcmVzaENjdyIsInVzZVNlc3Npb24iLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiQWNjZXB0TWVzc2FnZVNjaGVtYSIsIlVzZXJEYXNoYm9hcmQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNTd2l0Y2hMb2FkaW5nIiwic2V0SXNTd2l0Y2hMb2FkaW5nIiwidG9hc3QiLCJoYW5kbGVEZWxldGVNZXNzYWdlIiwibWVzc2FnZUlkIiwiZmlsdGVyIiwibWVzc2FnZSIsIl9pZCIsImRhdGEiLCJzZXNzaW9uIiwiZm9ybSIsInJlc29sdmVyIiwicmVnaXN0ZXIiLCJ3YXRjaCIsInNldFZhbHVlIiwiYWNjZXB0TWVzc2FnZXMiLCJmZXRjaEFjY2VwdE1lc3NhZ2VzIiwicmVzcG9uc2UiLCJnZXQiLCJpc0FjY2VwdGluZ01lc3NhZ2VzIiwiZXJyb3IiLCJheGlvc0Vycm9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJmZXRjaE1lc3NhZ2VzIiwicmVmcmVzaCIsInVzZXIiLCJoYW5kbGVTd2l0Y2hDaGFuZ2UiLCJwb3N0IiwiZGl2IiwidXNlcm5hbWUiLCJiYXNlVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJwcm9maWxlVXJsIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY2hlY2tlZCIsIm9uQ2hlY2tlZENoYW5nZSIsInNwYW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsIm9uTWVzc2FnZURlbGV0ZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(app)/dashboard/page.tsx\n"));

/***/ })

});