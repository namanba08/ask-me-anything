"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/verify-code/route";
exports.ids = ["app/api/verify-code/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-code%2Froute&page=%2Fapi%2Fverify-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-code%2Froute.ts&appDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-code%2Froute&page=%2Fapi%2Fverify-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-code%2Froute.ts&appDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_naman_Downloads_ama_app_src_app_api_verify_code_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/verify-code/route.ts */ \"(rsc)/./src/app/api/verify-code/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/verify-code/route\",\n        pathname: \"/api/verify-code\",\n        filename: \"route\",\n        bundlePath: \"app/api/verify-code/route\"\n    },\n    resolvedPagePath: \"/Users/naman/Downloads/ama-app/src/app/api/verify-code/route.ts\",\n    nextConfigOutput,\n    userland: _Users_naman_Downloads_ama_app_src_app_api_verify_code_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/verify-code/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2ZXJpZnktY29kZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdmVyaWZ5LWNvZGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2ZXJpZnktY29kZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm5hbWFuJTJGRG93bmxvYWRzJTJGYW1hLWFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZuYW1hbiUyRkRvd25sb2FkcyUyRmFtYS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8/NTY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbmFtYW4vRG93bmxvYWRzL2FtYS1hcHAvc3JjL2FwcC9hcGkvdmVyaWZ5LWNvZGUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZlcmlmeS1jb2RlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdmVyaWZ5LWNvZGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ZlcmlmeS1jb2RlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL25hbWFuL0Rvd25sb2Fkcy9hbWEtYXBwL3NyYy9hcHAvYXBpL3ZlcmlmeS1jb2RlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3ZlcmlmeS1jb2RlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-code%2Froute&page=%2Fapi%2Fverify-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-code%2Froute.ts&appDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/verify-code/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/verify-code/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n\n\nasync function POST(request) {\n    // Connect to the database\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const { username, code } = await request.json();\n        const decodedUsername = decodeURIComponent(username);\n        const user = await _model_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            username: decodedUsername\n        });\n        if (!user) {\n            return Response.json({\n                success: false,\n                message: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Check if the code is correct and not expired\n        const isCodeValid = user.verifyCode === code;\n        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();\n        if (isCodeValid && isCodeNotExpired) {\n            // Update the user's verification status\n            user.isVerified = true;\n            await user.save();\n            return Response.json({\n                success: true,\n                message: \"Account verified successfully\"\n            }, {\n                status: 200\n            });\n        } else if (!isCodeNotExpired) {\n            // Code has expired\n            return Response.json({\n                success: false,\n                message: \"Verification code has expired. Please sign up again to get a new code.\"\n            }, {\n                status: 400\n            });\n        } else {\n            // Code is incorrect\n            return Response.json({\n                success: false,\n                message: \"Incorrect verification code\"\n            }, {\n                status: 400\n            });\n        }\n    } catch (error) {\n        console.error(\"Error verifying user:\", error);\n        return Response.json({\n            success: false,\n            message: \"Error verifying user\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS92ZXJpZnktY29kZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDSDtBQUU5QixlQUFlRSxLQUFLQyxPQUFnQjtJQUN6QywwQkFBMEI7SUFDMUIsTUFBTUgsMERBQVNBO0lBRWYsSUFBSTtRQUNGLE1BQU0sRUFBRUksUUFBUSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBQzdDLE1BQU1DLGtCQUFrQkMsbUJBQW1CSjtRQUMzQyxNQUFNSyxPQUFPLE1BQU1SLG1EQUFTQSxDQUFDUyxPQUFPLENBQUM7WUFBRU4sVUFBVUc7UUFBZ0I7UUFFakUsSUFBSSxDQUFDRSxNQUFNO1lBQ1QsT0FBT0UsU0FBU0wsSUFBSSxDQUNsQjtnQkFBRU0sU0FBUztnQkFBT0MsU0FBUztZQUFpQixHQUM1QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsK0NBQStDO1FBQy9DLE1BQU1DLGNBQWNOLEtBQUtPLFVBQVUsS0FBS1g7UUFDeEMsTUFBTVksbUJBQW1CLElBQUlDLEtBQUtULEtBQUtVLGdCQUFnQixJQUFJLElBQUlEO1FBRS9ELElBQUlILGVBQWVFLGtCQUFrQjtZQUNuQyx3Q0FBd0M7WUFDeENSLEtBQUtXLFVBQVUsR0FBRztZQUNsQixNQUFNWCxLQUFLWSxJQUFJO1lBRWYsT0FBT1YsU0FBU0wsSUFBSSxDQUNsQjtnQkFBRU0sU0FBUztnQkFBTUMsU0FBUztZQUFnQyxHQUMxRDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCLE9BQU8sSUFBSSxDQUFDRyxrQkFBa0I7WUFDNUIsbUJBQW1CO1lBQ25CLE9BQU9OLFNBQVNMLElBQUksQ0FDbEI7Z0JBQ0VNLFNBQVM7Z0JBQ1RDLFNBQ0U7WUFDSixHQUNBO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEIsT0FBTztZQUNMLG9CQUFvQjtZQUNwQixPQUFPSCxTQUFTTCxJQUFJLENBQ2xCO2dCQUFFTSxTQUFTO2dCQUFPQyxTQUFTO1lBQThCLEdBQ3pEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7SUFDRixFQUFFLE9BQU9RLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT1gsU0FBU0wsSUFBSSxDQUNsQjtZQUFFTSxTQUFTO1lBQU9DLFNBQVM7UUFBdUIsR0FDbEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0ZXJ5LW1lc3NhZ2UvLi9zcmMvYXBwL2FwaS92ZXJpZnktY29kZS9yb3V0ZS50cz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnQC9saWIvZGJDb25uZWN0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnQC9tb2RlbC9Vc2VyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGNvZGUgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IGRlY29kZWRVc2VybmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh1c2VybmFtZSk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgdXNlcm5hbWU6IGRlY29kZWRVc2VybmFtZSB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCcgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBjb2RlIGlzIGNvcnJlY3QgYW5kIG5vdCBleHBpcmVkXG4gICAgY29uc3QgaXNDb2RlVmFsaWQgPSB1c2VyLnZlcmlmeUNvZGUgPT09IGNvZGU7XG4gICAgY29uc3QgaXNDb2RlTm90RXhwaXJlZCA9IG5ldyBEYXRlKHVzZXIudmVyaWZ5Q29kZUV4cGlyeSkgPiBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKGlzQ29kZVZhbGlkICYmIGlzQ29kZU5vdEV4cGlyZWQpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgdXNlcidzIHZlcmlmaWNhdGlvbiBzdGF0dXNcbiAgICAgIHVzZXIuaXNWZXJpZmllZCA9IHRydWU7XG4gICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcblxuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0FjY291bnQgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyB9LFxuICAgICAgICB7IHN0YXR1czogMjAwIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaXNDb2RlTm90RXhwaXJlZCkge1xuICAgICAgLy8gQ29kZSBoYXMgZXhwaXJlZFxuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1ZlcmlmaWNhdGlvbiBjb2RlIGhhcyBleHBpcmVkLiBQbGVhc2Ugc2lnbiB1cCBhZ2FpbiB0byBnZXQgYSBuZXcgY29kZS4nLFxuICAgICAgICB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvZGUgaXMgaW5jb3JyZWN0XG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0luY29ycmVjdCB2ZXJpZmljYXRpb24gY29kZScgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB2ZXJpZnlpbmcgdXNlcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJyb3IgdmVyaWZ5aW5nIHVzZXInIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiVXNlck1vZGVsIiwiUE9TVCIsInJlcXVlc3QiLCJ1c2VybmFtZSIsImNvZGUiLCJqc29uIiwiZGVjb2RlZFVzZXJuYW1lIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidXNlciIsImZpbmRPbmUiLCJSZXNwb25zZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwiaXNDb2RlVmFsaWQiLCJ2ZXJpZnlDb2RlIiwiaXNDb2RlTm90RXhwaXJlZCIsIkRhdGUiLCJ2ZXJpZnlDb2RlRXhwaXJ5IiwiaXNWZXJpZmllZCIsInNhdmUiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/verify-code/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    // Check if we have a connection to the database or if it's currently connecting\n    if (connection.isConnected) {\n        console.log(\"Already connected to the database\");\n        return;\n    }\n    try {\n        // Attempt to connect to the database\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI || \"\", {});\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"Database connected successfully\");\n    } catch (error) {\n        console.error(\"Database connection failed:\", error);\n        // Graceful exit in case of a connection error\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFNaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUNiLGdGQUFnRjtJQUNoRixJQUFJRCxXQUFXRSxXQUFXLEVBQUU7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YscUNBQXFDO1FBQ3JDLE1BQU1DLEtBQUssTUFBTU4sdURBQWdCLENBQUNRLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJLElBQUksQ0FBQztRQUVsRVQsV0FBV0UsV0FBVyxHQUFHRyxHQUFHSyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO1FBRXJEUixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9RLE9BQU87UUFDZFQsUUFBUVMsS0FBSyxDQUFDLCtCQUErQkE7UUFFN0MsOENBQThDO1FBQzlDTCxRQUFRTSxJQUFJLENBQUM7SUFDZjtBQUNGO0FBRUEsaUVBQWVaLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0ZXJ5LW1lc3NhZ2UvLi9zcmMvbGliL2RiQ29ubmVjdC50cz82MGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbnR5cGUgQ29ubmVjdGlvbk9iamVjdCA9IHtcbiAgaXNDb25uZWN0ZWQ/OiBudW1iZXI7XG59O1xuXG5jb25zdCBjb25uZWN0aW9uOiBDb25uZWN0aW9uT2JqZWN0ID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlIG9yIGlmIGl0J3MgY3VycmVudGx5IGNvbm5lY3RpbmdcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBBdHRlbXB0IHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICcnLCB7fSk7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcblxuICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xuXG4gICAgLy8gR3JhY2VmdWwgZXhpdCBpbiBjYXNlIG9mIGEgY29ubmVjdGlvbiBlcnJvclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiZXJyb3IiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/User.ts":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now\n    }\n});\n// Updated User schema\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        trim: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /.+\\@.+\\..+/,\n            \"Please use a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"Verify Code is required\"\n        ]\n    },\n    verifyCodeExpiry: {\n        type: Date,\n        required: [\n            true,\n            \"Verify Code Expiry is required\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAcceptingMessages: {\n        type: Boolean,\n        default: true\n    },\n    messages: [\n        MessageSchema\n    ]\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFPdEQsTUFBTUMsZ0JBQWlDLElBQUlELHdEQUFlLENBQUM7SUFDekRHLFNBQVM7UUFDUEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVEgsTUFBTUk7UUFDTkYsVUFBVTtRQUNWRyxTQUFTRCxLQUFLRSxHQUFHO0lBQ25CO0FBQ0Y7QUFhQSxzQkFBc0I7QUFDdEIsTUFBTUMsYUFBMkIsSUFBSVgsd0RBQWUsQ0FBQztJQUNuRFksVUFBVTtRQUNSUixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtRQUN4Q08sTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMWCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFvQjtRQUNyQ1EsUUFBUTtRQUNSRSxPQUFPO1lBQUM7WUFBYztTQUFtQztJQUMzRDtJQUNBQyxVQUFVO1FBQ1JiLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO0lBQzFDO0lBQ0FZLFlBQVk7UUFDVmQsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMEI7SUFDN0M7SUFDQWEsa0JBQWtCO1FBQ2hCZixNQUFNSTtRQUNORixVQUFVO1lBQUM7WUFBTTtTQUFpQztJQUNwRDtJQUNBYyxZQUFZO1FBQ1ZoQixNQUFNaUI7UUFDTlosU0FBUztJQUNYO0lBQ0FhLHFCQUFxQjtRQUNuQmxCLE1BQU1pQjtRQUNOWixTQUFTO0lBQ1g7SUFDQWMsVUFBVTtRQUFDdEI7S0FBYztBQUMzQjtBQUVBLE1BQU11QixZQUNKLHdEQUFnQixDQUFDRSxJQUFJLElBQ3JCMUIscURBQWMsQ0FBTyxRQUFRVztBQUUvQixpRUFBZWEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8uL3NyYy9tb2RlbC9Vc2VyLnRzP2E2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSBleHRlbmRzIERvY3VtZW50IHtcbiAgY29udGVudDogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IE1lc3NhZ2VTY2hlbWE6IFNjaGVtYTxNZXNzYWdlPiA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBjb250ZW50OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBjcmVhdGVkQXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgdmVyaWZ5Q29kZTogc3RyaW5nO1xuICB2ZXJpZnlDb2RlRXhwaXJ5OiBEYXRlOyBcbiAgaXNWZXJpZmllZDogYm9vbGVhbjtcbiAgaXNBY2NlcHRpbmdNZXNzYWdlczogYm9vbGVhbjtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcbn1cblxuLy8gVXBkYXRlZCBVc2VyIHNjaGVtYVxuY29uc3QgVXNlclNjaGVtYTogU2NoZW1hPFVzZXI+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXJuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJ10sXG4gICAgdHJpbTogdHJ1ZSxcbiAgICB1bmlxdWU6IHRydWUsXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VtYWlsIGlzIHJlcXVpcmVkJ10sXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIG1hdGNoOiBbLy4rXFxALitcXC4uKy8sICdQbGVhc2UgdXNlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdQYXNzd29yZCBpcyByZXF1aXJlZCddLFxuICB9LFxuICB2ZXJpZnlDb2RlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1ZlcmlmeSBDb2RlIGlzIHJlcXVpcmVkJ10sXG4gIH0sXG4gIHZlcmlmeUNvZGVFeHBpcnk6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1ZlcmlmeSBDb2RlIEV4cGlyeSBpcyByZXF1aXJlZCddLFxuICB9LFxuICBpc1ZlcmlmaWVkOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgaXNBY2NlcHRpbmdNZXNzYWdlczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgbWVzc2FnZXM6IFtNZXNzYWdlU2NoZW1hXSxcbn0pO1xuXG5jb25zdCBVc2VyTW9kZWwgPVxuICAobW9uZ29vc2UubW9kZWxzLlVzZXIgYXMgbW9uZ29vc2UuTW9kZWw8VXNlcj4pIHx8XG4gIG1vbmdvb3NlLm1vZGVsPFVzZXI+KCdVc2VyJywgVXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1lc3NhZ2VTY2hlbWEiLCJTY2hlbWEiLCJjb250ZW50IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJVc2VyU2NoZW1hIiwidXNlcm5hbWUiLCJ0cmltIiwidW5pcXVlIiwiZW1haWwiLCJtYXRjaCIsInBhc3N3b3JkIiwidmVyaWZ5Q29kZSIsInZlcmlmeUNvZGVFeHBpcnkiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImlzQWNjZXB0aW5nTWVzc2FnZXMiLCJtZXNzYWdlcyIsIlVzZXJNb2RlbCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-code%2Froute&page=%2Fapi%2Fverify-code%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-code%2Froute.ts&appDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnaman%2FDownloads%2Fama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();