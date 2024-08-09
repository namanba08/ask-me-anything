"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-autoplay";
exports.ids = ["vendor-chunks/embla-carousel-autoplay"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Autoplay)\n/* harmony export */ });\nconst defaultOptions = {\n    active: true,\n    breakpoints: {},\n    delay: 4000,\n    jump: false,\n    playOnInit: true,\n    stopOnFocusIn: true,\n    stopOnInteraction: true,\n    stopOnMouseEnter: false,\n    stopOnLastSnap: false,\n    rootNode: null\n};\nfunction Autoplay(userOptions = {}) {\n    let options;\n    let emblaApi;\n    let destroyed;\n    let playing = false;\n    let resume = true;\n    let jump = false;\n    let animationFrame = 0;\n    let timer = 0;\n    function init(emblaApiInstance, optionsHandler) {\n        emblaApi = emblaApiInstance;\n        const { mergeOptions, optionsAtMedia } = optionsHandler;\n        const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);\n        const allOptions = mergeOptions(optionsBase, userOptions);\n        options = optionsAtMedia(allOptions);\n        if (emblaApi.scrollSnapList().length <= 1) return;\n        jump = options.jump;\n        destroyed = false;\n        const { eventStore, ownerDocument } = emblaApi.internalEngine();\n        const emblaRoot = emblaApi.rootNode();\n        const root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;\n        emblaApi.on(\"pointerDown\", clearTimer);\n        if (!options.stopOnInteraction) {\n            emblaApi.on(\"pointerUp\", startTimer);\n        }\n        if (options.stopOnMouseEnter) {\n            eventStore.add(root, \"mouseenter\", ()=>{\n                resume = false;\n                clearTimer();\n            });\n            if (!options.stopOnInteraction) {\n                eventStore.add(root, \"mouseleave\", ()=>{\n                    resume = true;\n                    startTimer();\n                });\n            }\n        }\n        if (options.stopOnFocusIn) {\n            eventStore.add(root, \"focusin\", clearTimer);\n            if (!options.stopOnInteraction) {\n                eventStore.add(root, \"focusout\", startTimer);\n            }\n        }\n        eventStore.add(ownerDocument, \"visibilitychange\", ()=>{\n            if (ownerDocument.visibilityState === \"hidden\") {\n                resume = playing;\n                return clearTimer();\n            }\n            if (resume) startTimer();\n        });\n        if (options.playOnInit) {\n            emblaApi.on(\"init\", startTimer).on(\"reInit\", startTimer);\n        }\n    }\n    function destroy() {\n        destroyed = true;\n        playing = false;\n        emblaApi.off(\"init\", startTimer).off(\"reInit\", startTimer);\n        emblaApi.off(\"pointerDown\", clearTimer);\n        if (!options.stopOnInteraction) emblaApi.off(\"pointerUp\", startTimer);\n        clearTimer();\n        cancelAnimationFrame(animationFrame);\n        animationFrame = 0;\n    }\n    function startTimer() {\n        if (destroyed) return;\n        if (!resume) return;\n        if (!playing) emblaApi.emit(\"autoplay:play\");\n        const { ownerWindow } = emblaApi.internalEngine();\n        ownerWindow.clearInterval(timer);\n        timer = ownerWindow.setInterval(next, options.delay);\n        playing = true;\n    }\n    function clearTimer() {\n        if (destroyed) return;\n        if (playing) emblaApi.emit(\"autoplay:stop\");\n        const { ownerWindow } = emblaApi.internalEngine();\n        ownerWindow.clearInterval(timer);\n        timer = 0;\n        playing = false;\n    }\n    function play(jumpOverride) {\n        if (typeof jumpOverride !== \"undefined\") jump = jumpOverride;\n        resume = true;\n        startTimer();\n    }\n    function stop() {\n        if (playing) clearTimer();\n    }\n    function reset() {\n        if (playing) play();\n    }\n    function isPlaying() {\n        return playing;\n    }\n    function next() {\n        animationFrame = requestAnimationFrame(()=>{\n            const { index } = emblaApi.internalEngine();\n            const nextIndex = index.clone().add(1).get();\n            const lastIndex = emblaApi.scrollSnapList().length - 1;\n            const kill = options.stopOnLastSnap && nextIndex === lastIndex;\n            if (kill) clearTimer();\n            if (emblaApi.canScrollNext()) {\n                emblaApi.scrollNext(jump);\n            } else {\n                emblaApi.scrollTo(0, jump);\n            }\n        });\n    }\n    const self = {\n        name: \"autoplay\",\n        options: userOptions,\n        init,\n        destroy,\n        play,\n        stop,\n        reset,\n        isPlaying\n    };\n    return self;\n}\nAutoplay.globalOptions = undefined;\n //# sourceMappingURL=embla-carousel-autoplay.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLGFBQWEsQ0FBQztJQUNkQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsWUFBWTtJQUNaQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsa0JBQWtCO0lBQ2xCQyxnQkFBZ0I7SUFDaEJDLFVBQVU7QUFDWjtBQUVBLFNBQVNDLFNBQVNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQztJQUNKLElBQUlDLFVBQVU7SUFDZCxJQUFJQyxTQUFTO0lBQ2IsSUFBSWIsT0FBTztJQUNYLElBQUljLGlCQUFpQjtJQUNyQixJQUFJQyxRQUFRO0lBQ1osU0FBU0MsS0FBS0MsZ0JBQWdCLEVBQUVDLGNBQWM7UUFDNUNSLFdBQVdPO1FBQ1gsTUFBTSxFQUNKRSxZQUFZLEVBQ1pDLGNBQWMsRUFDZixHQUFHRjtRQUNKLE1BQU1HLGNBQWNGLGFBQWF2QixnQkFBZ0JXLFNBQVNlLGFBQWE7UUFDdkUsTUFBTUMsYUFBYUosYUFBYUUsYUFBYWI7UUFDN0NDLFVBQVVXLGVBQWVHO1FBQ3pCLElBQUliLFNBQVNjLGNBQWMsR0FBR0MsTUFBTSxJQUFJLEdBQUc7UUFDM0N6QixPQUFPUyxRQUFRVCxJQUFJO1FBQ25CVyxZQUFZO1FBQ1osTUFBTSxFQUNKZSxVQUFVLEVBQ1ZDLGFBQWEsRUFDZCxHQUFHakIsU0FBU2tCLGNBQWM7UUFDM0IsTUFBTUMsWUFBWW5CLFNBQVNKLFFBQVE7UUFDbkMsTUFBTXdCLE9BQU9yQixRQUFRSCxRQUFRLElBQUlHLFFBQVFILFFBQVEsQ0FBQ3VCLGNBQWNBO1FBQ2hFbkIsU0FBU3FCLEVBQUUsQ0FBQyxlQUFlQztRQUMzQixJQUFJLENBQUN2QixRQUFRTixpQkFBaUIsRUFBRTtZQUM5Qk8s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QjtRQUNBUTtRQUNBRTtRQUNBQztRQUNBQztJQUNGO0lBQ0EsT0FBT1c7QUFDVDtBQUNBcEQsU0FBU2UsYUFBYSxHQUFHdUM7QUFFTSxDQUMvQix1REFBdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0ZXJ5LW1lc3NhZ2UvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcz9hYTkzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBhY3RpdmU6IHRydWUsXG4gIGJyZWFrcG9pbnRzOiB7fSxcbiAgZGVsYXk6IDQwMDAsXG4gIGp1bXA6IGZhbHNlLFxuICBwbGF5T25Jbml0OiB0cnVlLFxuICBzdG9wT25Gb2N1c0luOiB0cnVlLFxuICBzdG9wT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgc3RvcE9uTW91c2VFbnRlcjogZmFsc2UsXG4gIHN0b3BPbkxhc3RTbmFwOiBmYWxzZSxcbiAgcm9vdE5vZGU6IG51bGxcbn07XG5cbmZ1bmN0aW9uIEF1dG9wbGF5KHVzZXJPcHRpb25zID0ge30pIHtcbiAgbGV0IG9wdGlvbnM7XG4gIGxldCBlbWJsYUFwaTtcbiAgbGV0IGRlc3Ryb3llZDtcbiAgbGV0IHBsYXlpbmcgPSBmYWxzZTtcbiAgbGV0IHJlc3VtZSA9IHRydWU7XG4gIGxldCBqdW1wID0gZmFsc2U7XG4gIGxldCBhbmltYXRpb25GcmFtZSA9IDA7XG4gIGxldCB0aW1lciA9IDA7XG4gIGZ1bmN0aW9uIGluaXQoZW1ibGFBcGlJbnN0YW5jZSwgb3B0aW9uc0hhbmRsZXIpIHtcbiAgICBlbWJsYUFwaSA9IGVtYmxhQXBpSW5zdGFuY2U7XG4gICAgY29uc3Qge1xuICAgICAgbWVyZ2VPcHRpb25zLFxuICAgICAgb3B0aW9uc0F0TWVkaWFcbiAgICB9ID0gb3B0aW9uc0hhbmRsZXI7XG4gICAgY29uc3Qgb3B0aW9uc0Jhc2UgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIEF1dG9wbGF5Lmdsb2JhbE9wdGlvbnMpO1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9uc0Jhc2UsIHVzZXJPcHRpb25zKTtcbiAgICBvcHRpb25zID0gb3B0aW9uc0F0TWVkaWEoYWxsT3B0aW9ucyk7XG4gICAgaWYgKGVtYmxhQXBpLnNjcm9sbFNuYXBMaXN0KCkubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICBqdW1wID0gb3B0aW9ucy5qdW1wO1xuICAgIGRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIGV2ZW50U3RvcmUsXG4gICAgICBvd25lckRvY3VtZW50XG4gICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgY29uc3QgZW1ibGFSb290ID0gZW1ibGFBcGkucm9vdE5vZGUoKTtcbiAgICBjb25zdCByb290ID0gb3B0aW9ucy5yb290Tm9kZSAmJiBvcHRpb25zLnJvb3ROb2RlKGVtYmxhUm9vdCkgfHwgZW1ibGFSb290O1xuICAgIGVtYmxhQXBpLm9uKCdwb2ludGVyRG93bicsIGNsZWFyVGltZXIpO1xuICAgIGlmICghb3B0aW9ucy5zdG9wT25JbnRlcmFjdGlvbikge1xuICAgICAgZW1ibGFBcGkub24oJ3BvaW50ZXJVcCcsIHN0YXJ0VGltZXIpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zdG9wT25Nb3VzZUVudGVyKSB7XG4gICAgICBldmVudFN0b3JlLmFkZChyb290LCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgcmVzdW1lID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZXIoKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFvcHRpb25zLnN0b3BPbkludGVyYWN0aW9uKSB7XG4gICAgICAgIGV2ZW50U3RvcmUuYWRkKHJvb3QsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIHJlc3VtZSA9IHRydWU7XG4gICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RvcE9uRm9jdXNJbikge1xuICAgICAgZXZlbnRTdG9yZS5hZGQocm9vdCwgJ2ZvY3VzaW4nLCBjbGVhclRpbWVyKTtcbiAgICAgIGlmICghb3B0aW9ucy5zdG9wT25JbnRlcmFjdGlvbikge1xuICAgICAgICBldmVudFN0b3JlLmFkZChyb290LCAnZm9jdXNvdXQnLCBzdGFydFRpbWVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRTdG9yZS5hZGQob3duZXJEb2N1bWVudCwgJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAob3duZXJEb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgIHJlc3VtZSA9IHBsYXlpbmc7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVyKCk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdW1lKSBzdGFydFRpbWVyKCk7XG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMucGxheU9uSW5pdCkge1xuICAgICAgZW1ibGFBcGkub24oJ2luaXQnLCBzdGFydFRpbWVyKS5vbigncmVJbml0Jywgc3RhcnRUaW1lcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gICAgZW1ibGFBcGkub2ZmKCdpbml0Jywgc3RhcnRUaW1lcikub2ZmKCdyZUluaXQnLCBzdGFydFRpbWVyKTtcbiAgICBlbWJsYUFwaS5vZmYoJ3BvaW50ZXJEb3duJywgY2xlYXJUaW1lcik7XG4gICAgaWYgKCFvcHRpb25zLnN0b3BPbkludGVyYWN0aW9uKSBlbWJsYUFwaS5vZmYoJ3BvaW50ZXJVcCcsIHN0YXJ0VGltZXIpO1xuICAgIGNsZWFyVGltZXIoKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgYW5pbWF0aW9uRnJhbWUgPSAwO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgaWYgKGRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGlmICghcmVzdW1lKSByZXR1cm47XG4gICAgaWYgKCFwbGF5aW5nKSBlbWJsYUFwaS5lbWl0KCdhdXRvcGxheTpwbGF5Jyk7XG4gICAgY29uc3Qge1xuICAgICAgb3duZXJXaW5kb3dcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICBvd25lcldpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IG93bmVyV2luZG93LnNldEludGVydmFsKG5leHQsIG9wdGlvbnMuZGVsYXkpO1xuICAgIHBsYXlpbmcgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyVGltZXIoKSB7XG4gICAgaWYgKGRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGlmIChwbGF5aW5nKSBlbWJsYUFwaS5lbWl0KCdhdXRvcGxheTpzdG9wJyk7XG4gICAgY29uc3Qge1xuICAgICAgb3duZXJXaW5kb3dcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICBvd25lcldpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IDA7XG4gICAgcGxheWluZyA9IGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIHBsYXkoanVtcE92ZXJyaWRlKSB7XG4gICAgaWYgKHR5cGVvZiBqdW1wT3ZlcnJpZGUgIT09ICd1bmRlZmluZWQnKSBqdW1wID0ganVtcE92ZXJyaWRlO1xuICAgIHJlc3VtZSA9IHRydWU7XG4gICAgc3RhcnRUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgaWYgKHBsYXlpbmcpIGNsZWFyVGltZXIoKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpZiAocGxheWluZykgcGxheSgpO1xuICB9XG4gIGZ1bmN0aW9uIGlzUGxheWluZygpIHtcbiAgICByZXR1cm4gcGxheWluZztcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5kZXhcbiAgICAgIH0gPSBlbWJsYUFwaS5pbnRlcm5hbEVuZ2luZSgpO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXguY2xvbmUoKS5hZGQoMSkuZ2V0KCk7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBlbWJsYUFwaS5zY3JvbGxTbmFwTGlzdCgpLmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBraWxsID0gb3B0aW9ucy5zdG9wT25MYXN0U25hcCAmJiBuZXh0SW5kZXggPT09IGxhc3RJbmRleDtcbiAgICAgIGlmIChraWxsKSBjbGVhclRpbWVyKCk7XG4gICAgICBpZiAoZW1ibGFBcGkuY2FuU2Nyb2xsTmV4dCgpKSB7XG4gICAgICAgIGVtYmxhQXBpLnNjcm9sbE5leHQoanVtcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWJsYUFwaS5zY3JvbGxUbygwLCBqdW1wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCBzZWxmID0ge1xuICAgIG5hbWU6ICdhdXRvcGxheScsXG4gICAgb3B0aW9uczogdXNlck9wdGlvbnMsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICAgIHBsYXksXG4gICAgc3RvcCxcbiAgICByZXNldCxcbiAgICBpc1BsYXlpbmdcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5BdXRvcGxheS5nbG9iYWxPcHRpb25zID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgeyBBdXRvcGxheSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJsYS1jYXJvdXNlbC1hdXRvcGxheS5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiZGVmYXVsdE9wdGlvbnMiLCJhY3RpdmUiLCJicmVha3BvaW50cyIsImRlbGF5IiwianVtcCIsInBsYXlPbkluaXQiLCJzdG9wT25Gb2N1c0luIiwic3RvcE9uSW50ZXJhY3Rpb24iLCJzdG9wT25Nb3VzZUVudGVyIiwic3RvcE9uTGFzdFNuYXAiLCJyb290Tm9kZSIsIkF1dG9wbGF5IiwidXNlck9wdGlvbnMiLCJvcHRpb25zIiwiZW1ibGFBcGkiLCJkZXN0cm95ZWQiLCJwbGF5aW5nIiwicmVzdW1lIiwiYW5pbWF0aW9uRnJhbWUiLCJ0aW1lciIsImluaXQiLCJlbWJsYUFwaUluc3RhbmNlIiwib3B0aW9uc0hhbmRsZXIiLCJtZXJnZU9wdGlvbnMiLCJvcHRpb25zQXRNZWRpYSIsIm9wdGlvbnNCYXNlIiwiZ2xvYmFsT3B0aW9ucyIsImFsbE9wdGlvbnMiLCJzY3JvbGxTbmFwTGlzdCIsImxlbmd0aCIsImV2ZW50U3RvcmUiLCJvd25lckRvY3VtZW50IiwiaW50ZXJuYWxFbmdpbmUiLCJlbWJsYVJvb3QiLCJyb290Iiwib24iLCJjbGVhclRpbWVyIiwic3RhcnRUaW1lciIsImFkZCIsInZpc2liaWxpdHlTdGF0ZSIsImRlc3Ryb3kiLCJvZmYiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImVtaXQiLCJvd25lcldpbmRvdyIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5leHQiLCJwbGF5IiwianVtcE92ZXJyaWRlIiwic3RvcCIsInJlc2V0IiwiaXNQbGF5aW5nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5kZXgiLCJuZXh0SW5kZXgiLCJjbG9uZSIsImdldCIsImxhc3RJbmRleCIsImtpbGwiLCJjYW5TY3JvbGxOZXh0Iiwic2Nyb2xsTmV4dCIsInNjcm9sbFRvIiwic2VsZiIsIm5hbWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js\n");

/***/ })

};
;